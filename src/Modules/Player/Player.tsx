import React, { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import "./Player.scss";
import Slider from "../../components/Slider/Slider";
import ControlPanel from "../../components/ControlPanel/ControlPanel";
import { objectsStore } from "../Playlist/Playlist";
import { observer } from "mobx-react-lite";

const Player: FC = () => {
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    audio!.currentTime = (audio!.duration / 100) * Number(e.target.value);
    setPercentage(Number(e.target.value));
  };

  const play = () => {
    const audio = audioRef.current;
    audio!.volume = 0.1;
    if (audio?.paused) {
      audio?.play();
    } else {
      audio?.pause();
    }
  };

  const changeMusic = (index: number) => {
    setPercentage(0);
    objectsStore.setIsPlaying(index);
  };

  const getCurrDuration = useCallback((e: ChangeEvent<HTMLAudioElement>) => {
    const percent = (
      (e.currentTarget.currentTime / (e.currentTarget.duration || 1)) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(Number(time.toFixed(2)));
  }, []);

  return (
    <div className="player">
      <div className="player__name-block">
        <img
          className="player__image"
          src={objectsStore.currentMusic.img}
          alt="img"
        />
        <h1 className="player__title">{objectsStore.currentMusic.title}</h1>
      </div>
      <Slider onChange={onChange} percentage={percentage} />
      <audio
        autoPlay
        ref={audioRef}
        src={objectsStore.currentMusic.music}
        onLoadedData={e => {
          setDuration(Number(e.currentTarget.duration.toFixed(2)));
        }}
        onTimeUpdate={getCurrDuration}
        onEnded={() => changeMusic(objectsStore.currentMusicIndex + 1)}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={!audioRef.current?.paused ?? false}
        duration={duration}
        currentTime={currentTime}
        changeMusic={changeMusic}
      />
    </div>
  );
};

export default observer(Player);
