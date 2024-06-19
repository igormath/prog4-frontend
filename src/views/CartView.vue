<script setup>
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue';
import { onMounted } from 'vue';

let cartItem = ref(null)
let productQuant = ref(1);

const getLocalStorageProduct = () =>{
    const storedItem = window.localStorage.getItem('cartItem');
    if (storedItem) {
        cartItem.value = JSON.parse(storedItem);
    }
}

const increaseQuant = () => {
    productQuant.value += 1; 
}

const decreaseQuant = () => {
    if (productQuant.value > 0){
        productQuant.value -= 1; 
    }
}

onMounted(() => {
    getLocalStorageProduct();
})
</script>

<template>
  <Header :productQuant="1"/>
  <section v-if="cartItem && cartItem.id" class="product card">
        <img v-if="cartItem.id < 11" class="product__image" :src="`src/assets/produtos/produto${cartItem.id}.png`" :alt="`Produto ${cartItem.id}`">
        <img v-else class="product__image" src="../assets/produtos/default-image.jpg" :alt="`Produto ${cartItem.id}`">
        <h3 class="product__name">{{ cartItem.nameProduct }}</h3>
        <p class="product__price">Preço unitário: R${{ cartItem.priceProduct.toFixed(2) }}</p>
        <p class="product__quant">Quantidade: <span class="product__quant--number">{{productQuant}}</span></p>
        <p class="product__total-price">Preço total: <span class="product__price-total">{{ (cartItem.priceProduct * productQuant).toFixed(2) }}</span></p>
        <div class="product__btn__container">
            <button @click="decreaseQuant" class="product__btn remove">-</button>
            <button @click="increaseQuant" class="product__btn add">+</button>
        </div>
        <button class="product__btn finish">Finalizar compra</button>
    </section>
  <Footer/>
</template>

<style scoped>
.product{
  width: 60%;
  background-color: #f1f1f1;
}

.card{
    margin: 10vh auto;
    padding: 2vh;
    width: 95%;
    border: 1px solid #000;
    border-radius: 10px;
}

.product__image{
  width: 50%;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}

.product__name{
  text-align: center;
  padding: 0;
  margin: 10px 0 5px;
  cursor: pointer;
  font-size: 1rem;
}

.product__price{
  text-align: center;
  margin: 0;
  font-size: 1rem;
}

.product__quant, .product__total-price{
  text-align: center;
  font-size: 1rem;
}

.product__btn__container{
  display: flex;
}

.product__btn{
  display: block;
  margin: 10px auto;
  background-color: #778472;
  border: none;
  border-radius: 5px;
  width: 30vw;
  height: 30px;
  color: #f1f1f1;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1rem;
  text-align: center;
  padding-top: 10px;
}

.product__btn:hover{
  background-color: #2ea828;
  color: #000;
}

.product__btn:last-child{
  margin-bottom: 0;
}

.remove:hover{
  background-color: #c01b06;
}

.finish{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh 0;
}

.product__quant--number, .product__price-total{
    font-size: 1.5rem;
}

@media (min-width: 768px) {
    .product{
    width: 90%;
  }

  .card{
    width: 30%;
  }

  .product__image{
    width: 90%;
    border-radius: 5px;
  }

  .product__name, .product__price{
    font-size: 2.5rem;
  }

  .product__price{
    margin: 15px 0;
  }
  
  .product__quant, .product__total-price{
    font-size: 2.5rem;
  }

  .product__btn__container{
    display: flex;
    justify-content: center;
  }

  .product__btn{
    font-size: 2rem;
    width: 10vw;
    padding: 0;
  }

  .finish{
    width: 50%;
    padding: 1vh 0;
  }

  .product__quant--number, .product__price-total{
    font-size: 2.5rem;
}
}
</style>
