import React from "react";
import SearcBar from "../components/SearcBar";
import InfoSection from "../components/InfoSection";
import Recent from "../components/Recent";
import { InfoData } from "../data/InfoData";

const Home = () => {
  return (
    <>
      <SearcBar />
      <InfoSection {...InfoData} />
      <Recent />
    </>
  );
};

export default Home;
