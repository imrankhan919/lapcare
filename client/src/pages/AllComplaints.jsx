import React from "react";

import ComplaintCard from "../components/ComplaintCard";
import BackButton from "../components/BackButton";

const AllComplaints = () => {
  return (
    <div className="min-h-screen p-10">
      <BackButton url={"/"} />
      <h1 className="text-center font-bold text-xl my-4">All Complaints</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ComplaintCard />
        <ComplaintCard />
        <ComplaintCard />
      </div>
    </div>
  );
};

export default AllComplaints;
