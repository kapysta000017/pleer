import "./App.css"
import VideoJS from "./VideoJS"
import React from "react"
import video from "./he.mp4"
import img from "./hello.jpg"

function App() {
  const videoJsOptions = {
    controls: true,
    poster: img,
    width: 640,
    height: 480,
    sources: [
      {
        src: video,
        type: "video/mp4",
      },
    ],
  }

  return (
    <div className="App">
      <div>
        <h1>iframe</h1>
        <iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/rokGy0huYEA"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded youtube"
        />
      </div>
      <div>
        <h1>library videojs</h1>
        <VideoJS options={videoJsOptions} />
      </div>
      <div>
        <h1>just tag html video</h1>
        <video
          poster={img}
          src={video}
          width="640"
          height="480"
          type="video/mp4"
          controls
        />
      </div>
    </div>
  )
}

export default App
