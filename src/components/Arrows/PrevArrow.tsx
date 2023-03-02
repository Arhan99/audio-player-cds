import { FC } from "react";
import { ObjectStore } from "../../store";

export type ArrowProps = {
  changeMusic: (id: number) => void;
  objectsStore: ObjectStore;
};

const PrevArrow: FC<ArrowProps> = ({ changeMusic, objectsStore }) => {
  return (
    <div
      onClick={() => changeMusic(objectsStore.currentMusicIndex - 1)}
      className=" arrow arrow__left"
    ></div>
  );
};

export default PrevArrow;
