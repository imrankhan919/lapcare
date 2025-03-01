import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import ComplaintCard from "../components/ComplaintCard";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import { getComplaints } from "../features/complaint/complaintSlice";
import Loader from "../components/Loader";
import { getAllComplaints } from "../features/admin/adminSlice";

const AllComplaints = () => {
  const { user } = useSelector((state) => state.auth);
  const { complaints, isLoading, isError, message } = useSelector(
    (state) => state.complaint
  );
  const { allComplaints } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComplaints());

    if (user.isAdmin) {
      dispatch(getAllComplaints());
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-10">
      <BackButton url={"/"} />
      <h1 className="text-center font-bold text-xl my-4">All Complaints</h1>
      {user.isAdmin ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allComplaints.map((complaint) => (
              <ComplaintCard key={complaint._id} complaint={complaint} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {complaints.map((complaint) => (
              <ComplaintCard key={complaint._id} complaint={complaint} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllComplaints;
