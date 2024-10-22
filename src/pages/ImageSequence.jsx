import React from 'react';
import { 
  useState,
  useRef,
  forwardRef,
  useEffect,
} from 'react';

const ImageSequence = (
  {
    data=[],
    velocities=[],
    fps = 60,
    canvasWidth = 300,
    canvasHeight = 300,
    setPos
  }
) => {
  const canvasRef = useRef(null);
  const [imgPaths, setImgPaths] = useState([]);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState([0, 0]);

  const loadImages = (list) => {
    if (!Array.isArray(list)) {
      throw new Error('Parameter list is not an array');
    }
    if (list.length === 0) {
      return;
    }
    const all = [];
    list.forEach((v) => {
      const img = new Image();
      img.onload = function() {
        all.push(img);
        if (all.length === list.length) {
          setImgPaths(all);
        }
      };
      img.src = v;
    });
  };

  useEffect(() => {
    if (imgPaths.length === 0 || !imgPaths[index]) {
      return;
    }
    const velocity = velocities && velocities.length >= index
      ? velocities[index]
      : [0.0, 0.0];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgPaths[index], 0, 0, canvas.width, canvas.height);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
      setPosition((prevPos) => [
        prevPos[0] + velocity[0],
        prevPos[1] + velocity[1]
      ]);

      setPos(position[0], position[1]);
    }, 1000 / fps);

    return () => {
      clearInterval(intervalId);
    };
  }, [index, position, imgPaths]);

  useEffect(() => {
    loadImages(data);
  }, [data]);

  return (
  <canvas
      ref={canvasRef}
      id="canvas-image-sequence"
      width={canvasWidth}
      height={canvasHeight}
  />
  );
};

export default forwardRef(ImageSequence);
