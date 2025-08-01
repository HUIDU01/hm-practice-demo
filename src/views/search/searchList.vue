<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" @click="getProductList({
        sortType: 'all'
      })">综合</div>
      <div class="sort-item" @click="getProductList({
        sortType: 'sales'
      })">销量</div>
      <div class="sort-item" @click="getProductList({
        sortType: 'price'
      })">价格 </div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProList } from '@/api/product.js'

export default {
  name: 'SearchIndex',
  data () {
    return {
      page: 1,
      proList: []
    }
  },
  methods: { // 将获取后端商品信息的请求进行封装,
  // 在其中设置好默认值，防止出现未定义的情况
    async getProductList ({ productId = '', sortType = 'all', productName = '' } = {}) {
      const { data: { list } } = await getProList({
        productName,
        page: this.page,
        sortType, // 排序方式，传入sales
        // 即根据销量排序，传入pirce根据价格
        productId

      })
      this.proList = list.data
      if (this.proList.length === 0) {
        this.$toast('抱歉，没有搜到')
      }
    }
  },
  components: {
    GoodsItem
  },
  computed: {
    querySearch () {
      return this.$route.query.search
    }
  }, // 跳转到当前路由后接着根据传入的search值向后端发送请求
  created () {
    this.getProductList({
      productId: this.$route.query.categoryId,
      productName: this.querySearch,
      page: this.page
    })
    console.log(this.$route.query.search)
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
