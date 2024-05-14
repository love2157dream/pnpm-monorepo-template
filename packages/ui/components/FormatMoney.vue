<template>
  <el-form
    ref="formRef"
    style="max-width: 600px"
    :model="numberValidateForm"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item
      label="金额"
      prop="money"
      :rules="[
        { required: true, message: '金额不能为空' },
        { type: 'number', message: '金额是数字类型' },
      ]"
    >
      <el-input
        v-model.number="numberValidateForm.money"
        type="text"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      label="格式化后的金额"
      prop="amount" 
    >
      <el-input
        v-model="numberValidateForm.amount"
        type="text"
        autocomplete="off"
        readonly
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">格式化</el-button>
      <el-button @click="resetForm(formRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import "element-plus/dist/index.css";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { reactive, ref } from 'vue'
import { formatMoney } from "repo-utils";

console.log('formatMoney', formatMoney(2342113241, '$'));

const formRef = ref()

const numberValidateForm = reactive({
  money: '',
  amount: ''
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      numberValidateForm.amount = formatMoney(numberValidateForm.money, '$');
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
