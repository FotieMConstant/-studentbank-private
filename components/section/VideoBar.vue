<template>
	<section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="~/assets/video/_import_609113a1be0e89.39394997_preview.mp4" type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content space-y-2">
        <h1 class="font-light text-6xl">Lorem ipsum dolor</h1>
        <h3 class="font-light text-lg mx-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
    </div>
</section>

</template>
<script>
export default {
    data() {
      return {
	  }
    },
    computed:{},
    mounted() {},
    methods: {},
  }
</script>

<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.video-content {
  z-index: 2;
  position: absolute;
  @apply mt-20
}
</style>