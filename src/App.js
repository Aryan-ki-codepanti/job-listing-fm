import { useContext } from "react";
import JobContext from "./Context/Jobs/JobContext";
import "./App.css";
import JobCard from "./Components/JobCard";
import TagList from "./Components/TagList";

function App() {
    const { jobs, tags } = useContext(JobContext);

    const isGoodJob = ({ role, level, languages, tools }) => {
        const job_tags = [role, level, ...languages, ...tools];

        for (const tag of tags) {
            if (!job_tags.includes(tag)) return false;
        }
        return true;
    };

    return (
        <div className="App">
            <header>
                <TagList />
            </header>

            <div className="jobList container">
                {jobs.map(
                    job => isGoodJob(job) && <JobCard key={job.id} job={job} />
                )}
            </div>
        </div>
    );
}

export default App;
