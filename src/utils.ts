export function stringifyArray(data: string | string[] | number[]): string {
  if (!data) return data

  if (typeof data === 'string')
    return data
  
  return data.join(',')
}