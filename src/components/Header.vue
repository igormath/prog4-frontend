<template>
    <header class="header">
        <div class="header__container">
            <img class="header__logo" src="../assets/icons/pata.png" alt="Ícone KI Petshop">
            <h1 class="title pseudo__link" @click="handleHome">KI PetShop</h1>
            <div class="header__container-icons">
                <img class="header__profile-icon" src="../assets/icons/user-3-svgrepo-com.svg" alt="Ícone Perfil">
                <img class="header__cart-icon" src="../assets/icons/carrinho-de-compras.png" alt="Ícone carrinho de compras">
                <p v-if="productQuant" class="cart__number">{{ props.productQuant }}</p>
                <p v-else class="cart__number">0</p>
            </div>
        </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(['productQuant']);

const handleHome = () => {
  router.push({ name: 'home' });
};

</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #C2E1C2;
}

.header__container {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.title {
  font-size: 4rem;
  color: #2ea828;
  margin: 0;
  font-weight: bolder;
}

.header__logo{
  width: 10%;
}

.header__container-icons{
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around; */
  position: relative;
}

.cart__number{
  position: absolute;
  top: 30px; /* Ajuste a posição vertical conforme necessário */
  right: 0.5vw;
  color: #2ea828; /* Cor do texto */
  padding: 5px; /* Espaçamento interno */
  font-size: 1.5rem; /* Tamanho da fonte */
}

.header__cart-icon, .header__profile-icon{
  width: 7vw;
  margin: 0 2vw;
  cursor: pointer;
}

.header__profile-icon{
  filter: invert(44%) sepia(89%) saturate(519%) hue-rotate(71deg) brightness(99%) contrast(84%);
}

.title-redirect{
  text-decoration: none;
}

.pseudo__link{
  cursor: pointer;
}

@media (min-width: 768px) {
  .header{
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 20vh;
  }

  .header__container{
    width: 100%;
  }

  .title{
    font-size: 10rem;
  }

  .header__logo{
    width: 7vw;
  }

  .header__profile-icon, .header__cart-icon{
    width: 3vw;
  }

  .cart__number{
  top: 40px; /* Ajuste a posição vertical conforme necessário */
  right: 1vw;
  font-size: 3rem; /* Tamanho da fonte */
}
}
</style>