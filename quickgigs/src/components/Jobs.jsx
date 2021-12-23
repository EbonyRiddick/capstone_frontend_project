import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
  console.log(data);
  const [filteredData, setfilteredData] = useState([]);


  const modifiedData = () => {
    if (keywords) {
    const newData = data.filter((d) => {
      return keywords.every((key) => {
        return (
          d.zip_code === key ||
          d.wage === key ||
          d.description.includes(key) ||
          d.start_date.includes(key)
        );
      });
    });
    setfilteredData(newData);
  } else {
    setfilteredData(data);
  }
};

useEffect(() => {
  modifiedData();
}, [keywords]);

return (
  <div className="jobs">
    {filteredData.map((d) => {
      return <Job key={d.id} data={d} setkeywords={setKeywords} />;
    })}
  </div>
);
};




export default Jobs;