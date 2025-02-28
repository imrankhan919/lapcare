import axios from "axios";

const fetchComments = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`/api/complaint/${id}/comment`, options);
  return response.data;
};
const addComment = async (formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `/api/complaint/${formData.id}/comment`,
    formData,
    options
  );
  return response.data;
};

const commentService = {
  fetchComments,
  addComment,
};

export default commentService;
