# Deep Pharma WEB

### Environment

Create a .env.local file in the root of the project and after that paste the following variables:

```env
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://dev-nqzpabibd42atqci.us.auth0.com'
AUTH0_CLIENT_ID='nYQbbJa5MuCYiyyRiOIrTYwRw6drEQuy'
AUTH0_CLIENT_SECRET=

AUTH0_AUDIENCE='http://localhost:3001/'
GRANT_TYPE='client_credentials'
TOKEN_BASE_URL='https://dev-nqzpabibd42atqci.us.auth0.com/oauth/token'
AUTH0_SCOPE='openid profile email'
```

This will automatically connect our Next.js with Auth0

### Run project

Open the project in your code editor, open a terminal and run the following commands to install the necessary dependencies and initialize the project.

```bash
npm install
npm run dev
```

### Storybook

Storybook is a standalone Next.js tool that allows you to develop, display and test React components in isolation. It facilitates the creation, organization and visualization of components without running the entire application. By integrating it into a Next.js project, you can create "stories" for each component, allowing you to view them in different states and with various props.

To open the storybook server, run the following command:

```bash
npm run storybook
```
