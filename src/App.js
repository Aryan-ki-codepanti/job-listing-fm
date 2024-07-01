import { useContext } from "react";
import JobContext from "./Context/Jobs/JobContext";
import "./App.css";
import JobCard from "./Components/JobCard";
import TagList from "./Components/TagList";

function App() {
    const { jobs } = useContext(JobContext);

    return (
        <div className="App">
            <header>
                <TagList />
            </header>

            <div className="jobList container">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
}

export default App;
