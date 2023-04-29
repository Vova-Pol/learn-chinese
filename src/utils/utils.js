export function setBackground(index, colorsArr) {
  if (index < colorsArr.length) {
    return colorsArr[index];
  } else {
    return colorsArr[
      index - colorsArr.length * Math.floor(index / colorsArr.length)
    ];
  }
}

function converTimeToSec(timeString) {
  // '2:30' => 150
  const timeArr = timeString.split(':');
  return Number(timeArr[0]) * 60 + Number(timeArr[1]);
}

export function renderYouTubeLink(videoId, startTime, endTime) {
  const startSec = converTimeToSec(startTime);
  const endSec = converTimeToSec(endTime);
  return `https://www.youtube.com/embed/${videoId}?disablekb=0&end=${endSec}&fs=0&modestbranding=1&start=${startSec}&color=white`;
}
