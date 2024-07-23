import React from "react";
import "./TextBlock.css";
import CustomButton from "../CustomButton/CustomButton";

export default function TextBlock({ introTitle, title, content }) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="textBlock">
      <h4 className="textBlock__introTitle">{introTitle}</h4>
      <h1 className="textBlock__title">{title}</h1>
      <p className="textBlock__content">{content}</p>
    </div>
  );
}
