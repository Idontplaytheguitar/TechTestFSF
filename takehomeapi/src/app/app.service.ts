import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { commitParser } from 'src/parsers/commitParser';
// Didn't use a token because it is not needed for public repos
const octokit = new Octokit();

@Injectable()
export class AppService {
  async getRepo(owner: string, repo: string) {
    try {
      const response = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: owner,
          repo: repo,
        },
      );

      return commitParser(response);
    } catch (error) {
      return {
        status: error?.status || 500,
        message:
          error?.response?.data?.message ||
          'Something went wrong, try again later',
      };
    }
  }
}
