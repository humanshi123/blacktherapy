"use client";
// src/components/VideoPlayer.tsx
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const VideoPlayer: React.FC = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='/assets/videos/therapyvideo.mp4'
        width='100%'
        height='100%'
        controls={true}
      />
    </div>
  )
}

export default VideoPlayer

