// 根据发送信息访问后端，并返回相应信息
import request from '@/utils/request'

export const getProList = (paramsData) => {
  const { productId, productName, page, sortType } = paramsData
  return request.get('/goods/list', {
    params: {
      categoryId: productId,
      goodsName: productName,
      page: page,
      sortType
    }
  })
}
