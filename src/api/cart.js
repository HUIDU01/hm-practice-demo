import request from '@/utils/request.js'
// 向后端发送请求，添加至购物车
export const addCart = (goodsId, goodsSkuId, goodsNum) => {
  return request.post('/cart/add', {
    goodsId,
    goodsSkuId,
    goodsNum
  })
}
