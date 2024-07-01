import React, { useContext } from "react";
import "./JobCard.css";
import JobContext from "../../Context/Jobs/JobContext";

const JobCard = ({
    job: {
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
        ...new_
    }
}) => {
    // console.log(job)
    new_ = new_.new;
    const job_tags = [role, level, ...languages, ...tools];
    const { tags, setTags } = useContext(JobContext);

    const handleTagAdd = (e, tagName) => {
        if (tags.includes(tagName)) return;

        setTags(prev => [...prev, tagName]);
    };

    return (
        <div className="JobCard">
            <div className="logo">
                <img src={logo.substring(1)} alt="company-logo" />
            </div>
            <div className="job-info">
                <div className="top">
                    <p>{company}</p>
                    {new_ && <span className="new">New!</span>}
                    {featured && <span className="featured">Featured</span>}
                </div>
                <div className="mid">
                    <p>{position}</p>
                    <div className="hoverBorder"></div>
                </div>
                <div className="bottom">
                    <span>{postedAt}</span>
                    <div className="dot"></div>
                    <span>{contract}</span>
                    <div className="dot"></div>
                    <span>{location}</span>
                </div>
            </div>
            <div className="job-tags">
                {job_tags.map((tag, i) => (
                    <span key={i} onClick={e => handleTagAdd(e, tag)}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
