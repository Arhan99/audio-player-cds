import React, { FC } from "react";
import PanelButton from "../PanelButton/PanelButton";
import "./ControlPanel.scss";
import { secondsToHms } from "../../utils/secondsToHms";
import { objectsStore } from "../../Modules/Playlist/Playlist";
import PrevArrow from "../Arrows/PrevArrow";
import NextArrow from "../Arrows/NextArrow";

type ControlPanelProps = {
  play: () => void;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  changeMusic: (id: number) => void;
};

const ControlPanel: FC<ControlPanelProps> = ({
  play,
  isPlaying,
  duration,
  currentTime,
  changeMusic,
}) => {
  return (
    <div className="control-panel">
      <div className="control-panel__timer">{secondsToHms(currentTime)}</div>
      <div className="control-panel__center">
        <PrevArrow changeMusic={changeMusic} objectsStore={objectsStore} />
        <PanelButton play={play} isPlaying={isPlaying} />
        <NextArrow changeMusic={changeMusic} objectsStore={objectsStore} />
      </div>
      <div className="control-panel__timer">{secondsToHms(duration)}</div>
    </div>
  );
};

export default ControlPanel;
