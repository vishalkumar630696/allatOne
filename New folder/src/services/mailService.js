const { ClientSecretCredential } = require("@azure/identity");
const { Client } = require("@microsoft/microsoft-graph-client");
require("isomorphic-fetch");

const credential = new ClientSecretCredential(
  process.env.AZURE_TENANT_ID,
  process.env.AZURE_CLIENT_ID,
  process.env.AZURE_CLIENT_SECRET
);

const client = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () => {
      const token = await credential.getToken("https://graph.microsoft.com/.default");
      return token.token;
    }
  }
});

const sendMail = async (to, subject, html) => {
  try {
    await client.api(`/users/${process.env.AZURE_MAIL_SENDER}/sendMail`)
      .post({
        message: {
          subject: subject,
          body: {
            contentType: "HTML",
            content: html
          },
          toRecipients: [
            {
              emailAddress: {
                address: to
              }
            }
          ]
        }
      });

    console.log("Mail sent successfully");
    return true;

  } catch (error) {
    console.error("Mail error:", error);
    return false;
  }
};

module.exports = { sendMail };