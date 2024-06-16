<script setup>
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue';
import CartMain from '../components/CartMain.vue';
</script>

<template>
  <Header :productQuant="1"/>
  <CartMain/>
  <Footer/>
</template>
