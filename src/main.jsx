// Import the `createRoot` function from the `react-dom/client` module.
// This function is used to create a root for rendering a React application in the DOM.
import { createRoot } from "react-dom/client";

// Import the `App` component from the `./App.jsx` file.
// This component will serve as the main component of the React application.
import App from "./App.jsx";

// Import the `Provider` component from the `react-redux` module.
// This component is used to make the Redux store available to the React application.
import { Provider } from "react-redux";

// Import the `store` from the `./app/store.js` file.
// The `store` is the Redux store that holds the application's state.
import store from "./app/store.js";

// Create a root for rendering the React application by targeting the DOM element with the id "root".
// Use the `createRoot` function from the `react-dom/client` module to do this.
createRoot(document.getElementById("root")).render(
  // Render the React application inside the root.
  // Wrap the `App` component with the `Provider` to make the Redux store available to the entire component tree.
  <Provider store={store}>
    {/* Render the `App` component as the main component of the application */}
    <App />
  </Provider>
);
