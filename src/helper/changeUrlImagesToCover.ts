import { IUrl } from "../redux/actions"

export const changeUrlImagesToCover = (url: IUrl) => {
  return {
    ...url,
    url: url.url.replace('t_thumb', 't_cover_big')
  }
}