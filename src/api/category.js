import request from '@/utils/request'
// 获取分类页的网页信息

export const getCategoryData = () => {
  return request.get('/category/list')
}
