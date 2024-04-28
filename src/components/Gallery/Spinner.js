import React from "react";
import { PropagateLoader } from "react-spinners";

import "./galleryStyles.css"

const Spinner = () => {
  return (
    <div className="spinner-container">
      <PropagateLoader color={"#123abc"} loading={true} />
    </div>
  );
};

export default Spinner;
