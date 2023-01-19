import moment from 'moment'

export function relativeFormaterData(date: string) {
  return moment(date).fromNow()
}
