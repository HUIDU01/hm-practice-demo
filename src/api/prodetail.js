import request from '@/utils/request'
// 获取页面详情页数据
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail',
    {
      params: {
        goodsId
      }
    }
  )
}
// 获取商品的评论数据
export const getComment = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      limit,
      goodsId
    }
  })
}
