<template lang="">
  <h3 class="about-h">About Me</h3>
  <div class="about">
    <p>
      Title: <span>{{ myDetails.title }}</span>
    </p>
    <p>
      Full Name: <span> {{ myDetails.fullName }}</span>
    </p>
    <p>
      Phone Number: <span>{{ myDetails.mobileNumber }}</span>
    </p>
    <p>
      E-mail: <span>{{ myDetails.email }}</span>
    </p>
    <p>
      Portfolio:
      <a
        class="portfolio"
        href="https://github.com/judeokeleke"
        target="_blank"
        rel="noopener noreferrer"
        >{{ myDetails.portfolioWebsite }}</a
      >
    </p>
  </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
// eslint-disable-next-line no-unused-vars
const myDetails = reactive({
  fullName: "Jude Okeleke",
  title: "FrontEnd Developer",
  email: "jiokeleke@gmail.com",
  mobileNumber: "+2348107415365",
  portfolioWebsite: "click me",
});
</script>
<style>
.about {
  padding-left: 10px;
  color: #32355c;
  font-weight: 400;
}
.portfolio {
  text-decoration: none;
  color: #32355c;
}
.about-h {
  color: #32355c;
}
@media screen and (max-width: 600px) {
}
</style>
