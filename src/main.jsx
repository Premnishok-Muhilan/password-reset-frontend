import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

// createRoot(document.getElementById('root')).render(<App />);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
Added Redux to the application for centralized state management. Created todoSlice.js and created a todoSlice object which holds the name, initial state and reducers.Configured the store in store.js. Wrapped the <app/> component in main.jsx with the <Provider store={store}> <App/> </Provider>.Modified the Home.jsx using the redux.
*/
