import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import "./Slider.scss";

type SliderProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  percentage: number;
};

const Slider: FC<SliderProps> = ({ onChange, percentage }) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef<HTMLInputElement>(null);
  const thumbRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const rangeWidth = rangeRef.current?.getBoundingClientRect().width ?? 0;
    const thumbWidth = thumbRef.current?.getBoundingClientRect().width ?? 0;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setMarginLeft(centerThumb);
    setPosition(percentage);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <div className="slider">
      <div
        className="slider__progress-bar-cover"
        style={{ width: `${progressBarWidth}px` }}
      ></div>
      <div
        className="slider__thumb"
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        ref={rangeRef}
        value={position}
        step="0.01"
        className="slider__range"
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
