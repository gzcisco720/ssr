import axios from 'axios';

const baseUrl = process.env.API_URL || '';

const parseUrl = (url: string, params: { [key: string]: any }) => {
  const paramsCopy = params || {};
  const str = Object.keys(paramsCopy).reduce((result, key) => {
    result += `${key}=${paramsCopy[key]}&`;
    return result;
  }, '');
  return `${baseUrl}/api${url}?${str.substr(0, str.length - 1)}`;
};

export const get = async (url: string, params: { [key: string]: any }) => {
  try {
    const response: any = await axios.get(parseUrl(url, params));
    const { data } = response;
    if (data && data.success) {
      return data;
    }
    throw new Error(data);
  } catch (error) {
    throw new Error(error);
  }
};

export const post = async (url: string,
  params: { [key: string]: any },
  payload: { [key: string]: any },
) => {
  try {
    const response: any = await axios.post(parseUrl(url, params), payload);
    const { data } = response;
    if (data && data.success) {
      return data;
    }
    throw new Error(data);
  } catch (error) {
    throw new Error(error);
  }
};
