import React from "react";
import Box from "./Box";

const MainImage = () => {
  return (
    <div className="container flex justify-center mx-auto">
      <div className="mx-auto shadow-xl bg-my-image bg-no-repeat max-h-80 object-cover rounded-lg mt-5">
      <div className="w-64 h-96"></div>
      </div>
    </div>
  );
};

export default MainImage;
