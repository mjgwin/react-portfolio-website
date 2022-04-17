import React from "react";
import Box from "../components/ui/Box";
import MainImage from "../components/ui/MainImage";
const MainPage = () => {
  return (
    <div>
      <div className="flex justify-center text-3xl font-bold pt-8">Welcome To The Site!</div>
      <MainImage />
      <div className="flex justify-center">
        <Box title="Education:" text="I am a junior studying software engineering at Iowa State University. My expected graduation is Spring 2023." />
        <Box title="Employment:" text="Currently my employer is John Deere Global IT, where I am a part-time student on the Cloud Security team." />
        <Box title="About This Project:" text="I always have wanted a portfolio website to display my projects and skills. This is the first iteration made with React and TailWindCSS." />
      </div>
    </div>
  );
};

export default MainPage;
