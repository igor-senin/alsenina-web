import React from "react";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";

import { formatTime } from './Utils';
import Controls from './Controls';

import './VideoPlayer.css';


let idleDarkenCount = 0;

const VideoPlayer = ({videoSrc, width, height}) => {
  const videoPlayerRef = useRef(null);
  const controlsRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    buffer: true,
  });

  const {
    playing,
    muted,
    volume,
    playbackRate,
    played,
    seeking,
    buffer } = videoState;

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const progressHandler = (state) => {
    if (idleDarkenCount > 1) {
      idleDarkenCount = 0;
      controlsRef.current.style.visibility = "hidden";
    } else if (controlsRef.current.style.visibility === "visible") {
      idleDarkenCount += 1;
    }

    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };
  
  const seekHandler = (_, value) => {
    setVideoState({ ...videoState, played: parseFloat(value / 100) });

    videoPlayerRef.current.seekTo(parseFloat(value / 100));
  };

  const seekMouseUpHandler = (_, value) => {
    setVideoState({ ...videoState, seeking: false });

    videoPlayerRef.current.seekTo(value / 100);
  };

  const volumeChangeHandler = (_, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0,
    });
  };

  const volumeSeekUpHandler = (_, value) => {
    volumeChangeHandler(_, value);
  };

  const muteHandler = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const onSeekMouseDownHandler = (_) => {
    setVideoState({ ...videoState, seeking: true });
  };

  const mouseMoveHandler = () => {
    controlsRef.current.style.visibility = "visible";
  };

  const bufferStartHandler = () => {
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    setVideoState({ ...videoState, buffer: false });
  };

  // TODO: между ReactPlayer и Controls можно
  // добавить что-то типа
  // { buffer && <p> Loading... </p> }

  return (
    <div
      className="player-container"
    >
      <div className="player-wrapper" onMouseMove={mouseMoveHandler}>
        <ReactPlayer
          ref={videoPlayerRef}
          className={"player"}
          url={videoSrc}
          playing={playing}
          volume={volume}
          muted={muted}
          onProgress={progressHandler}
          onBuffer={bufferStartHandler}
          onBufferEnd={bufferEndHandler}

          loop={true}

          width={width ? width : "auto"}
          height={height ? height : "auto"}
        />

        <Controls 
          playing={playing}
          played={played}
          volume={volume}
          controlsRef={controlsRef}
          onPlayPause={playPauseHandler}
          onSeek={seekHandler}
          onSeekMouseUp={seekMouseUpHandler}
          onVolumeChangeHandler={volumeChangeHandler}
          onVolumeSeekUp={volumeSeekUpHandler}
          mute={muted}
          onMute={muteHandler}
          playRate={playbackRate}
          duration={formatDuration}
          currentTime={formatCurrentTime}
          onMouseSeekDown={onSeekMouseDownHandler}
        />

      </div>
    </div>
  );
};

export default VideoPlayer;
