import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const JobItem = (props) => {
  return (
    <div className="col-lg-6">
      <div className="border border-2 rounded-2">
        <div className="d-flex align-items-center">
          <div className="p-0 bg-primary px-4 py-3 rounded-top-2 me-2 fs-3 fw-bold">
            {props.company.charAt(0)}
          </div>
          <div>
            <div className="fs-4 fw-bold">{props.position}</div>
            <div className="fs-6 fw-semibold">{props.company}</div>
          </div>
        </div>
        <hr className="m-0 mt-0 my-1" />
        <div className="px-4 py-3">
          <span className="fs-5 d-flex align-items-center my-2">
            <span className="fw-bold">Salary: </span>
            <CurrencyRupeeIcon />
            {props.salary}
          </span>
          <span className="fs-5 d-flex align-items-center">
            <span className="fw-bold">Location: </span>
            <LocationOnIcon />
            {props.location}
          </span>
        </div>
      </div>
    </div>
  );
};
export default JobItem;
