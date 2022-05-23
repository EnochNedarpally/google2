import { GlobeIcon } from "@heroicons/react/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 grid w-full divide-y-[1px] divide-gray-300 text-gray-500 text-sm">
      <div>
        <p className="px-8 py-3">India</p>
      </div>
      <div className="p-2  space-y-2 grid  place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  grid-flow-row-dense">
        <div className="flex space-x-2 items-center  md:col-span-2 lg:col-span-1 justify-center lg:col-start-2">
          <GlobeIcon className="h-5 2-5 text-green-700" />
          <p>Carbon Neutral Since 2007 </p>
        </div>
        <div className="flex space-x-4 lg:my-0 whitespace-nowrap md:justify-center">
          <p>Advertising</p>
          <p>Business</p>
          <p>New Search Works</p>
        </div>
        <div className="flex space-x-4 mt-0 lg:ml-auto  whitespace-nowrap">
          <p>Privacy</p>
          <p>Term</p>
          <p>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
