// import React, { useState } from "react";
// import "./Style/Result.css";

// export default function DownloadResults() {
//   const [dateOption, setDateOption] = useState("last");
//   const [days, setDays] = useState(7);
//   const [format, setFormat] = useState("excel");
//   const [viewType, setViewType] = useState("standard");

//   return (
//     <div className="overlay">
//       <div className="modal">
        
//         {/* Header */}
//         <div className="modal-header">
//           <h2>Download results</h2>
//           <span className="close-btn">×</span>
//         </div>

//         {/* Info Box */}
//         <div className="info-box">
//           <span>ℹ️</span> All results will be downloaded.
//         </div>

//         {/* Body */}
//         <div className="modal-body">

//           {/* Left Section */}
//           <div className="section">
//             <h4>Date range</h4>

//             <label>
//               <input
//                 type="radio"
//                 checked={dateOption === "today"}
//                 onChange={() => setDateOption("today")}
//               />
//               Today
//             </label>

//             <div className="row">
//               <input
//                 type="radio"
//                 checked={dateOption === "last"}
//                 onChange={() => setDateOption("last")}
//               />
//               <span>Last</span>

//               <input
//                 type="number"
//                 value={days}
//                 onChange={(e) => setDays(e.target.value)}
//                 className="input-small"
//               />

//               <select>
//                 <option>days</option>
//                 <option>weeks</option>
//               </select>

//               <span className="info">i</span>
//             </div>

//             <label>
//               <input
//                 type="radio"
//                 checked={dateOption === "current"}
//                 onChange={() => setDateOption("current")}
//               />
//               Current Week
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 checked={dateOption === "previous"}
//                 onChange={() => setDateOption("previous")}
//               />
//               Previous Week
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 checked={dateOption === "year"}
//                 onChange={() => setDateOption("year")}
//               />
//               One rolling year
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 checked={dateOption === "custom"}
//                 onChange={() => setDateOption("custom")}
//               />
//               Custom range
//             </label>
//           </div>

//           {/* Right Section */}
//           <div className="section right">
//             <h4>Download format</h4>

//             <label>
//               <input
//                 type="radio"
//                 checked={format === "excel"}
//                 onChange={() => setFormat("excel")}
//               />
//               Excel
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 checked={format === "csv"}
//                 onChange={() => setFormat("csv")}
//               />
//               CSV
//             </label>
//           </div>

//         </div>

//         {/* View Type */}
//         <div className="view-section">
//           <h4>
//             View type <span className="link">See examples</span>
//           </h4>

//           <div className="view-options">
//             <label>
//               <input
//                 type="radio"
//                 checked={viewType === "standard"}
//                 onChange={() => setViewType("standard")}
//               />
//               <div>
//                 <strong>Standard view</strong>
//                 <p>Results will be displayed as is</p>
//               </div>
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 checked={viewType === "compare"}
//                 onChange={() => setViewType("compare")}
//               />
//               <div>
//                 <strong>Compare view</strong>
//                 <p>Results will be displayed horizontally</p>
//               </div>
//             </label>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="modal-footer">
//           <button className="btn primary">Download</button>
//           <button className="btn">Cancel</button>
//         </div>

//       </div>
//     </div>
//   );
// }