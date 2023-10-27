import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../@/components/ui/accordion"
import { commit } from "../interfaces/commit"
  
  export function AccordionCommits(props:{
    commits: commit[] 
  }) {

    const { commits } = props
    return (
      <Accordion type="single" collapsible className="w-full lg:w-1/2">
        {
            commits?.length ? commits.map((commit,index) =>{
                return (
                    <AccordionItem key={index} value={commit.sha}>
                    <AccordionTrigger>{commit.sha}</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                )
            }) :
            <div>
                There was no commits found, try again!
            </div>
        }

      </Accordion>
    )
  }
  