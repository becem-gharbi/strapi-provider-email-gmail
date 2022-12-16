# Strapi Provider Email Gmail

A Strapi plugin for sending email from Gmail.

## Installation


```bash
npm i strapi-provider-email-gmail
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GMAIL_CLIENT_ID`

`GMAIL_CLIENT_SECRET`

`GMAIL_CLIENT_EMAIL`

`GMAIL_REFRESH_TOKEN`

## Setup

#### config/plugins

```javascript
module.exports = ({ env }) => ({
  // // ...
  email: {
    config: {
      provider: "strapi-provider-email-gmail",
      providerOptions: {
        clientId: env("GMAIL_CLIENT_ID"),
        clientSecret: env("GMAIL_CLIENT_SECRET"),
        clientEmail: env("GMAIL_CLIENT_EMAIL"),
        refreshToken: env("GMAIL_REFRESH_TOKEN"),
      },
      settings: {
        defaultFrom: env("GMAIL_CLIENT_EMAIL"),
        defaultReplyTo: env("GMAIL_CLIENT_EMAIL"),
      },
    },
  },
  // ...
});
```

