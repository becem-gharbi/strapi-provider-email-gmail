# Strapi Provider Email Gmail

A Strapi plugin for sending email from Gmail through google oauth2

## Installation

```bash
npm i @bg-dev/strapi-provider-email-gmail
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**For detailed intructions on how to get these secrets, please refer to this [video tutorial](https://www.youtube.com/watch?v=-rcRf7yswfM&ab_channel=yoursTRULY)**

`GMAIL_CLIENT_ID`

`GMAIL_CLIENT_SECRET`

`GMAIL_USER_EMAIL`

`GMAIL_REFRESH_TOKEN`

## Setup

#### config/plugins

```javascript
module.exports = ({ env }) => ({
  // // ...
  email: {
    config: {
      provider: "@bg-dev/strapi-provider-email-gmail",
      providerOptions: {
        clientId: env("GMAIL_CLIENT_ID"),
        clientSecret: env("GMAIL_CLIENT_SECRET"),
        userEmail: env("GMAIL_USER_EMAIL"),
        refreshToken: env("GMAIL_REFRESH_TOKEN"),
      },
      settings: {
        defaultFrom: env("GMAIL_USER_EMAIL"),
        defaultReplyTo: env("GMAIL_USER_EMAIL"),
      },
    },
  },
  // ...
});
```

