import { FC } from "react";
import { ObjectStore } from "../../store";

export type ArrowProps = {
  changeMusic: (id: number) => void;
  objectsStore: ObjectStore;
  right?: boolean;
};

const PlayerArrow: FC<ArrowProps> = ({ changeMusic, objectsStore, right }) => {
  return (
    <div
      className={`arrow ${right ? "arrow-right" : ""}`}
      onClick={() => changeMusic(objectsStore.currentMusicIndex - 1)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          clipPath="url(#clip0_429_11145)"
          stroke="#fff"
          strokeLinejoin="round"
        >
          <path d="M7 13.732c-1.333-.77-1.333-2.694 0-3.464l9-5.196c1.333-.77 3 .192 3 1.732v10.392c0 1.54-1.667 2.502-3 1.732l-9-5.196Z" />
          <path d="M4 19V5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default PlayerArrow;
