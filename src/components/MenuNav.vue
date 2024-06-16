<template>
    <nav class="menu-nav">
      <h3 class="menu-nav__title">Categorias por espécie:</h3>
      <ul class="menu-nav__list">
        <li class="menu-nav__item"><a class="menu-nav__link" href="">Cachorro</a></li>
        <li class="menu-nav__item"><a class="menu-nav__link" href="">Gato</a></li>
        <li class="menu-nav__item"><a class="menu-nav__link" href="">Aves</a></li>
        <li class="menu-nav__item"><a class="menu-nav__link" href="">Peixes</a></li>
        <li class="menu-nav__item"><a class="menu-nav__link" href="">Roedores</a></li>
        <li class="menu-nav__item"><a class="menu-nav__link" href="">Répteis</a></li>
      </ul>
    </nav>
</template>

<style scoped>
.menu-nav{
  background-color: #778472;
}

.menu-nav__title{
  margin: 0;
  color: #f1f1f1;
  font-size: 1.3rem;
  padding: 15px 4vw 0;
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

@media (min-width: 768px) {
    .menu-nav__title{
    text-align: center;
    text-decoration: underline;
    font-size: 2.5rem;
  }

  .menu-nav__link{
    font-size: 1.8rem;
  }
}
</style>