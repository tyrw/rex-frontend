export const truncateString = (string:string = '', maxLength:number = 50) => 
  string.length > maxLength 
    ? `${string.substring(0, maxLength)}…`
    : string
