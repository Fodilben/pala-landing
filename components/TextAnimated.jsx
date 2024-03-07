"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      ></TextRevealCard>
    </div>
  );
}
