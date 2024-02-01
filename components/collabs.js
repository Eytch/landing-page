import React from "react";
import Image from "next/image";

function Collabs() {
  return (
    <div className="flex flex-col gap-10 justify-center mt-10 mb-10">
      <h2 className="text-3xl lg:text-4xl text-center font-bold">
        More than 25,000 teams use Collabs
      </h2>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Image src="/Unsplash.svg" width={140} height={100} alt="Unsplash" />
        <Image src="/Notion.svg" width={140} height={100} alt="Notion" />
        <Image src="/Intercom.svg" width={140} height={100} alt="Intercom" />
        <Image src="/descript.svg" width={140} height={100} alt="Descript" />
        <Image src="/grammarly.svg" width={140} height={100} alt="grammarly" />
      </div>
    </div>
  );
}

export default Collabs;
