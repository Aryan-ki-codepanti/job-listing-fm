import { useEffect, useState } from "react";
import JobContext from "./JobContext";

const JobState = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await fetch("../Data/data.json");
            const res = await req.json();

            setJobs(prev => res);
        };

        fetchData();
    }, []);

    return (
        <JobContext.Provider value={{ jobs, setJobs, tags, setTags }}>
            {children}
        </JobContext.Provider>
    );
};

export default JobState;
