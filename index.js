const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");

module.exports = {
  init: ({ clientId, clientSecret, refreshToken, userEmail }) => {
    var transport = null;

    const oAuth2Client = new OAuth2Client(
      clientId,
      clientSecret,
      "https://developers.google.com/oauthplayground"
    );

    oAuth2Client.setCredentials({ refresh_token: refreshToken });

    oAuth2Client.getAccessToken().then((accessToken) => {
      transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: userEmail,
          clientId: clientId,
          clientSecret: clientSecret,
          refreshToken: refreshToken,
          accessToken: accessToken,
        },
      });
    });

    return {
      send: (options) => {
        return new Promise((resolve, reject) => {
          if (transport === null) {
            reject("Gmail provider not initialized");
          } else {
            transport
              .sendMail(options)
              .then(() => resolve())
              .catch((error) => reject(error));
          }
        });
      },
    };
  },
};
