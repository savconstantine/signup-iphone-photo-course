export const getSrc = (name) => {
  return new URL(`/src/assets/iPhoneCarousel/${name}.jpg`, import.meta.url);
};

export const getSrcset = (name, scaleArray = [2, 3]) => {
  return scaleArray.reduce((acc, scale) => {
    acc = acc.length === 0 ? acc : `${acc}, `;
    return `${acc}${new URL(
      `/src/assets/iPhoneCarousel/${name}@${scale}x.jpg`,
      import.meta.url
    )} ${scale}x`;
  }, "");
};
