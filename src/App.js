import React, { useState } from "react";
import "./App.css";
import Video from "./Components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url=""
          channel="rafehqazi"
          description="this is the description"
          song="sonny song"
          likes={123}
          messages={234}
          shares={345}
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
