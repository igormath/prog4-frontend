<script setup>
    import Header from '../components/Header.vue';
    import Footer from '@/components/Footer.vue';

    import { getProducts } from '@/services/getProduct';
    import { deleteProduct } from '@/services/deleteProduct';
    import { onMounted, ref } from 'vue';

    const products = ref([]);
    const selected = ref(null);
    const isDeleteOk = ref(false);

    const handleGetProducts = async () => {
    try{
        products.value = await getProducts();
    }catch(e){
        alert(e);
    }
    }

    const handleDeleteSubmit = async () => {
    const response = await deleteProduct(selected.value);
    if (response.status === 200){
        const index = products.value.findIndex(element => element.id === selected.value);
        if (index !== -1){
        products.value.splice(index, 1)
        }
        isDeleteOk.value = true;
    }
    }

    onMounted(() => {
    handleGetProducts();
    })
</script>

<template>
    <Header/>
    <main class="main__remove">
        <form id="product-remove" @submit.prevent="handleDeleteSubmit">
            <label for="products" class="remove__label">Selecione um produto para remover:</label>
            <select v-model="selected" id="products" name="products" class="select__products">
                <option
                ref="se" 
                v-for="(product) of products" 
                :value="product.id"
                class="remove__option">
                  {{ product.name }}
                </option>
            </select>
            <button type="submit" class="submit__btn">Remover</button>
        </form>
        <p v-show="isDeleteOk" class="remove__success">Produto removido com sucesso!</p>
    </main>
    <Footer/>
</template>

<style scoped>
@media (min-width: 768px) {
    .main__remove{
    margin: 15vh 0;
  }
  
  #product-remove{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-size: 2rem;
  }

  .remove__label{
    font-size: 3rem;
  }

  .select__products{
    margin: 5vh auto;
    font-size: 2rem;
  }

  .submit__btn{
    font-size: 2rem;
    width: 20%;
    display: block;
    margin: 2vh auto 4vh;
    border-radius: 10px;
    border: 1px solid #BAC7BE;
    cursor: pointer;
  }

  .submit__btn:hover{
    background-color: #BAC7BE;
  }

  .remove__success{
    font-size: 2rem;
    text-align: center;
  }

  .remove__option{
    text-align: center;
  }
  
  #products{
    font-size: 2.5rem;
  }
}
</style>