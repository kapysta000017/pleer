import "./App.css"
import VideoJS from "./VideoJS"
import React from "react"
import video from "./he.mp4"
import img from "./hello.jpg"

import "vidstack/styles/defaults.css"
import "vidstack/styles/community-skin/video.css"

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react"

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

      <h1>library Vidstack.io</h1>
      <div style={{ width: "640px", height: "480px", margin: "0 auto" }}>
        <MediaPlayer
          title="Sprite Fight"
          src={video}
          poster={img}
          // thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
          aspectRatio={16 / 9}
          crossorigin=""
        >
          <MediaOutlet>
            <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
            {/* <track
              src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
              label="English"
              srcLang="en-US"
              kind="subtitles"
              default
            /> */}
            {/* <track
              src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
              srcLang="en-US"
              kind="chapters"
              default
            /> */}
          </MediaOutlet>
          <MediaCommunitySkin />
        </MediaPlayer>
      </div>
    </div>
  )
}

export default App
