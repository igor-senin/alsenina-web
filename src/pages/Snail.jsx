import React from 'react';
import { useState } from 'react';

import ImageSequence from './ImageSequence';


const imgs = [];
const vels = [];

for (let i = 1; i <= 26; ++i) {
  imgs.push(require(`./Animation_snail/Snail-${i}.png`));
  vels.push([i <= 15 ? 0.0 : 6.7, 0.0]);
}

const Snail = () => {
  const [style, setStyle] = useState({
    position: "absolute",
    left: 0,
    top: 0,
    width: 500
  });

  const updatePos = (newX, newY) => {
    setStyle({
      position: "absolute",
      left: newX,
      top: newY,
      width: 500
    });

    console.log("updatePos");
  };

  return (
  <div style={style}>
    <ImageSequence
        data={imgs}
        velocities={vels}
        fps={8}
        canvasWidth={300}
        canvasHeight={300}
        setPos={updatePos}
    />
  </div>
  );
};

export default Snail;
