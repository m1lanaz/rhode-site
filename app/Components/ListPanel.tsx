import React from "react";

interface ListPanelProps {
  heading: string;
  items: string[];
  linkText: string;
  linkUrl: string;
  hasBottomBorder: boolean; // New prop to control the bottom border
}

export default function ListPanel({ heading, items, linkText, linkUrl, hasBottomBorder }: ListPanelProps) {
  return (
    <div className={`${hasBottomBorder ? "border-b-2" : ""} border-black pb-6`}>
      <div className="pl-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl pb-8 pt-6">{heading}</h2>
        <ul className="text-lg ">
          {items.map((item, index) => (
            <li className="pb-1" key={index}>{item}</li>
          ))}
        </ul>
        <a href={linkUrl} className="underline mt-4 inline-block pt-6">{linkText}</a>
      </div>
    </div>
  );
}
