<template>
  <div class="notfound-wrapper">
    <div class="notfound-box">
      <p class="text404">404</p>
      <p class="oops">Oops! That page can't be found</p>
      <p class="sorry">Sorry but the page you are looking for does not existing</p>
      <router-link to="/" class="back">Back to home</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notfound-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.notfound-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 100px auto;
  color: #4a9edb;
}
.oops{
  font-size: 24px;
}
.sorry{
  font-size: 14px;
}
.back {
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  color: rgb(236, 162, 162);
}
.text404 {
  font-size: 48px;
  margin-bottom: 0px;
}
</style>
