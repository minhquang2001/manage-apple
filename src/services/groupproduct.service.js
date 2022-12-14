// import axios from "axios";
import httpRequest from "../utils/httpRequest";
// const API_URL =process.env.REACT_APP_API_URL;

const create = (
  category,
  name,
  price,
  image,
  option,
  description,
  services,
  specific,
) => {

  return httpRequest.post("/api/v1/auth/admin/groupproduct", {
    'categoryId': category,
    name,
    price,
    image,
    option,
    description,
    services,
    specific,
  });
};

const getAll = async () => {
  const response = await httpRequest.get("/api/v1/groupproducts");
  return response.data;
};
const getOne = async (id) => {
  const response = await httpRequest.get(`/api/v1/groupproduct/${id}`);
  return response.data;
};


const GroupProduct = {
  create,
  getAll,
  getOne,

}

export default GroupProduct;
