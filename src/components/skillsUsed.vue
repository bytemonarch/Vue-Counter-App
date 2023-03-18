<template lang="">
  <h3 class="technology-used">Tech Involved</h3>
  <div class="skill-box">
    <div class="html-box">
      <div class="html-img">
        <img src="@/assets/html.png" alt="" width="100" height="100" />
      </div>
    </div>
    <div class="html-box">
      <div class="html-img">
        <img src="@/assets/css.png" alt="" width="100" height="100" />
      </div>
    </div>
    <div class="html-box">
      <div class="html-img">
        <img src="@/assets/vuejs-logo.png" alt="" width="100" height="100" />
      </div>
    </div>
    <div class="html-box">
      <div class="html-img">
        <img src="@/assets/vuex.png" alt="" width="100" height="100" />
      </div>
    </div>
    <div class="html-box">
      <div class="html-img">
        <img src="@/assets/vercel.png" alt="" width="190" height="100" />
      </div>
    </div>
    <div class="html-box">
      <div class="html-img">
        <img src="@/assets/git-github.png" alt="" width="100" height="100" />
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.skill-box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.html-box {
  border: 0.5px solid #4a9edb;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.html-img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a5cfed;
}
.technology-used {
  color: #4a9edb;
  padding-left: 10px;
}
</style>
