import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const DAFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export default function formatTime(
  value: string,
  format: string = DAFAULT_FORMAT
) {
  return dayjs.utc(value).format(format)
}
