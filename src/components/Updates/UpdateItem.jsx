const UpdateItem = ({ src, title }) => {
  return (
    <div className="col-lg-4">
      <div className="border border-black rounded-4 p-0">
        <img src={src} alt={title} className="w-100 rounded-top-4" />
        <h5>{title}</h5>
      </div>
    </div>
  );
};
export default UpdateItem;
