<template>
    <li class="product">
        <img v-if="productId < 11" class="product__image" :src="`src/assets/produtos/produto${productId}.png`" :alt="`Produto ${productId}`">
        <img v-else class="product__image" src="../assets/produtos/default-image.jpg" :alt="`Produto ${productId}`">
        <h3 class="product__name">{{name}}</h3>
        <p class="product__price">R${{ parseFloat(price).toFixed(2) }}</p>
        <button @click="handleCart" class="product__btn">Comprar</button>
    </li>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const props = defineProps(['productId', 'name', 'price']);

let cartItem = ref({});

const handleCart = () => {
  cartItem.value = {
    id: props.productId,
    nameProduct: props.name,
    priceProduct: props.price,
  }

  window.localStorage.setItem('cartItem', JSON.stringify(cartItem.value));

  router.push({name: 'cart'});
}
</script>

<style scoped>
.product{
  list-style: none;
  width: 60%;
  padding: 0;
  margin: 30px auto;
}

.product:last-child{
  margin-bottom: 0;
}

.product:hover{
  border: 1px solid #000;
  border-radius: 10px;
}

.product__image{
  width: 50%;
  display: block;
  margin: 0 auto;
}

.product__name{
  text-align: center;
  padding: 0;
  margin: 10px 0 5px;
  font-size: 1rem;
}

.product__price{
  text-align: center;
  margin: 0;
  font-size: 1rem;
}

.product__btn{
    display:  block;
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
    text-decoration: none;
}

.product__btn:hover{
  background-color: #2ea828;
  color: #000;
}

.product__btn:last-child{
  margin-bottom: 0;
}

@media (min-width: 768px) {
    .product{
    width: 90%;
    padding: 20px 0;
  }

  .product__image{
    width: 90%;
    border-radius: 5px;
  }

  .product__name{
    font-size: 2rem;
    padding: 0 2vw;
  }

  .product__price{
    margin: 15px 0;
  }

  .product__price, .product__quant, .product__total-price{
    font-size: 2rem;
  }

  .product__btn{
    font-size: 2rem;
    width: 10vw;
    padding: 0;
  }
}
</style>