"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { Textarea } from "@/components/ui/text-area";
import { useState } from "react";

import { sendDEmail, validateFormInputs } from "@/utils";
import Title from "./Title";
export const Contactform = () => {
  const [sending, setSending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formData = {
      from_name: name + lastname || "",
      to_name: email || "",
      message: message || "",
    };
    sendDEmail(formData, sending, setSending);
  };
  return (
    <div className=" w-full py-4 md:py-8 mx-auto rounded-none md:rounded-2xl  shadow-input bg-white dark:bg-black">
      <form
        className="p-1"
        // onSubmit={handleSubmit}
        // action="/api/form-submit"
        onSubmit={handleSubmit}
      >
        <div className="grid place-items-center mb-14">
          <Title text1="تواصل " text2="معنا" />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 mt-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">الاسم</Label>
            <Input id="firstname" placeholder="يبريسي" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">اللقب</Label>
            <Input id="lastname" placeholder="سعداوي" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">البريد الالكتروني</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message"></Label>
          <Textarea placeholder="السلام عليكم" id="message" />
        </LabelInputContainer>

        <div className="grid place-items-center">
          <button
            className="bg-gradient-to-br max-w-[100px] relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {sending ? "sending" : "ارسال"}
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
