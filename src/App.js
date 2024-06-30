import { useContext } from "react";
import JobContext from "./Context/Jobs/JobContext";
import "./App.css";
import JobCard from "./Components/JobCard";

function App() {
    const { jobs } = useContext(JobContext);

    return (
        <div className="App">
            <header></header>

            <div className="jobList container">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
}

export default App;
