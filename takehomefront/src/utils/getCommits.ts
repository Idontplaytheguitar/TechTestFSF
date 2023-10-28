import axios from 'axios'
export async function getCommits() {
  try {
    const response = await axios.get('http://localhost:3001/');
    return response.data;
  } catch (error) {
    return error;
  }
}
