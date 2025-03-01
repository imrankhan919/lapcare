import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.isAdmin) {
      navigate("/admin");
    }
  }, [user]);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-xl font-bold text-center">Welcome User</h1>
      <div className="p-5 border flex flex-col my-5">
        <Link
          to={"/raise-complaint"}
          className="text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black border duration-150"
        >
          Raise Complaint
        </Link>
        <Link
          to={"/complaints"}
          className="text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black border duration-150"
        >
          My Complaints
        </Link>
      </div>
    </div>
  );
};

export default Home;
