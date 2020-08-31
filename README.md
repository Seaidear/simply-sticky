[![Netlify Status](https://api.netlify.com/api/v1/badges/3f0096a2-25c0-4f22-836d-3060885fc967/deploy-status)](https://app.netlify.com/sites/simplysticky/deploys)

# SimplySticky - A Serverless Sticky-Notes App

SimpliSticky is a productivity (note-taking) app build with React which is utilizing serverless cloud functions to perform any of its backend functionality.

## Notable Features

- Authentication implemented using Netlify Identity (Serverless auth solution)
  - Custom Hook to interact with Netlify Identity included
- Full CRUD-functionality through serverless API-endpoints utilizing Netlify Functions
  - Data is secured through double encryption - both client- & server-side
- Global App-state managed via Redux + AuthProvider managed via React Context API
- UI implemented using React & Materialize CSS
- Internal Routing via React Router (incl. protected routes)
- Subtle Animations through Animate.css

## Available Development Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
