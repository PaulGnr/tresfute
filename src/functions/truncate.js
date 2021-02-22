export const truncate = (string, size) => {
  if(string.length > size)
  {
    return string.substring(0, size) + "..."
  }
  return string
}