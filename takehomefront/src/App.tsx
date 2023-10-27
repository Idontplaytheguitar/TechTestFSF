import { useEffect, useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../@/components/ui/tabs';
import { AccordionCommits } from './Components/AccordionCommits';
import { getCommits } from './utils';
import { commit } from './interfaces/commit';

export default function App() {
  const [commits, setCommits] = useState<commit[]>()

  useEffect(() => {
    setCommits(getCommits())
  },[])

  return (
    <div className="bg-slate-950 p-10 h-screen">
      <Tabs className='w-full flex flex-col justify-center' defaultValue="commits">
        <TabsList className="gap-3">
          <TabsTrigger value="commits">Commits</TabsTrigger>
          <TabsTrigger value="techs">Technologies</TabsTrigger>
        </TabsList>
        <TabsContent className='m-5 flex justify-center ' value="commits">
          <AccordionCommits commits={commits} />
        </TabsContent>
        <TabsContent value="techs"></TabsContent>
      </Tabs>
    </div>
  );
}
