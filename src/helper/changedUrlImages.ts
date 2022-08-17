import { IUrl } from "../redux/actions"

export const changedUrlImages = (urls: IUrl[]) => {
  return urls.map((url: IUrl) => {
    return {
      id: url.id,
      url: url.url.replace('t_thumb', 't_cover_big')
    }
  })
}