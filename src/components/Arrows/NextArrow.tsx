import React, { FC } from "react";
import { ArrowProps } from "./PrevArrow";

const NextArrow: FC<ArrowProps> = ({ changeMusic, objectsStore }) => {
  return (
    <div
      onClick={() => changeMusic(objectsStore.currentMusicIndex + 1)}
      className="arrow arrow__right"
    ></div>
  );
};

export default NextArrow;
