import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import JobState from "./Context/Jobs/JobState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <JobState>
            <App />
        </JobState>
    </React.StrictMode>
);
