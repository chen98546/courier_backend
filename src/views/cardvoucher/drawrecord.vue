<template>
  <div class="tableList">
    <Search :formData="formData"></Search>
    <ElTable :tabOptions="tabOptions">
      <el-table-column slot="checkbox" type="selection" align="center"></el-table-column>
      <template slot="avatar" slot-scope="{ row }">
        <el-image style="width: 50px; height: 50px" :src="row.avatar"></el-image>
      </template>
    </ElTable>
  </div>
</template>

<script>
import drawrecordData from '@/analogData/cardvoucher/drawrecord.js'
export default {
  components: {
    'ElTable': () => import('@/components/elTable/ElTable.vue'),
    'Search': () => import('@/components/search/Search.vue')
  },
  data() {
    return {
      tabOptions: {
        //列表数据
        tableData: drawrecordData.data,
        total: drawrecordData.count,
        headerColumn: [
          { label: 'id', prop: 'id', width: '100', slotName: 'id', align: 'left' },
          { label: '发放方式', prop: 'receiveType', width: '150', slotName: 'receiveType', align: 'left' },
          { label: '优惠券名称', prop: 'couponTitle', width: '200', slotName: 'couponTitle', align: 'left' },
          { label: '优惠券类型', prop: 'endTime', width: '200', slotName: 'endTime', align: 'left' },
          { label: '客户编号', prop: 'memberNo', width: '150', slotName: 'memberNo', align: 'left' },
          { label: '用户昵称', prop: 'nickName', width: '150', slotName: 'nickName', align: 'left' },
          { label: '用户头像', prop: 'avatar', width: '120', slotName: 'avatar', align: 'center' },
          { label: '使用费用类型', prop: 'amountType', width: '200', slotName: 'amountType', align: 'left' },
          { label: '优惠劵面值', prop: 'amount', width: '120', slotName: 'amount', align: 'center' },
          { label: '优惠劵折扣', prop: 'discount', width: '120', slotName: 'discount', align: 'center' },
          { label: '最低消费可用', prop: 'usedMinAmount', width: '130', slotName: 'usedMinAmount', align: 'center' },
          { label: '优惠劵状态', prop: 'couponType', width: '120', slotName: 'couponType', align: 'left' },
          { label: '有效期', prop: 'startTime', width: '200', slotName: 'startTime', align: 'left' },
          { label: '领取时间', prop: 'receiveTime', width: '200', slotName: 'receiveTime', align: 'left' },
        ]
      },
      formData: {
        title: '优惠券领取记录',
        searchArr: [
          {
            type: 'input',
            searchCoupon: '',
            placeholder: '会员编号'
          },
          {
            type: 'input',
            searchCoupon: '',
            placeholder: '活动名称'
          },
          {
            type: 'input',
            searchCoupon: '',
            placeholder: '优惠券名称'
          },
        ]
      }
    }
  },

  created() {

  },
  mounted() {
    // 状态文本显示
    drawrecordData.data.forEach(item => {
      item.receiveType == 0 && (item.receiveType = '自动发放')
      item.receiveType == 1 && (item.receiveType = '手动发放')
      item.receiveType == 2 && (item.receiveType = '扫码发放')
      item.receiveType == 4 && (item.receiveType = '兑换码领取')
      item.receiveTarget == 3 && (item.receiveTarget = '全部用户')
      item.couponType == 0 && (item.couponType = '未使用')
      item.couponType == 1 && (item.couponType = '已过期')
      item.couponType == 2 && (item.couponType = '已使用')
      item.amountType = [...item.amountType].filter(item => item !== ',').map(item => {
        item == '0' && (item = '运费')
        item == '1' && (item = '额外费用')
        item == '2' && (item = '保险费用')
        return item
      }).join('、')
    })
  },
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
  }
}
</script>


<style>
</style>
