import JobItem from "./JobItem";
import { useState } from "react";

const data = [
  {
    company: "Google",
    position: "Front End Developer",
    salary: "36LPA",
    location: "Mumbai",
  },
  {
    company: "Google",
    position: "Front End Developer",
    salary: "36LPA",
    location: "Mumbai",
  },
  {
    company: "Google",
    position: "Front End Developer",
    salary: "36LPA",
    location: "Mumbai",
  },
  {
    company: "Google",
    position: "Front End Developer",
    salary: "36LPA",
    location: "Mumbai",
  },
];

const Jobs = () => {
  const [itemsToShow, setItemsToShow] = useState(2);
  const clickHandler = () => {
    setItemsToShow((item) => item + 2);
  };

  return (
    <div className="container-lg">
      <h2 className="text-center">Jobs</h2>
      <p className="text-center fw-medium">({data.length} Jobs Found)</p>
      <div className="container">
        <div className="row g-3">
          {data.slice(0, itemsToShow).map((item, index) => (
            <JobItem
              key={index}
              company={item.company}
              position={item.position}
              salary={item.salary}
              location={item.location}
            />
          ))}
        </div>
        <div className="buttons-container text-center mt-3">
          <button
            onClick={clickHandler}
            className="mx-2 rounded btn btn-primary"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
