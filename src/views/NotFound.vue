<template>
    <Header/>
    <main class="not__found">
        <h2 class="not__found__subtitle">404 PÁGINA NÃO ENCONTRADA!</h2>
    </main>
    <Footer/>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
@media (min-width: 768px) {
    .not__found{
    height: 40vh;
  }

  .not__found__subtitle{
    color: #000;
    font-weight: bold;
    text-align: center;
    font-size: 6rem;
    margin: 10% 0;
  }
}
</style>