// Example: data = 1549312452
export const unixDataToData = (data: number) => {
  return new Date(data * 1000).toDateString();
}