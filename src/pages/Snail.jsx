import React from 'react';
import { useState } from 'react';

import ImageSequence from './ImageSequence';


const imgs = [];
const vels = [];

for (let i = 1; i <= 26; ++i) {
  imgs.push(require(`../../resources/Animation_snail/Snail-${i}.png`));
  vels.push([i <= 15 ? 0.0 : 6.7, 0.0]);
}

const Snail = () => {
  const width = 200;
  const height = 100;

  const [style, setStyle] = useState({
    position: "absolute",
    left: 0,
    top: 0,
    width: width,
    height: height
  });

  const updatePos = (newX, newY) => {
    setStyle({
      position: "absolute",
      left: newX,
      top: newY,
      width: width,
      height: height
    });

    console.log("updatePos");
  };

  return (
  <div style={style}>
    <ImageSequence
        data={imgs}
        velocities={vels}
        fps={8}
        canvasWidth={width}
        canvasHeight={height}
        setPos={updatePos}
    />
  </div>
  );
};

export default Snail;
