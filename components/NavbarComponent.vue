/* v8 ignore start */
<template>
  <nav>
    <ul class="navbar-menu">
      <li>
        <nuxt-link to="/" :class="{'is-active': $route.path === '/'}" class="navbar-item">Accueil</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pageone" :class="{'is-active': $route.path === '/pageone'}" class="navbar-item">Page 1</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pagetwo" :class="{'is-active': $route.path === '/pagetwo'}" class="navbar-item">Page 2</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pagethree" :class="{'is-active': $route.path === '/pagethree'}" class="navbar-item">Page 3</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pagefour" :class="{'is-active': $route.path === '/pagefour'}" class="navbar-item">Page 4</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pagefive" :class="{'is-active': $route.path === '/pagefive'}" class="navbar-item">Page 5</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pagesix" :class="{'is-active': $route.path === '/pagesix'}" class="navbar-item">Page 6</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
  nav {
    background-color: var(--navbar-footer-color);

    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 5rem;
    list-style: none;
  }

  a {
    color: rgb(0, 0, 0);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .is-active {
    font-weight: bold;
  }

  @media(max-width: 871px){
    .navbar-menu{
      gap: 0.5rem;
    }

    .navbar-item{
      margin-right: 1rem;
    }
  }

  @media (max-width: 760px) {
    .navbar-menu {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .navbar-item {
        margin-right: 0;
        margin-bottom: 1rem;
    }
}
</style>
/* v8 ignore end */