import React from "react";
import Image from "next/image";
import PlusIcon from "../public/plus-icon.svg";
export default function AddStory() {
  return (
    <div className="flex justify-center items-center border-2 border-black rounded-full w-12 h-12 mx-2">
      <Image src={PlusIcon} alt="plus sign" />
    </div>
  );
}
