import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../@/components/ui/accordion';
import { commit } from '../interfaces/commit';

export function AccordionCommits(props: { commits: commit[] }) {
  const { commits } = props;
  return (
    <Accordion type="single" collapsible className="w-full lg:w-1/2">
      {commits?.length ? (
        commits.map((commit, index) => {
          console.log(commit)
          return (
            <AccordionItem key={index} value={commit.sha}>
              <AccordionTrigger>{commit.sha}</AccordionTrigger>
              <AccordionContent>
                {commit.commitMessage}
              </AccordionContent>
            </AccordionItem>
          );
        })
      ) : (
        <AccordionItem value='noCommit'>
          <AccordionTrigger>No commits found</AccordionTrigger>
          <AccordionContent>There was an error, try again!</AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
}
