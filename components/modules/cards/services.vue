<template>
    <div class="relative __img_hover cursor-pointer">
      <div class="__img_cover">
         <nuxt-img class="rounded-lg w-96" :src="`../../../img/${img}`" />
       <div class="absolute z-10 top-0 p-5">
        <h1 class="text-4xl font-bold leading-none">{{title}}</h1>
        <div class="text-lg">{{description}}</div>
       </div>
      </div>
    </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: "Unknown",
      },
      description: {
        type: String,
        default: "Lorem ipsum dolor sit amet",
      },
      img: {
        type: String,
        default: "1.png",
      }
    },
    data() {
      return {}
    },
    computed:{},
    mounted() {},
    methods: {},
  }
</script>

<style scoped>
.__img_hover .__img_cover {
  overflow: hidden;
  @apply rounded-lg;
}
.__img_hover img {
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out;
  @apply cursor-pointer;
}
.__img_hover:hover img {
  transform: scale(1.05);
}
</style>