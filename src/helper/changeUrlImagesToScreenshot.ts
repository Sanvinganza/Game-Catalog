interface IUrl {
  url: string,
  id: number
}

export const changeUrlImagesToScreenshot = (url: IUrl) => {
  return {
    ...url,
    url: url.url.replace('t_thumb', 't_screenshot_med')
  };
};