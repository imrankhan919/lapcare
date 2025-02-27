import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import ComplaintCard from "../components/ComplaintCard";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import { getComplaints } from "../features/complaint/complaintSlice";
import Loader from "../components/Loader";

const AllComplaints = () => {
  const { complaints, isLoading, isError, message } = useSelector(
    (state) => state.complaint
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComplaints());

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-10">
      <BackButton url={"/"} />
      <h1 className="text-center font-bold text-xl my-4">All Complaints</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {complaints.map((complaint) => (
          <ComplaintCard key={complaint._id} complaint={complaint} />
        ))}
      </div>
    </div>
  );
};

export default AllComplaints;
