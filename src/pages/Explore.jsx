import { React, useState } from "react";
import '../App.css';
import ExploreCard from "../components/ExploreCard";

function Explore() {
  function getTodayDate() {
    let date = new Date();
    let month = date.toLocaleString("default", { month: "long" });
    let year = date.getFullYear();
    let day = date.getDate();
    return `${month} ${day}, ${year}`;
  }
  const [date, setdate] = useState(getTodayDate());
  return (
    <>
      <div className="m-5">
        <div className="my-1">
          <h1 className="text-center text-2xl font-bold  p-2 ">{date}</h1>
        </div>
        <div className="my-1">
          <h1 className="text-center text-5xl font-bold p-2">Stay Inspired</h1>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
        </div>
      </div>
    </>
  );
}

export default Explore;
