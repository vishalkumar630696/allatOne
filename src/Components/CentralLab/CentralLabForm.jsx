

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Style/Form.css";

export default function CentralLabForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    code: "",
    labname: "",
    location: "",
    labtype: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // ✅ EDIT LOAD (localStorage se)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("centrallab")) || [];

    if (id !== undefined && id !== null) {
      const record = stored[Number(id)];
      if (record) {
        setData(record);
      }
    }
  }, [id]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    let err = {};
    if (!data.code.trim()) err.code = "Code is required";
    if (!data.labname.trim()) err.labname = "Lab Name is required";
    if (!data.location.trim()) err.location = "Location is required";
    if (!data.labtype.trim()) err.labtype = "Lab Type is required";
    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    let oldData = JSON.parse(localStorage.getItem("centrallab")) || [];

    if (id !== undefined && id !== null) {
      oldData[Number(id)] = data;
      setMessage("Record Updated Successfully ");
    } else {
      oldData.push(data);
      setMessage("Record Added Successfully ");
    }

    localStorage.setItem("centrallab", JSON.stringify(oldData));

    setTimeout(() => {
      setMessage("");
      navigate("/centrallab");
      window.location.reload(); // same as instrument
    }, 1500);

    setData({
      code: "",
      labname: "",
      location: "",
      labtype: ""
    });

    setErrors({});
  }

  const isEdit = id !== undefined;

  return (
    <div className={`form-container ${isEdit ? "edit-form" : ""}`}>
      <div className="form-card">
        <h2 className="form-title cl2">Central Lab Master</h2>

        {message && <div className="custom-alert">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <i className="fa-solid fa-hashtag me-2"></i> Code
            </label>
            <input name="code" value={data.code} onChange={handleChange}  placeholder="Code... "/>
            {errors.code && <small className="text-danger">{errors.code}</small>}
          </div>

          <div className="form-group">
            <label>
              <i className="fa-solid fa-building me-2"></i> Lab Name
            </label>
            <input name="labname" value={data.labname} onChange={handleChange}  placeholder="Lab Name... "/>
          </div>

          <div className="form-group">
            <label>
              <i className="fa-solid fa-location-dot me-2"></i> Location
            </label>
            <input name="location" value={data.location} onChange={handleChange}  placeholder="Location... "/>
          </div>

          <div className="form-group">
            <label>
              <i className="fa-solid fa-industry me-2"></i> Lab Type
            </label>
            <input name="labtype" value={data.labtype} onChange={handleChange}  placeholder="Lab type... "/>
          </div>

          <button className="btn-submit w-100">
            {isEdit ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}