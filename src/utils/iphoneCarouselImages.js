export const getSrc = (name, ext = "jpg") => {
  return new URL(`/src/assets/iPhoneCarousel/${name}.${ext}`, import.meta.url);
};

export const preloadSingleImgToCache = (name, ext = "jpg") => {
  if (window.devicePixelRatio > 1) {
    name = `${name}@${window.devicePixelRatio}x`;
  }
  const img = new Image();
  img.src = new URL(
    `/src/assets/iPhoneCarousel/${name}.${ext}`,
    import.meta.url
  );
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(true);
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${img.src}`));
    };
  });
};

export const preloadImgsToCache = async (imgNameArray, ext = "jpg") => {
  for (let name of imgNameArray) {
    preloadSingleImgToCache(name, ext);
  }
};

export const getSrcset = (name, scaleArray = [2, 3], ext = "jpg") => {
  return scaleArray.reduce((acc, scale) => {
    acc = acc.length === 0 ? acc : `${acc}, `;
    return `${acc}${new URL(
      `/src/assets/iPhoneCarousel/${name}@${scale}x.${ext}`,
      import.meta.url
    )} ${scale}x`;
  }, "");
};
