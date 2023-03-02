export function secondsToHms(seconds: number) {
  if (!seconds) return "00m 00s";
  let duration = seconds;
  let hours = duration / 3600;
  duration = duration % 3600;

  let min: number | string = parseInt(String(duration / 60));
  duration = duration % 60;

  let sec: number | string = parseInt(String(duration));

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }

  if (parseInt(String(hours), 10) > 0) {
    return `${parseInt(String(hours), 10)}h ${min}m ${sec}s`;
  } else if (min === 0) {
    return `00m ${sec}s`;
  } else {
    return `${min}m ${sec}s`;
  }
}
