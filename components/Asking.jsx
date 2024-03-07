"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/utils/data";

import Question from "./Question";
import Title from "./Title";

export function AccordionDemo() {
  return (
    <div>
      <Title text1="اسئلة " text2="شائعة" />
      <Accordion type="single" collapsible className="w-full">
        {questions.map((item, ind) => {
          return (
            <Question
              que={item.que}
              res={item.res}
              key={ind}
              value={`item${ind + 1}`}
            />
          );
        })}
      </Accordion>
    </div>
  );
}
