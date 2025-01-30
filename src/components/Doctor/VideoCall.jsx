import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faMicrophone, faUserPlus, faEllipsisV, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";

const VideoCall = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    // Simulated API response for mock video stream
    async function fetchMockStream() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    }
    fetchMockStream();
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (localVideoRef.current?.srcObject) {
      localVideoRef.current.srcObject.getAudioTracks().forEach(track => (track.enabled = isMuted));
    }
  };

  const toggleVideo = () => {
    setVideoEnabled(!videoEnabled);
    if (localVideoRef.current?.srcObject) {
      localVideoRef.current.srcObject.getVideoTracks().forEach(track => (track.enabled = videoEnabled));
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <div className="relative flex-1 bg-white shadow-lg w-full">
        {/* Remote Video Full Screen */}
        <video ref={remoteVideoRef} className="w-full h-full object-cover rounded-md bg-gray-300" autoPlay></video>
        
        {/* Small Floating Local Video */}
        <div className="absolute top-4 right-4 w-32 h-32 bg-gray-500 rounded-md overflow-hidden shadow-lg">
          <video ref={localVideoRef} className="w-full h-full object-cover" autoPlay muted></video>
        </div>
        
        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-4 bg-white p-3 rounded-lg shadow-lg">
          <button onClick={() => alert("Add participant (Mock API)")}>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
          <button onClick={toggleVideo}>
            <FontAwesomeIcon icon={faVideo} className={videoEnabled ? "text-blue-500" : "text-gray-400"} />
          </button>
          <button onClick={toggleMute}>
            <FontAwesomeIcon icon={faMicrophone} className={isMuted ? "text-red-500" : "text-green-500"} />
          </button>
          <button>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
          <button className="bg-red-500 text-white p-2 rounded-full" onClick={() => alert("Call Ended (Mock API)")}>
            <FontAwesomeIcon icon={faPhoneSlash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
