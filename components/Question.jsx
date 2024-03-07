"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Question = ({ que, res, value }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{que}</AccordionTrigger>
      <AccordionContent>{res}</AccordionContent>
    </AccordionItem>
  );
};
export default Question;
