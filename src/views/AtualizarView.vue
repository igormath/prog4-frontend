<script setup>
import Header from '../components/Header.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue';
import {onMounted} from "vue";
import { getProducts } from "../services/getProduct.js";
import { putProduct } from "../services/putProduct.js";

const products = ref([]);
const selected = ref();
const productName = ref();
const productPrice = ref();
const isUpdateOk = ref(false);

const handleGetProducts = async () => {
    try {
        products.value = await getProducts();
    } catch (e) {
        alert(e);
    }
}

const handleOptionChange = () => {
    let chosenProduct = products.value.filter(product => {
        return product.id === selected.value;
    })

    productName.value = chosenProduct[0].name;
    productPrice.value = chosenProduct[0].price;
}

const handleUpdateSubmit = async () => {
    const res = await putProduct(selected.value, productName.value, productPrice.value);
    if (res.status === 200){
        products.value.forEach(product => {
            if (product.id === selected.value){
                product.name = productName.value
                product.price = productPrice.value
            }
        });
        isUpdateOk.value = true;
    }
}

onMounted(() => {
    handleGetProducts();
})
</script>

<template>
    <Header/>
    <main class="main__att">
    <form id="product-att" @submit.prevent="handleUpdateSubmit">
      <label for="products" class="label__att first">Selecione um produto para atualizar:</label>
      <select id="products" name="products" class="select__products" @change="handleOptionChange" v-model="selected">
        <option 
        v-for="(product) of products" 
        :value="product.id"
        class="att__option">    
            {{ product.name }}
        </option>
      </select>
      <label for="product-name" class="label__att">Nome do Item:</label>
      <input v-model="productName" type="text" id="product-name" class="input__name" name="product-name" placeholder="Digite o nome do item" required>
      <label for="product-price" class="label__att">Preço do Item:</label>
      <input v-model="productPrice" type="text" id="product-price" class="input__price" name="product-price" placeholder="Digite o preço do item" required>
      <button type="submit" class="submit__btn">Atualizar</button>
    </form>
    <p v-show="isUpdateOk" class="remove__success">Produto atualizado com sucesso!</p>
    </main>
    <Footer/>
</template>

<style scoped>
@media (min-width: 768px) {
    .main__att{
    padding: 3vh 0;
  }

  #product-att{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-size: 2rem;
  }

  .select__products{
    margin: 5vh auto;
    font-size: 2rem;
  }

  .input__name, .input__price{
    font-size: 2rem;
    border-radius: 10px;
    margin: 2vh auto;
    padding-left: 1vw;
    width: 60%;
    display: block;
    height: 5vh;
  }

  .input__name:focus, .input__price:focus{
    outline: none;
  }

  .submit__btn{
    font-size: 2.5rem;
    width: 20%;
    height: 5vh;
    display: block;
    margin: 2vh auto 4vh;
    border-radius: 10px;
    border: 1px solid #BAC7BE;
    cursor: pointer;
  }

  .submit__btn:hover{
    background-color: #BAC7BE;
  }

  .label__att{
    font-size: 3rem;
  }

  .first{
    font-size: 3.5rem;
  }

  .remove__success{
    font-size: 2rem;
    text-align: center;
  }

  .att__option{
    text-align: center;
  }

  #products{
    font-size: 2.5rem;
  }
}
</style>
