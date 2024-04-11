import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Masters Student at Illinois Tech.",
          "Software Developer.",
          "AI/ML Enthusiast.",
          "Android Developer.",
          "MERN Stack Developer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
