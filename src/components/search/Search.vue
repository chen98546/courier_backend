<template>
  <div class="searchHeader">
    <div class="searchTitle">{{ formData.title }}</div>
    <el-form ref="form" :model="formData" :inline="true" label-width="80px" class="searchForm">
      <el-form-item v-for="(item, index) in formData.searchArr" :key="index">
        <el-input v-if="item.type == 'input'" style="width: 200px" v-model="item.searchCoupon"
          :placeholder="item.placeholder"></el-input>
        <el-select v-else-if="item.type == 'select'" v-model="item.searchCoupon" placeholder="请选择">
          <el-option v-for="single in item.options" :key="single.value" :label="single.label" :value="single.value">
          </el-option>
        </el-select>
      </el-form-item>
      <slot name="btnGroup">
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </slot>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formData: {}
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.searchHeader {

  .searchTitle {
    border-bottom: 1px solid #f6f6f6;
    padding: 15px 0;
    font-size: 14px;
  }

  .searchForm {
    padding: 20px 0 0;
    font-size: 14px;
  }
}
</style>
