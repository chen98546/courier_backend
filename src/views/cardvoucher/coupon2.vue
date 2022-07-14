<template>
  <div class="app-container">
    <el-table :data="couponData" style="width: 100%" height="800"
      :default-sort="{ prop: 'endTime', order: 'descending' }">
      <el-table-column type="selection" align="center"></el-table-column>

      <el-table-column type="expand" label="展开">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品序号">
              <span>{{ props.$index + 1 }}</span>
            </el-form-item>
            <el-form-item label="商品ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.createdTime }}</span>
            </el-form-item>
            <el-form-item label="更新时间">
              <span>{{ props.row.updatedTime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>


      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>


      <el-table-column label="标题" width="280" :filters="[{text:'id',value:'id'},{text:'title',value:'title'}]" :filter-method="filterHandler">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="类型" sortable prop="couponType" width="130">
        <template slot-scope="scope">{{ scope.row.couponText }}</template>
      </el-table-column>
      <el-table-column label="优惠券券码" sortable prop="couponCode" width="120">
        <template slot-scope="scope"><span>{{ scope.row.couponCode }}</span></template>
      </el-table-column>
      <el-table-column label="有效期" sortable prop="endTime" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.validDay">领取后 {{ scope.row.validDay }}天内有效</span>
          <span v-else>{{ scope.row.endTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束时间" sortable prop="endTime" align="center">
        <template slot-scope="scope">{{ scope.row.endTime }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100, 200, 300, 400]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import couponData from '@/analogData/cardvoucher/coupon.js'

export default {
  data() {
    return {
      couponData: couponData.data,
      total: couponData.count,
      currentPage: 1
    }
  },
  created() {

  },
  mounted() {
    // 状态文本显示
    this.couponData.forEach(item => {
      item.couponType == 0 && (item.couponText = '满减')
      item.couponType == 1 && (item.couponText = '折扣')
      item.couponType == 2 && (item.couponText = '无首重')
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
    // 每页显示条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 当前页面
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    filterHandler(value, row, column) {
      console.log(value, row, column);
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>


<style>
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
  font-weight: 500;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
