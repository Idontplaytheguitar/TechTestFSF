import { commit } from 'src/interfaces/commit';

export function commitParser(response): commit[] {
  const commitsParsed: commit[] = [];
  const data = response.data;
  data.forEach((c) => {
    commitsParsed.push({
      sha: c.sha,
      author: c.committer.login,
      authorAvatar: c.committer.avatar_url,
      authorLink: c.committer.html_url,
      commitLink: c.html_url,
      commitMessage: c.commit.message,
    });
  });
  return commitsParsed;
}
