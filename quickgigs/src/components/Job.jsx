import React, { useEffect, useState } from 'react' 

const Job = (props)=> {
    const{
        id,
        company_name,
        job_title,
        zip_code,
        description,
        wage,
        start_date,
        end_date,
    } = props.data;

    let keywords = [zip_code, wage,...description,...start_date]



    return (
        <div
        className={
          job_title ? "job-container job-container--borderLeft" : "job-container"
        }
      >
        <div className="part1">
          <div className="company">
            <span className="cname">{company_name}</span>
            {props.data.new && <span className="new">new!</span>}
            {props.data.job_title && <span className="job_title">job_title</span>}
          </div>
  
          {/* <div className="position">{position}</div> */}
  
          <div className="details">
            <span>{id}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{job_title}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{job_title}</span>
            <span>&nbsp;•&nbsp;</span><br />
            <span>{start_date}-{end_date}</span>
          </div>
        </div>
  
        <div className="part2">
          {keywords.map((key, id) => (
            <span onClick={() => props.setkeywords(key)} key={id}>
              {key}
            </span>
          ))}
        </div>
      </div>
    );
};
export default Job;