import axios from 'axios';
export async function getCommits(owner: string, repo: string) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/${owner}/${repo}`,
    );
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
}
