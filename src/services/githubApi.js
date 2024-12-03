import axios from 'axios';

const API_URL = 'https://api.github.com';

export const getUserData = async (username) => {
  const response = await axios.get(`${API_URL}/users/${username}`, {
    headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
  });
  return response.data;
};

export const getUserRepos = async (username) => {
  const response = await axios.get(`${API_URL}/users/${username}/repos?per_page=100`, {
    headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
  });
  return response.data;
};
