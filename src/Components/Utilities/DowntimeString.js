export function downtimeString(downtime) {
  const hours = Math.floor(downtime / 60)
  const minutes = downtime % 60
  var downtimeString = ''
  var hoursLabel = hours > 0 ? hours + 'h ' : ''
  downtimeString += hoursLabel
  downtimeString += minutes + 'm'
  return downtimeString
}
