import type { VideoSource } from '../data/projects'

interface Props {
  source: VideoSource
  title: string
  className?: string
}

export default function VideoPlayer({ source, title, className = '' }: Props) {
  if (source.type === 'bilibili') {
    return (
      <div className={`overflow-hidden bg-black ${className}`}>
        <iframe
          src={`https://player.bilibili.com/player.html?bvid=${source.bvid}&autoplay=0&high_quality=1`}
          className="aspect-video w-full border-0"
          allowFullScreen
          scrolling="no"
          title={title}
        />
      </div>
    )
  }

  return (
    <div className={`overflow-hidden bg-black ${className}`}>
      <video
        className="aspect-video w-full"
        controls
        preload="metadata"
        poster={source.poster}
        src={source.src}
        title={title}
      />
    </div>
  )
}
