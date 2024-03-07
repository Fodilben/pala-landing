"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const NavContact = () => {
  const handleCopy = () => {
    toast.success("text copied");
  };
  return (
    <CopyToClipboard text={"0795415521"} onCopy={handleCopy}>
      <div className="flex justify-between gap-4 items-center cursor-pointer">
        <FaPhoneAlt />
        <p>0795415521 </p>
      </div>
    </CopyToClipboard>
  );
};
export default NavContact;
