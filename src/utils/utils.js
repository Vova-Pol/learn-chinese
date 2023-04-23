export function setBackground(index, colorsArr) {
  if (index < colorsArr.length) {
    return colorsArr[index];
  } else {
    return colorsArr[
      index - colorsArr.length * Math.floor(index / colorsArr.length)
    ];
  }
}
