<template>
  <div class="home container">
    <img  alt="Sotiks logo" src="../assets/black.png" />
    <HelloWorld msg="Добро пожаловать в поисковик Sotiks" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
img {
  height: 300px;
}
</style>
