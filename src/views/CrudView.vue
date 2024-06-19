<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

import { useRouter } from 'vue-router';

const router = useRouter();

const handleCadastrar = () => {
    router.push({name: 'cadastrar'})
}

const handleRemover = () => {
    router.push({name: 'remover'})
}

const handleAtualizar = () => {
    router.push({name: 'atualizar'})
}
</script>

<template>
    <Header/>
    <section class="menu">
        <h2 class="menu__crud__subtitle">Escolha qual operação deseja realizar: </h2>
        <ul class="menu-nav__list crud__menu">
            <li class="menu-nav__item"><button class="menu-nav__link crud-menu-item" @click="handleCadastrar">Cadastrar</button></li>
            <li class="menu-nav__item"><button class="menu-nav__link crud-menu-item" @click="handleAtualizar">Atualizar</button></li>
            <li class="menu-nav__item"><button class="menu-nav__link crud-menu-item" @click="handleRemover">Remover</button></li>
          </ul>
    </section>
    <Footer/>
</template>

<style scoped>
.menu{
  background-color: #f1f1f1;
  padding-bottom: 40px;
  padding: 10vh 0;
}

.menu-nav__list{
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding: 10px 0;
  margin: 0;
}

.menu-nav__item{
  width: 100%;
  text-align: center;
  margin: 0 1vw;
}

.menu-nav__link{
  display: block;
  text-decoration: none;
  font-size: 1.2rem;
  color: #f1f1f1;
  cursor: pointer;
  width: 100%;
}

.menu-nav__link:hover{
  text-decoration: underline;
}

.crud-menu-item{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 768px) {
    .menu{
        height: 55vh;
        padding: 10vh 5vw;
  }

  .menu__crud__subtitle{
    text-align: center;
    font-size: 3.5rem;
    font-weight: 500;
  }

  .crud__menu{
    margin: 6% 0;
  }

  .menu-nav__link{
    font-size: 1.8rem;
  }

  .crud-menu-item{
    font-size: 3rem;
    background-color: #444343;
    height: 8vh;
    border-radius: 10px;
    padding-top: 3.5%;
  }
}
</style>
