<template>
  <div>
    <button class="set-value" @click="setValue">Set Value</button>
  </div>
</template>
<script>
export default {
  methods: {
    reset() {
      this.$store.dispatch("setValue");
    },
  },
};
</script>
<style>
.set-value {
  padding: 10px;
  border-radius: 5px;
  background: #4a9edb;
  border: 1px solid;
  color: white;
  width: 100px;
  margin-left: 10px;
  font-size: 16px;
}
.set-value:hover {
  background: white;
  color: #4a9edb;
  border: 1px solid #4a9edb;
  border-radius: 10px;
}
</style>
