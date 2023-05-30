<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/accordion">Accordion</RouterLink>
        <RouterLink to="/alert">Alert</RouterLink>
        <RouterLink to="/breadcrumbs">BreadCrumbs</RouterLink>
        <RouterLink to="/content">Content</RouterLink>
        <RouterLink to="/filterEnergy">FilterEnergy</RouterLink>
        <RouterLink to="/filterAdvise">FilterAdvise</RouterLink>
        <RouterLink to="/form">Form</RouterLink>
        <RouterLink to="/hero">Hero</RouterLink>
        <RouterLink to="/logoGrid">LogoGrid</RouterLink>
        <RouterLink to="/searchMenu">SearchMenu</RouterLink>
        <RouterLink to="/subMenu">SubMenu</RouterLink>
        <RouterLink to="/subMenuGrid">SubMenuGrid</RouterLink>
        <RouterLink to="/Table">Table</RouterLink>
        <RouterLink to="/windowAcord">WindowAcord</RouterLink>
        <RouterLink to="/windowSafe">WindowSafe</RouterLink>
        <RouterLink to="/windowMaatregel">WindowMaatregel</RouterLink>
        <RouterLink to="/windowMaatregelen">WindowMaatregelen</RouterLink>
        <RouterLink to="/windowProfile">WindowProfile</RouterLink>
        <RouterLink to="/rvoprofiel">RVO Profiel</RouterLink>
        <RouterLink to="/rvozaakview">RVO Zaak</RouterLink>
        <RouterLink to="/rvomijnzaken">RVO Mijn Zaken</RouterLink>
        <RouterLink to="/rvoinloggen">RVO Inloggen</RouterLink>
        <RouterLink to="/rvodiensten">RVO Diensten</RouterLink>
        <RouterLink to="/jvbevestiging">JV Bevestiging</RouterLink>
        <RouterLink to="/jvbijlagen">JV Bijlagen</RouterLink>
        <RouterLink to="/jvcontroleergegevens"
          >JV Controleer uw gegevens</RouterLink
        >
        <RouterLink to="/jvcorrespondentie">JV Correspondentie</RouterLink>
        <RouterLink to="/jvdatum">JV Datum</RouterLink>
        <RouterLink to="/jvkosten">JV Kosten</RouterLink>
        <RouterLink to="/jvkostenopvoeren">JV Kosten Opvoeren</RouterLink>
        <RouterLink to="/jvondertekening">JV Ondertekening</RouterLink>
        <RouterLink to="/jvproject">JV Project</RouterLink>
        <RouterLink to="/jvsamenvatting">JV Samenvatting</RouterLink>
        <RouterLink to="/nieuwerijkshuisstijl"
          >Nieuwe Rijkshuisstijl</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView class="rvo-theme" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
