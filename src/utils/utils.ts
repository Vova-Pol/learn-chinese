export function setBackground(index: number, colorsArr: string[]) {
  if (index < colorsArr.length) {
    return colorsArr[index];
  } else {
    return colorsArr[
      index - colorsArr.length * Math.floor(index / colorsArr.length)
    ];
  }
}

export function getVideoFileLocal(episodeName: string, speed: number): string {
  return require(`/Users/vovapolianitsa/Desktop/Китайский/${episodeName}/${speed}.mp4`);
}
