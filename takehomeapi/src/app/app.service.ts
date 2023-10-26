import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
// Didn't use a token because it is not needed for public repos
const octokit = new Octokit();

@Injectable()
export class AppService {
  async getRepo() {
    try {
      const response = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: 'Idontplaytheguitar',
          repo: 'TechTestFSF',
        },
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
