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
        <RouterLink to="/windowProfileIntro">WindowProfileIntro</RouterLink>
        <RouterLink to="/windowSplash">WindowSplash</RouterLink>
        <RouterLink to="/windowSearch">WindowSearch</RouterLink>
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
        <RouterLink to="/wbsoaanvrager">WBSO Aanvrager</RouterLink>
        <RouterLink to="/wbsoprestart">WBSO Voordat u start</RouterLink>
        <RouterLink to="/wbsovormvrijeaanvraag"
          >WBSO Vormvrije aanvraag</RouterLink
        >
      </nav>
    </div>
  </header>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo">
    <RouterView class="rvo-theme" />
    <footer class="rvo-footer rvo-theme">
      <div class="rvo-max-width-layout rvo-max-width-layout--lg">
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <h3 class="utrecht-heading-3">Algemeen</h3>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Help</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Toegankelijkheid</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Webservices</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Privacy</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Sitemap</a>
          </li>
        </ul>
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <h3 class="utrecht-heading-3">Hoe werkt</h3>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Machtigingen en TAN-codes</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Zaken regelen bij RVO</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Inschrijven en registreren</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Bedrijfsoverdracht melden</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Overlijden melden</a>
          </li>
        </ul>
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <h3 class="utrecht-heading-3">Naar</h3>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Abonneren op nieuwsbrief</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Klantenpanel</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Berichtenbox voor bedrijven</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">RVO.nl</a>
          </li>
        </ul>
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <h3 class="utrecht-heading-3">Contact</h3>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Contactgegevens</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Contactformulier</a>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><a href="#" class="rvo-link">Aanvraag voorlichting/spreker</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
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
