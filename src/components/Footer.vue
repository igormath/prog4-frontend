<template>
    <footer class="footer">
    <nav class="footer__nav">
      <h3 class="footer__subtitle">Mapa do site</h3>
      <ul class="footer__nav-list">
        <li class="footer__nav-item footer__nav-link">Sobre</li>
        <li class="footer__nav-item footer__nav-link">Central de atendimento</li>
        <li class="footer__nav-item footer__nav-link">FAQ</li>
        <li class="footer__nav-item footer__nav-link pseudo__link" @click="handleCrud">CRUD</li>
      </ul>
    </nav>
    <div class="footer__payments">
      <h3 class="footer__subtitle">Formas de Pagamento</h3>
      <ul class="footer__payment-list">
        <li class="footer__payment-item"><img class="footer__payment-icon" src="../assets/icons/icons8-foto-96.png" alt="Ícone pix"></li>
        <li class="footer__payment-item"><img class="footer__payment-icon" src="../assets/icons/icons8-cartão-96.png" alt="Ícone cartão"></li>
        <li class="footer__payment-item"><img class="footer__payment-icon" src="../assets/icons/icons8-boleto-64.png" alt="Ícone boleto"></li>
      </ul>
    </div>
    <div class="footer__socials">
      <h3 class="footer__subtitle">Redes Sociais</h3>
      <ul class="footer__social-list">
        <li class="footer__social-item"><img class="footer__social-icon" src="../assets/icons/icons8-whatsapp-96.png" alt="Ícone WhatsApp"></li>
        <li class="footer__social-item"><img class="footer__social-icon" src="../assets/icons/icons8-instagram-96.png" alt="Ícone Instagram"></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleCrud = () => {
  router.push({name: 'crud'});
}
</script>

<style scoped>
.footer{
  background-color: #778472;
  text-align: center;
  color: #f1f1f1;
  font-size: 0.8rem;
  padding: 10px;
}

.footer__subtitle{
  font-size: 1.5rem;
  font-weight: bold;
}

.footer__nav-list, .footer__payment-list, .footer__social-list{
  margin: 25px 0;
  padding: 0;
}

.footer__nav-item{
  list-style: none;
  margin: 1vh 0;
}

.footer__nav-link{
  text-decoration: none;
  color: #f1f1f1;
  font-size: 1.2rem;
  cursor: pointer;
}

.footer__nav-link:hover{
  text-decoration: underline;
}

.footer__payment-list, .footer__social-list{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 10vw;
}

.footer__payment-item, .footer__social-item{
  list-style: none;
}

.footer__payment-icon, .footer__social-icon{
  width: 10vw;
  cursor: pointer;
}

.pseudo__link{
  cursor: pointer;
}

@media (min-width: 768px) {
    .footer{
    display: flex;
    justify-content: space-evenly;
    padding: 3vh 0;
  }

  .footer__payments, .footer__socials{
    width: 20%;
  }

  .footer__subtitle{
    margin-bottom: 4vh;
    font-size: 2.5rem;
  }

  .footer__nav-link{
    font-size: 1.8rem;
  }

  .footer__nav-list, .footer__payment-list, .footer__social-list{
    margin: 0;
    padding: 0;
  }

  .footer__payment-icon, .footer__social-icon{
    width: 3vw;
  }

  .footer__social-icon:hover{
    border: 1px solid #fff;
    border-radius: 10px;
  }
}
</style>