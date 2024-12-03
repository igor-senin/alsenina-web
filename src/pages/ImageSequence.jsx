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
    fps = 10,
    canvasWidth = 300,
    canvasHeight = 300,
    setPos
  }
) => {
  const canvasRef = useRef(null);
  const [imgsPaths, setImgsPaths] = useState(null);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState([0, 0]);

  const loadImages = (list) => {
    if (!Array.isArray(list)) {
      throw new Error('Parameter list is not an array');
    }
    if (list.length === 0) {
      return;
    }
    const all = new Map();
    list.forEach((v, idx) => {
      const img = new Image();
      img.onload = function() {
        all.set(idx, img);
        if (all.size === list.length) {
          setImgsPaths(all);
        }
      };
      img.src = v;
    });
  };

  useEffect(() => {
    if (!imgsPaths || imgsPaths.size === 0 || !imgsPaths.get(index)) {
      return;
    }
    const velocity = velocities && velocities.length >= index
      ? velocities[index]
      : [0.0, 0.0];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgsPaths.get(index), 0, 0, canvas.width, canvas.height);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgsPaths.size);
      setPosition((prevPos) => {
        const newPos = [
          prevPos[0] + velocity[0],
          prevPos[1] + velocity[1]
        ];
        setPos(newPos[0], newPos[1]);
        return (newPos);
      });
    }, 1000 / fps);

    return () => {
      clearInterval(intervalId);
    };
  }, [index, position, imgsPaths, fps]);

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
