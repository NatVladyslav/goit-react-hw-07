import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6727c28a270bd0b975537dbb.mockapi.io/',
});

export const getContacts = async () => {
  const data = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const data = await instance.delete(`/contacts/${id}`);
  return data;
};

export const createContact = async contact => {
  const data = await instance.post(`/contacts`, contact);
  return data;
};
