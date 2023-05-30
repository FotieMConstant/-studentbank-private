<template>
   <div id="topPage">
      <section-HeroHeader class="hidden md:block"/>
      <div>
         <section-VideoBar class="hidden md:block"/>
      </div>
      <div>
         <section-ExpencesSection/>
      </div>
      <div>
         <section-BankCardSection/>
      </div>
      <div class="hidden md:block">
         <section-YourAdvantagesSection/>
      </div>
      <div id="logement">
         <section-HelpRentSection/>
      </div>
      <!-- for calling mobile verison -->
      <div class="block md:hidden">
         <section-YourAdvantagesSection/>
      </div>
      <!-- for calling mobile verison -->
      <div>
         <section-GoInternationalSection/>
      </div> 
      <div class="hidden md:block">
         <section-TestimonialSection/>
      </div>
      <div>
         <section-FooterSection/>
      </div>
   </div>
</template>
<script>
    export default {
      layout: "default",

    }
</script>

<style lang="scss" scoped>

</style>
