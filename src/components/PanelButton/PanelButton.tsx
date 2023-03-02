import React, { FC } from "react";
import "./PanelButton.scss";

type PanelButtonProps = {
  play: () => void;
  isPlaying: boolean;
};

const PanelButton: FC<PanelButtonProps> = ({ play, isPlaying }) => {
  return (
    <div className="panel-btn">
      <div
        onClick={play}
        className={isPlaying ? "panel-btn-stop" : "panel-btn-play"}
      ></div>
    </div>
  );
};

export default PanelButton;
