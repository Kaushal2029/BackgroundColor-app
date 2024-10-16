import React from "react";

const Square = ({ colorValue, hexValue }) => {
  return (
    <section className="square" style={{ background: colorValue }}>
      <p
        style={colorValue === "black" ? { color: "white" } : { color: "black" }}
      >
        {colorValue ? colorValue : "Empty Value"}
      </p>
      <p
        style={colorValue === "black" ? { color: "white" } : { color: "black" }}
      >
        {hexValue ? hexValue : null}
      </p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
