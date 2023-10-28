import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../@/components/ui/accordion';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '../../@/components/ui/avatar';
import { commit } from '../interfaces/commit';

export function AccordionCommits(props: {
  commits: commit[] | string;
}) {
  const { commits } = props;
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:w-1/2 flex flex-col-reverse text-xs md:text-sm lg:text-base"
    >
      {typeof commits !== 'string' && commits?.length ? (
        commits?.map((commit, index) => {
          const messageSplit = commit.commitMessage.split('-');
          return (
            <AccordionItem key={index} value={commit.sha}>
              <AccordionTrigger className=" ">
                <div className="flex flex-row w-full gap-2 items-center">
                  <a href={commit.authorLink} target="_blank">
                    <Avatar className="hover:scale-110">
                      <AvatarImage src={commit.authorAvatar} />
                      <AvatarFallback className="text-xs">
                        avatar not found
                      </AvatarFallback>
                    </Avatar>
                  </a>
                  <a
                    href={commit.authorLink}
                    target="_blank"
                    className="hover:underline"
                  >
                    {commit.author}
                  </a>
                </div>
                <a
                  href={commit.commitLink}
                  target="_blank"
                  className="text-xs lg:text-sm hover:underline"
                >
                  {commit.sha}
                </a>
              </AccordionTrigger>
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
