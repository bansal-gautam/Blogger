import UpdateItem from "./UpdateItem";
import { useState } from "react";

const data = [
  {
    image:
      "https://www.cinemapettai.com/wp-content/uploads/2023/06/Aadipurush.jpg",
    title: "Aadipurush Day 1 Box Office Updates",
  },
  {
    image:
      "https://www.cinemapettai.com/wp-content/uploads/2023/06/Aadipurush.jpg",
    title: "Aadipurush Day 1 Box Office Updates",
  },
  {
    image:
      "https://www.cinemapettai.com/wp-content/uploads/2023/06/Aadipurush.jpg",
    title: "Aadipurush Day 1 Box Office Updates",
  },
  {
    image:
      "https://www.cinemapettai.com/wp-content/uploads/2023/06/Aadipurush.jpg",
    title: "Aadipurush Day 1 Box Office Updates",
  },
  {
    image:
      "https://www.cinemapettai.com/wp-content/uploads/2023/06/Aadipurush.jpg",
    title: "Aadipurush Day 1 Box Office Updates",
  },
];

const Updates = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const clickHandler = () => {
    setItemsToShow(itemsToShow + 3);
  };
  const collapseHandler = () => {
    setItemsToShow(3);
  };
  return (
    <div className="container-lg my-5">
      <h2 className="text-center">Latest Updates</h2>
      <p className="text-center">
        Showing {itemsToShow < data.length ? itemsToShow : data.length} of{" "}
        {data.length} Updates
      </p>
      <div className="container text-center">
        <div className="row g-3">
          {data.slice(0, itemsToShow).map((item, index) => (
            <UpdateItem key={index} src={item.image} title={item.title} />
          ))}
        </div>
      </div>
      <div className="buttons-container text-center mt-3">
        <button onClick={clickHandler} className="mx-2 rounded btn btn-primary">
          Load More
        </button>
        <button
          onClick={collapseHandler}
          className="mx-2 rounded btn btn-primary"
        >
          Collapse
        </button>
      </div>
    </div>
  );
};
export default Updates;
