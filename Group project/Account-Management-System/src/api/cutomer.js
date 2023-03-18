import axios from "axios";

export const getCustomer = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/customers/${id}`);
  return data;
};

export const deposit = async (id, updatedData) => {
  const { data } = await axios.put(`http://localhost:3000/customers/${id}`, {
    ...updatedData,
  });

  return data;
};
export const withdraw = async (id, updatedData) => {
  const { data } = await axios.put(`http://localhost:3000/customers/${id}`, {
    ...updatedData,
  });

  return data;
};

export const insertCustomer = async (newCustomer) => {
  const { data } = await axios.post(`http://localhost:3000/customers`, {
    ...newCustomer,
  });

  return data;
};

export const login = async (accountNumber, password) => {
  const { data } = await axios.get(
    `http://localhost:3000/customers?accountNumber=${accountNumber}&password=${password}`
  );

  return data;
};
