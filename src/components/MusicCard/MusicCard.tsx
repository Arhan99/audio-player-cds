import React, { FC, useState } from "react";
import "./MusicCard.scss";
import { objectsStore } from "../../Modules/Playlist/Playlist";
import { secondsToHms } from "../../utils/secondsToHms";

export type MusicProps = {
  id: number;
  title: string;
  img?: string;
  music?: string;
  isPlaying?: boolean;
  index: number;
};

const Music: FC<MusicProps> = ({ id, img, title, music, isPlaying, index }) => {
  const [duration, setDuration] = useState("");

  return (
    <div
      className={`music ${isPlaying && "music-active"} `}
      onClick={() => {
        objectsStore.setIsPlaying(index);
      }}
    >
      <span className="music__number">{id}</span>
      <img className="music__img" src={img} alt="poster" />
      <span className="music__title">{title}</span>
      <audio
        src={music}
        onLoadedData={e => {
          setDuration(
            secondsToHms(Number(e.currentTarget.duration.toFixed(2)))
          );
        }}
      ></audio>
      <span className="music__duration">{duration}</span>
    </div>
  );
};

export default Music;
