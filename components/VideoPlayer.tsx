'use client';

interface VideoPlayerProps {
  videoSrc?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function VideoPlayer({ 
  videoSrc = "/LSWEE 2.mov", 
  className = "w-full h-full object-cover",
  autoPlay = true,
  loop = true
}: VideoPlayerProps) {
  return (
    <video
      autoPlay={autoPlay}
      loop={loop}
      playsInline
      muted
      className={className}
    >
      <source src={videoSrc} type="video/quicktime" />
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
