<template>
	<section class="bg-orange-light dark:bg-brown-dark text-white pb-16">
		<svg class="absolute w-full" viewBox="0 0 1512 449" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M5.41406 367C130.915 302.833 451.113 181.8 727.904 211C932.15 230.5 1186.6 234.5 1496.16 93.5" stroke="#ED174C" stroke-width="2"/>
			<path d="M0.000634097 271.625C132.024 222.803 463.955 140.627 735.487 202.5C936.089 246.123 1188.33 280.314 1512 177.047" stroke="#F58220" stroke-width="2"/>
		</svg>

		<div class="relative z-10 container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
			<h1 class="text-4xl font-bold leading-none sm:text-5xl">Une banque pour les étudiants</h1>
			<!-- <p class="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p> -->
			<div class="flex flex-wrap justify-center mt-8">
				<a href="/book">
                	<modules-buttons-primary>Être accompagné</modules-buttons-primary>
				</a>
            </div>
		</div>
		<!-- services card -->
		<div class="flex justify-between mx-6">
			<modules-cards-services v-for="item in services" :title="item.name" :description="item.description" :img="item.img"/>
		</div>
		<!-- /services card -->
	</section>
</template>
<script>
export default {
    data() {
      return {
		services: [
		  {
			name: "Banque",
			description: "Lorem ipsum dolor sit amet",
			img: "1.png"
		  },
		  {
			name: "Logement",
			description: "Lorem ipsum dolor sit amet",
			img: "2.png"
		  },
		  {
			name: "Mobilité",
			description: "Lorem ipsum dolor sit amet",
			img: "3.png"
		  }
		]
	  }
    },
    computed:{},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>

</style>