<script setup>
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue';
import MenuNav from '@/components/MenuNav.vue';
import ProductCard from '@/components/ProductCard.vue';

import { ref } from 'vue';
import {onMounted} from "vue";
import { getProducts } from "../services/getProduct.js";

const products = ref([]);
const filteredProducts = ref([]);
const searchProduct = ref('');
const isProductDontExist = ref(false)

const handleGetProducts = async () => {
    try {
        products.value = await getProducts();
        filteredProducts.value = products.value;
    } catch (e) {
        alert(e);
    }
}

function search(searchString){
    if (typeof searchString !== 'string' || searchString.length === 0){
        return products.value;
    }
    
    let searchLower = searchString.toLowerCase();
    let filtered = products.value.filter(product => {
        return product.name.toLowerCase().includes(searchLower);
    })
    
    return filtered;
}

const handleSearch = () => {
    const results = search(searchProduct.value);

    if (searchProduct.value.length === 0) {
        filteredProducts.value = products.value;
        isProductDontExist.value = false;
    } else if (results.length > 0) {
        filteredProducts.value = results;
        isProductDontExist.value = false;
    } else {
        filteredProducts.value = [];
        isProductDontExist.value = true;
  }
}

onMounted(() => {
    handleGetProducts();
})
</script>

<template>
  <Header/>
  <main>
    <MenuNav/>
    <section class="products">
      <h2 class="subtitle">O melhor de Caruaru e região!</h2>    
      <input 
      v-model="searchProduct"
      @change="handleSearch"
      class="products__search" 
      type="text" 
      placeholder="Pesquise na KI PetShop">
      <h3 class="products__subtitle">Confira nossa lista de produtos mais vendidos: </h3>
      <p v-show="isProductDontExist"class="products__notfind">Produto não encontrado!</p>
      <ul class="products__list">
        <ProductCard v-for="(product, index) of filteredProducts"
        :key="`product-${index}`"
        :productId="product.id"
        :name="product.name"
        :price="product.price"
        />       
      </ul>

    </section>
  </main>
  <Footer/>
</template>


<style scoped>
.products{
  background-color: #BAC7BE;
  padding-bottom: 40px;
}

.subtitle{
  font-size: 1.8rem;
  text-align: center;
  color: #000;
  margin: 0;
  padding: 20px 0;
}

.products__search{
  width: 85%;
  height: 50px;
  border-radius: 10px;
  font-size: 1rem;
  padding: 0 3vw;
  margin: 0 auto 4vh;
  box-sizing: border-box;
  border: none;
  display: block;
}

.products__search:focus{
  outline: none;
}

.products__subtitle{
  font-size: 1.3rem;
  text-align: center;
}

.products__list{
  margin: 0;
  padding: 0;
  display: block;
}

.products__notfind{
  font-size: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
    .products__search{
    margin: 0;
    padding: 0;
  }

  .products{
    padding: 20px 0;
  }

  .products__search{
    margin: 0 auto 40px;
    padding: 0 2vw;
    font-size: 1.8rem
  }

  .products__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Cria cinco colunas com largura igual */
    gap: 20px; /* Espaçamento entre os itens */
  }

  .products__notfind{
    font-size: 3rem;
    text-align: center;
    margin: 5vh auto;
  }
  
  .subtitle{
    font-size: 3rem;
  }

  .products__subtitle{
    font-size: 2.5rem;
  }
}
</style>
