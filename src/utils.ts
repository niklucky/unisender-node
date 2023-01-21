export function stringifyArray(data: string | string[] | number[]): string {
  if (typeof data === 'string')
    return data

  return data.join(',')
}