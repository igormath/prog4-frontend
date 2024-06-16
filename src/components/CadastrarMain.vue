<template>
    <main class="main__add">
        <h3 class="add__subtitle">Cadastre novos produtos: </h3>
        <form id="product-add" @submit.prevent="handleCreateProduct">
            <label for="product-name" class="add__label">Nome do Item:</label>
            <input v-model="name" type="text" id="product-name" class="input__name" name="product-name" placeholder="Digite o nome do item" required>
            <label for="product-price" class="add__label">Preço do Item:</label>
            <input v-model="price" type="text" id="product-price" class="input__price" name="product-price" placeholder="Digite o preço do item" required>
            <button type="submit" class="submit__btn">Cadastrar</button>
        </form>
        <h3 v-if="isProductCreated" class="remove__success add_status">Produto cadastrado com sucesso!</h3>
  </main>
</template>

<script setup>
import { postProduct } from '@/services/postProduct';
import { ref } from 'vue';

const name = ref();
const price = ref();
const isProductCreated = ref(false);

const handleCreateProduct = async () => {
    try{
        const response = await postProduct(name.value, price.value)
        if (response.status === 201){
            isProductCreated.value = true;
        }
    }catch (e){
        alert(e)
    }
}
</script>

<style scoped>
@media (min-width: 768px) {

    .main__add{
        padding: 5vh 0;
    }

    .add__subtitle{
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5vh;
  }

  #product-add{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-size: 2rem;
  }

  .add__label{
    font-size: 2.5rem;
  }

  .input__name, .input__price{
    font-size: 2rem;
    border-radius: 10px;
    margin: 2vh auto;
    width: 60%;
    padding: 1vh 0 1vh 1vw;
    display: block;
  }

  .input__name:focus, .input__price:focus{
    outline: none;
  }

  .submit__btn{
    font-size: 2rem;
    width: 10%;
    height: 4vh;
    display: block;
    margin: 2vh auto 4vh;
    border-radius: 10px;
    border: 1px solid #BAC7BE;
    cursor: pointer;
  }

  .submit__btn:hover{
    background-color: #BAC7BE;
  }

  .add_status{
    font-size: 2rem;
    text-align: center;
  }
}
</style>
