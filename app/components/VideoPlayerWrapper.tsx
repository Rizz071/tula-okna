interface Props {
    videoSrc: string;
    posterSrc: string;
    videoType?: string;
    isAutoPlaying?: boolean;
}

const VideoPlayerWrapper = ({
    videoSrc,
    posterSrc,
    isAutoPlaying = false,
    videoType = "video/mp4",
}: Props) => {
    return (
        <video
            autoPlay={isAutoPlaying ? true : false}
            poster={posterSrc}
            muted
            controls
            loop
            disablePictureInPicture
            controlsList={"nodownload"}
            width="100%"
        >
            <source src={videoSrc} type={videoType} />
            Ваш браузер не поддерживает видео.
        </video>
    );
};

export default VideoPlayerWrapper;
