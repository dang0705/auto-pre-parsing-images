const upperCase = (all, letter) => letter.toUpperCase();
const k2c = (str) => str.replace(/-(\w)/g, upperCase);
const imageOfThisProject = {};
export default {
  install(Vue) {
    Vue.prototype.$mappingImages = ({
      common = "",
      device = "",
      project = "",
      imagesDirName = "images",
      customPath = "",
    } = {}) => {
      const allImages = import.meta.glob([
        "/**/**.jpg",
        "/**/**.png",
        "/**/**.svg",
      ]);
      const matchingPath = (arg, path) =>
        arg ? path.includes(`/${arg}/`) : true;
      for (const path in allImages) {
        if (
          customPath
            ? matchingPath(`${customPath}`, path)
            : matchingPath(`${imagesDirName}/${common}`, path) ||
              (matchingPath(project, path) && matchingPath(device, path)) ||
              matchingPath(`${device}/${common}`, path)
        ) {
          const pathSplits = path.split(`/${imagesDirName}/`);
          const pathPrefix = pathSplits[0].replace(/\//, "");
          const dynamicPath = pathSplits[1];
          const image = path.substring(path.lastIndexOf("/") + 1);
          const imageName = k2c(image.split(".")[0]);

          !imageOfThisProject[imageName] &&
            (imageOfThisProject[imageName] = new URL(
              // '/' + pathPrefix + '/' + imagesDirName + '/' + dynamicPath,
              `/${pathPrefix}/${imagesDirName}/${dynamicPath}`,
              import.meta.url
            ).href);
        }
      }
      const isVue3 = !!Vue.config?.globalProperties;
      isVue3
        ? (Vue.config.globalProperties.globalImages = imageOfThisProject)
        : (Vue.prototype.globalImages = imageOfThisProject);
      return imageOfThisProject;
    };
  },
};
