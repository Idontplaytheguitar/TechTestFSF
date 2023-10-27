import axios from 'axios';
export async function getCommits() {
  const response = await axios.get('http://localhost:3001/repos');
  return response;
}
