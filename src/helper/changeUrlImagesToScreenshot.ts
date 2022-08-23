import { IUrl } from "../redux/actions"

export const changeUrlImagesToScreenshot = (url: IUrl) => {
  return {
    ...url,
    url: url.url.replace('t_thumb', 't_screenshot_big')
  }
}