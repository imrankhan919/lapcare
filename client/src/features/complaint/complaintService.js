import axios from "axios";

const fetchComplaints = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/complaint", options);
  return response.data;
};

const fetchComplaint = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/complaint/" + id, options);
  return response.data;
};

const addComplaint = async (formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("/api/complaint/", formData, options);
  return response.data;
};

const complaintService = {
  fetchComplaints,
  fetchComplaint,
  addComplaint,
};

export default complaintService;
