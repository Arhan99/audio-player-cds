import React, { FC } from "react";
import PanelButton from "../PanelButton/PanelButton";
import "./ControlPanel.scss";
import { secondsToHms } from "../../utils/secondsToHms";
import { objectsStore } from "../../Modules/Playlist/Playlist";
import PlayerArrow from "../PlayerArrow/PlayerArrow";

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
      <span className="control-panel__timer">{secondsToHms(currentTime)}</span>
      <div className="control-panel__center">
        <PlayerArrow changeMusic={changeMusic} objectsStore={objectsStore} />
        <PanelButton play={play} isPlaying={isPlaying} />
        <PlayerArrow
          changeMusic={changeMusic}
          objectsStore={objectsStore}
          right
        />
      </div>
      <span className="control-panel__timer">{secondsToHms(duration)}</span>
    </div>
  );
};

export default ControlPanel;
