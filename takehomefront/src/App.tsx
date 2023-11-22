import { useEffect, useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../@/components/ui/tabs';
import { AccordionCommits } from './Components/AccordionCommits';
import { getCommits } from './utils/getCommits';
import { commit } from './interfaces/commit';
import { Technologies } from './Components/Technologies';
import RepoSearch from './Components/RepoSearch';
import userAndRepo from './interfaces/userAndRepo';

export default function App() {
  const [commits, setCommits] = useState<commit[] | string>();
  const [formData, setFormData] = useState<userAndRepo>({
    user: 'Idontplaytheguitar',
    repo: 'TechTestFSF',
  });

  const userAndRepoChange = (obj: userAndRepo) =>
    setFormData({
      repo: obj.repo,
      user: obj.user,
    });

  useEffect(() => {
    getCommits(formData.user, formData.repo)
      .then((r) => {
        setCommits(r);
      })
      .catch((e) => {
        setCommits(e);
      });
  }, [formData]);

  return (
    <div className="bg-slate-950 p-10 min-h-screen">
      <Tabs
        className="w-full flex flex-col justify-center"
        defaultValue="commits"
      >
        <TabsList className="gap-3">
          <TabsTrigger value="commits">Commits</TabsTrigger>
          <TabsTrigger value="techs">Technologies</TabsTrigger>
        </TabsList>
        <TabsContent
          className="m-5 flex flex-col items-center justify-center"
          value="commits"
        >
          <RepoSearch userAndRepoChange={userAndRepoChange} />
          <AccordionCommits commits={commits as commit[] | string} />
        </TabsContent>
        <TabsContent
          className="flex justify-center items-center"
          value="techs"
        >
          <Technologies />
        </TabsContent>
      </Tabs>
    </div>
  );
}
