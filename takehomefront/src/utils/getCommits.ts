import axios from 'axios';
export async function getCommits(owner: string, repo: string) {
  try {
    const response = await axios.get(
      `${process.env.API}/${owner}/${repo}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
