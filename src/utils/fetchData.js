import axios from "axios";

// bring in the endpoint
// const ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

const ENDPOINT = "http://localhost:8000/api/v1";

// THE POST DATA API
export const postDataApi = async (url, data) => {
  const res = await axios.post(ENDPOINT + url, data);
  return res;
};

export const postDataApis = async (url, data, token) => {
  const res = await axios.post(ENDPOINT + url, data, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

// THE GET DATA API
export const getDataApi = async (url, token) => {
  const res = await axios.get(ENDPOINT + url, {
    headers: { Authorization: token },
  });
  return res;
};

export const getDataApis = async (url) => {
  const res = await axios.get(ENDPOINT + url);
  return res;
};

// THE PATCH DATA API
export const patchDataApi = async (url, token) => {
  const res = await axios.patch(ENDPOINT + url, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchApi = async (url, token) => {
  const res = await axios.patch(ENDPOINT + url, {
    headers: { Authorization: token },
  });
  return res;
};

// THE DELETE DATA API
export const deleteDataApi = async (url, token) => {
  const res = await axios.delete(ENDPOINT + url, {
    headers: { Authorization: token },
  });
  return res;
};

// Our platform is designed to make the apartment rental process as easy and stress-free as possible. Renters can easily search for apartments based on location, price range, and other preferences.

// For property agents, our platform offers an easy-to-use listing management system that allows them to quickly and efficiently upload their properties and manage their listings. Our platform also provides valuable data and insights on the performance of their listings
