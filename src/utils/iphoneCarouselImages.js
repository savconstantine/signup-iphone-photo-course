export const getSrc = (name, ext = "jpg") => {
  return new URL(`/src/assets/iPhoneCarousel/${name}.${ext}`, import.meta.url);
};

export const preloadImgsToCache = async (imgNameArray, ext = "jpg") => {
  for (let name of imgNameArray) {
    if (window.devicePixelRatio > 1) {
      name = `${name}@${window.devicePixelRatio}x`;
    }
    const img = new Image();
    img.src = new URL(
      `/src/assets/iPhoneCarousel/${name}.${ext}`,
      import.meta.url
    );
    img.onload = () => {};
  }
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
