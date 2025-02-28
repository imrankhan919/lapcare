import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { raiseComplaint } from "../features/complaint/complaintSlice";

const RaiseComplaint = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    laptop: "",
    description: "",
    image: "",
  });

  const { laptop, description, image } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(raiseComplaint(formData));
    navigate("/complaints");
  };

  return (
    <div className="min-h-screen p-10">
      <BackButton url={"/"} />
      <h1 className="text-center font-bold text-xl">Raise New Complaint</h1>

      <div className="p-5 border my-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user.name}
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            disabled
          />
          <input
            type="email"
            value={user.email}
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            disabled
          />

          <select
            onChange={handleChange}
            name="laptop"
            value={laptop}
            className="p-2 border border-gray-400 w-full my-2"
          >
            <option value="#">Please Select You Laptop Brand</option>
            <option value="apple">Apple</option>
            <option value="lenevo">Lenevo</option>
            <option value="hp">HP</option>
            <option value="dell">Dell</option>
            <option value="acer">Acer</option>
            <option value="samsung">Samsung</option>
          </select>
          <textarea
            onChange={handleChange}
            name="description"
            value={description}
            className="p-2 border border-gray-400 w-full"
            placeholder="describe your issue here"
          ></textarea>
          <input
            onChange={handleChange}
            name="image"
            value={image}
            type="text"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            placeholder="Image Url"
          />
          <button className="bg-black w-full my-2 text-white py-2 px-4 font-bold hover:bg-green-700 hover:cursor-pointer duration-150 ">
            Raise Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default RaiseComplaint;
