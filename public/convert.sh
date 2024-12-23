#!/usr/bin/env bash

if [ $# -ne 2 ]; then
  echo "Usage: ${0} file_in file_out"
  exit 1
fi

ffmpeg -i $1 -c copy -movflags +faststart $2
