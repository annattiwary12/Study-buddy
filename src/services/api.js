const API_URL = 'https://your-backend-api.com';

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/data`);
  const data = await response.json();
  return data;
};
