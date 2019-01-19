export function parseTime(timePeriod, time) {
  var options = {}
  switch (timePeriod) {
    case 0:
      options = {timeZone: 'UTC', hour: 'numeric', hour12: true}
      return new Date(time).toLocaleString('en-US', options)
    case 1:
      options = {timeZone: 'UTC', weekday: 'short', month: 'numeric', day: 'numeric'}
      return new Date(time).toLocaleDateString('en-US', options)
    case 2:
      options = {timeZone: 'UTC', weekday: 'short', month: 'numeric', day: 'numeric'}
      return new Date(time).toLocaleDateString('en-US', options)
    case 3:
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return months[time - 1]
    case 4:
      return time
    default:
      options = {timeZone: 'UTC', weekday: 'short', month: 'short', day: 'numeric'}
      return new Date(time).toLocaleDateString('en-US', options)
  }
}

export function timePassed(time) {
  const timePassed = (Date.now() - time) / 1000
  if (timePassed < 60) {
    return `${Math.round(timePassed)} sec ago`
  } else  if (timePassed < (60 * 60)) {
    return `${Math.round(timePassed / 60)} min ago`
  } else if (timePassed < (60 * 60 * 24)) {
    return `${Math.round(timePassed / (60 * 60))} hour ago`
  } else {
    return `${Math.round(timePassed / (60 * 60 * 24))} days ago`
  }
}
