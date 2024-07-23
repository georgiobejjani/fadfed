import React from "react";
import "./CustomButton.css";

export default function CustomButton({
  label,
  onClick,
  btnWidth,
  btnHeight,
  labelColor,
  backgroundColor,
  borderRadius,
  hoverBackgroundColor,
  hoverLabelColor,
  borderWidth,
  borderColor,
  hoverBorderWidth,
  hoverBorderColor,
  fontWeight,
}) {
    
  const buttonStyle = {
    width: btnWidth,
    height: btnHeight,
    lineHeight: btnHeight,
    color: labelColor,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    border: `${borderWidth} solid ${borderColor}`,
    fontWeight: fontWeight,
  };

  const hoverStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverLabelColor,
    borderWidth: hoverBorderWidth,
    borderColor: hoverBorderColor,
  };

  return (
    <button
      onClick={onClick}
      className="button"
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverStyle.backgroundColor;
        e.target.style.color = hoverStyle.color;
        e.target.style.borderWidth = hoverStyle.borderWidth;
        e.target.style.borderColor = hoverStyle.borderColor;
        e.target.style.fontWeight = hoverStyle.fontWeight;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.color = labelColor;
        e.target.style.borderWidth = borderWidth;
        e.target.style.borderColor = borderColor;
      }}
    >
      {label}
    </button>
  );
}
