import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const [play, setPLaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPLaying(false);
    } else {
      videoRef.current.play();
      setPLaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001/oYA1Qc8khmJV9yceBgnAIpPeRTkQvBJEHrD7bH/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=898&bt=449&cs=0&ds=3&ft=_RwJrBj9q8Zmozxvvc_vjR_47AhLrus&mime_type=video_mp4&qs=0&rc=aWY2ZjU7ZjQ5Ozo2PGc1OEBpM3Nxdmk6Zm9lajMzNzczM0BgYDFgLV8tNi0xMzRfMjA0YSM0aW8xcjRfaHNgLS1kMTZzcw%3D%3D&btag=80000&expire=1682560595&l=2023042619552639FE03C15B7C22054A8A&ply_type=2&policy=2&signature=882b332a986ce923f44837cd197cfc54&tk=tt_chain_token"
      ></video>
    </div>
  );
}

export default Video;
