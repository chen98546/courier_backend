<template>
  <div>
    组件1
  </div>
</template>

<script>
import { getments } from '@/api/user'
export default {
  data() {
    return {

    }
  },

  created: () => {
    getments().then(res => {
      console.log('分离后端数据')
    })
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
