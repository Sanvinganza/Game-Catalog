interface IUrl {
  url: string,
  id: number
}

export const changeUrlImagesToScreenshotBig = (url: IUrl) => {
  return {
    ...url,
    url: url.url.replace('t_thumb', 't_screenshot_big')
  };
};