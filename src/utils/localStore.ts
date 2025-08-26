import dayjs from 'dayjs'

/**
 * 根据过期时间字符串生成过期日期
 * @param expireAt 过期时间字符串，如 "1d", "2h"
 * @returns 过期日期的 ISO 字符串或 null
 */
const getExpireDate = (expireAt: string) => {
  const [num, unit] = expireAt.match(/\d+|[a-zA-Z]+/g) || []

  if (num && unit) {
    return dayjs()
      .add(Number(num), unit as dayjs.ManipulateType)
      .toISOString()
  }
  return null
}

/**
 * 从 localStorage 获取指定 key 的数据，自动判断是否过期
 * @param key 存储的键名
 * @returns 未过期的数据或 null
 */
export const getLocalStore = <T = unknown>(key: string) => {
  const _key = 'DST_ADMIN_' + key
  const item = localStorage.getItem(_key)
  if (item) {
    const { data, expireDate } = JSON.parse(item)
    if (!expireDate || dayjs().isBefore(dayjs(expireDate))) {
      return data as T
    }
    localStorage.removeItem(_key)
  }
  return null
}

/**
 * 向 localStorage 存储数据，可选设置过期时间
 * @param key 存储的键名
 * @param value 要存储的数据
 * @param expireAt 过期时间字符串，如 "1d", "2h"
 */
export const setLocalStore = (key: string, value: any, expireAt?: string) => {
  localStorage.setItem(
    'DST_ADMIN_' + key,
    JSON.stringify({
      data: value,
      expireDate: expireAt ? getExpireDate(expireAt) : null,
    })
  )
}
