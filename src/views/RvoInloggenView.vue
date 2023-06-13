<script setup lang="ts">
import { Heading } from "@utrecht/component-library-vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo">
    <div class="rvo-header-content">
      <header class="rvo-header">
        <div class="rvo-header__logo-wrapper">
          <a href="/" class="rvo-header__logo-link"
            ><img
              src="../images/logo.svg"
              alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
              class="rvo-logo-img rvo-header__logo-img"
          /></a>
        </div>
      </header>
      <div class="rvo-topnav__background">
        <nav
          class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--sm"
        >
          <ul class="utrecht-topnav__list">
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#">Mijn RVO</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-hero rvo-hero--man-met-laptop">
        <div class="rvo-hero-bg-img-container">
          <img
            src="../images/hero-bg--vrouw-met-mobiel.webp"
            class="rvo-hero-bg-img"
          />
        </div>
        <div class="rvo-max-width-layout rvo-max-width-layout--sm">
          <div class="rvo-hero-content">
            <div class="rvo-hero-text">
              <Heading :level="1">Inloggen</Heading>
              <p class="rvo-hero-description">
                Hieronder vindt u de verschillende manieren om in te loggen op
                Mijn RVO
              </p>
            </div>
            <div class="rvo-hero-img-container">
              <img src="../images/vrouw_op_mobiel.webp" class="rvo-hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="rvo-max-width-layout rvo-max-width-layout--sm">
        <main class="rvo-main rvo-main--inloggen">
          <div class="rvo-layout-column rvo-layout-gap--sm">
            <div class="rvo-accordion rvo-login-options">
              <details
                class="rvo-accordion__item rvo-login-option login-option--e-herkenning"
              >
                <summary class="rvo-accordion__item-summary">
                  <Heading :level="3" class="rvo-link">
                    <span class="rvo-accordion__item-title"
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      >Voor ondernemers en gemeentes met e-Herkenning
                      <img
                        src="../images/e-herkenning-logo.svg"
                        class="rvo-login-option-img rvo-login-option-img--e-herkenning"
                    /></span>
                  </Heading>
                </summary>
                <div class="rvo-accordion__content">
                  <p>
                    U bent <strong>ondernemer</strong> en ingeschreven bij KVK.
                    Of u logt in namens een <strong>gemeente</strong>.
                  </p>
                  <p>
                    Meer informatie leest u op onze pagina
                    <a href="#" class="rvo-link">Zaken regelen bij RVO</a> .
                    Lukt het inloggen niet? Ga naar
                    <a href="#" class="rvo-link">Hulp bij inloggen</a>.
                  </p>
                  <p>Kies het niveau van het middel waarmee u wilt inloggen.</p>
                  <p>
                    <RouterLink
                      class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      to="rvomijnzaken"
                      >Inloggen met e-Herkenning 2</RouterLink
                    ><br /><br /><RouterLink
                      class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      to="rvomijnzaken"
                      >Inloggen met e-Herkenning 3</RouterLink
                    >
                  </p>
                </div>
              </details>
              <details
                class="rvo-accordion__item rvo-login-option login-option--digid"
              >
                <summary class="rvo-accordion__item-summary">
                  <Heading :level="3" class="rvo-link">
                    <span class="rvo-accordion__item-title"
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      >Voor particulieren met DigiD
                      <img
                        src="../images/digid-logo.svg"
                        class="rvo-login-option-img rvo-login-option-img--digid"
                    /></span>
                  </Heading>
                </summary>
                <div class="rvo-accordion__content">
                  <p>
                    U bent <strong>particulier</strong> en heeft een
                    Burgerservicenummer (BSN). Log in met DigiD. Meer informatie
                    leest u op de website van
                    <a href="#" class="rvo-link">DigiD</a>
                  </p>
                  <RouterLink
                    class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    to="rvomijnzaken"
                    >Inloggen met DigiD</RouterLink
                  >
                </div>
              </details>
              <details
                class="rvo-accordion__item rvo-login-option login-option--eu"
              >
                <summary class="rvo-accordion__item-summary">
                  <Heading :level="3" class="rvo-link">
                    <span class="rvo-accordion__item-title"
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      >Digital identity from another European country
                      <img
                        src="../images/eu-flag.svg"
                        class="rvo-login-option-img rvo-login-option-img--eu"
                    /></span>
                  </Heading>
                </summary>
                <div class="rvo-accordion__content">
                  <p>
                    Log in with a digital identity from another European
                    country.
                  </p>
                  <RouterLink
                    class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    to="rvomijnzaken"
                    >EU Login</RouterLink
                  >
                </div>
              </details>
              <details
                class="rvo-accordion__item rvo-login-option login-option--anders"
              >
                <summary class="rvo-accordion__item-summary">
                  <Heading :level="3" class="rvo-link">
                    <span class="rvo-accordion__item-title"
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      ><span
                        class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"
                      ></span
                      >Anders inloggen</span
                    >
                  </Heading>
                </summary>
                <div class="rvo-accordion__content">
                  <p>U heeft geen eHerkenning of DigiD.</p>
                  <RouterLink
                    class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    to="rvomijnzaken"
                    >Anders inloggen</RouterLink
                  >
                </div>
              </details>
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer class="rvo-footer">
      <div class="rvo-max-width-layout rvo-max-width-layout--lg">
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <Heading :level="3">Algemeen</Heading>
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
            <Heading :level="3">Hoe werkt</Heading>
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
            <Heading :level="3">Naar</Heading>
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
            <Heading :level="3">Contact</Heading>
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
