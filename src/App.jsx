import React from "react";

import PageSwitcher from "./PageSwitcher";
import "./Cursor";


import "./App.css";

const App = () => {
  return (
    <div className="App">
      <PageSwitcher/>
    </div>
  );
};

// import VideoPlayer from "./video/VideoPlayer";
//
// const App = () => {
//   return (
//     <div className="App">
//       <VideoPlayer
//         videoSrc={"videos/Flowwow1.mp4"}
//         style={{
//           position: "absolute",
//           top: 50,
//           left: 50,
//         }}
//       />
//     </div>
//   );
// };

export default App;
