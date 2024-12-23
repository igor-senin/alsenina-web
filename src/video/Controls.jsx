import React from "react";
import { useState } from "react";

import { styled } from "@mui/system";
import { Slider, Box, Stack } from "@mui/material";
import {
  Pause,
  PlayArrow,
} from "@mui/icons-material";

import "./Controls.css";

const IconButton = styled("div")({
  color: "rgba(0, 0, 0, 0.8)",
  padding: "0 10px",
  "&:hover": {
    color: "rgba(254, 120, 189, 0.8)",
    transition: "0.3s",
  },
});

const BottomContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

const VolumeSlider = ({value, onChange, onChangeCommitted}) => {
  return (
    <Box sx={{ width: "15%" }}>
      <Stack
        spacing={2}
        direction={"row"}
        sx={{ alignItems: "center", mb: 1 }}
        cursor={"none"}
      >
        <Slider
          value={value}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          style={{ cursor: "none", color: "rgba(254, 120, 189, 1.0)" }}
        />
      </Stack>
    </Box>
  );
};

const TimeSlider = ({value, onSeek, onSeekMouseUp}) => {
  return (
    <Box sx={{ width: "60%" }}>
      <Stack
        spacing={2}
        direction={"row"}
        sx={{ alignItems: "center", mb: 1 }}
        cursor={"none"}
      >
        <Slider
          value={value * 100}
          onChange={onSeek}
          onChangeCommitted={onSeekMouseUp}
          style={{ cursor: "none", color: "rgba(254, 120, 189, 1.0)" }}
        />
      </Stack>
    </Box>
  );
};

const Controls = ({
  onPlayPause,
  playing,
  played,
  onSeek,
  onSeekMouseUp,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  volume,
  duration, // TODO: integrate this
  currentTime,
  controlsRef
}) => {
  return (
    <div className={"control-container"} ref={controlsRef}>
      <div className={"top-container"}/>

      <div className={"mid-container"}/>

      <BottomContainer className={"bottom-container"}>
        <IconButton onClick={onPlayPause}>
          {
            playing
            ? <Pause sx={{ fontSize: "40px" }}/>
            : <PlayArrow sx={{ fontSize: "40px" }}/>
          }
        </IconButton>

        <TimeSlider
          value={played}
          onSeek={onSeek}
          onSeekMouseUp={onSeekMouseUp}
        />

        <VolumeSlider
          value={volume * 100}
          onChange={onVolumeChangeHandler}
          onChangeCommitted={onVolumeSeekUp}
        />
      </BottomContainer>
    </div>
  );
};

export default Controls;
