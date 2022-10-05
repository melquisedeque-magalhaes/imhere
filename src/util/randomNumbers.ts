interface randomIntFromIntervalProps {
  min: number
  max: number
}

export function randomIntFromInterval({ max, min }: randomIntFromIntervalProps) { 
  return Math.floor(Math.random() * (max - min) + min)
}