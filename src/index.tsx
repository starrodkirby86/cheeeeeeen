import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Thanks to this article for getting typescript to work with experimental react!
// https://skovy.dev/getting-started-react-concurrent-mode-typescript/
const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
