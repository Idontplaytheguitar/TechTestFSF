import axios from 'axios';
export async function getCommits(owner: string, repo: string) {
  try {
    const response = await axios.get(
      `http://localhost:3001/${owner}/${repo}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
