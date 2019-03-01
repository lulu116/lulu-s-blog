import { request } from '@/utils'
export function test (params) {
  return request('/api/v1/configs?category=2&paging=0')
}
