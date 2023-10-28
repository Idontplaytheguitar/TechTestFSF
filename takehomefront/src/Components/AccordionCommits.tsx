import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../@/components/ui/accordion';
import { commit } from '../interfaces/commit';

export function AccordionCommits(props: {
  commits: commit[] | string;
}) {
  const { commits } = props;
  return (
    <Accordion type="single" collapsible className="w-full lg:w-1/2 flex flex-col-reverse">
      {typeof commits !== 'string' && commits?.length ? (
        commits?.map((commit, index) => {
          const messageSplit = commit.commitMessage.split('-');
          return (
            <AccordionItem key={index} value={commit.sha}>
              <AccordionTrigger>{commit.sha}</AccordionTrigger>
              <AccordionContent>
                {messageSplit.length > 1
                  ? messageSplit.map((e) => <div>{e}</div>)
                  : commit.commitMessage}
              </AccordionContent>
            </AccordionItem>
          );
        })
      ) : (
        <AccordionItem value="noCommit">
          <AccordionTrigger>No commits found</AccordionTrigger>
          <AccordionContent>
            There was an error, try again!
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
}
