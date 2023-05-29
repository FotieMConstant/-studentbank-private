<template>
   <div>
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
      <div class="block md:hidden">
        <section-RentMobileSection/>
      </div>
      <div class="hidden md:block">
         <section-HelpRentSection/>
      </div>
      <div>
         <section-GoInternationalSection/>
      </div> 
      <div>
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
