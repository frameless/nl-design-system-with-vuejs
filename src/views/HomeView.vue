<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue"
</script>

<template>
  <main>
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
        <details class="rvo-responsive-menu">
          <summary>
            <span
              class="utrecht-icon rvo-icon rvo-icon-menu rvo-icon--lg rvo-icon--wit"
            ></span
            ><span
              class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--lg rvo-icon--wit"
            ></span
            >Menu
          </summary>
          <div class="rvo-topnav__background">
            <nav
              class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--md"
            >
              <ul class="utrecht-topnav__list">
                <li class="utrecht-topnav__item">
                  <a
                    class="utrecht-topnav__link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                    >Zaken</a
                  >
                </li>
                <li class="utrecht-topnav__item">
                  <a
                    class="utrecht-topnav__link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--diensten&amp;viewMode=story"
                    >Diensten</a
                  >
                </li>
                <li class="utrecht-topnav__item">
                  <a class="utrecht-topnav__link" href="#">Help</a>
                </li>
                <li class="utrecht-topnav__item">
                  <a
                    class="utrecht-topnav__link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--profiel&amp;viewMode=story"
                    >Profiel</a
                  >
                </li>
                <li
                  class="utrecht-topnav__item utrecht-topnav__item--align-right"
                >
                  <a
                    class="utrecht-topnav__link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                    >Uitloggen</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </details>
        <div class="rvo-topnav__background">
          <nav
            class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--md"
          >
            <ul class="utrecht-topnav__list">
              <li class="utrecht-topnav__item utrecht-topnav__item--active">
                <a class="utrecht-topnav__link" href="#">Home</a>
              </li>
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#">Onderwerpen</a>
              </li>
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#"
                  >Subsidie- en financieringswijzer</a
                >
              </li>
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#">Over ons</a>
              </li>
              <li
                class="utrecht-topnav__item utrecht-topnav__item--align-right"
              >
                <a class="utrecht-topnav__link" href="#"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-zoek rvo-icon--lg rvo-icon--wit"
                    role="img"
                    aria-label="Zoek"
                  ></span
                  >Zoeken</a
                >
              </li>
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--lg rvo-icon--wit"
                    role="img"
                    aria-label="User"
                  ></span
                  >Mijn RVO</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="rvo-hero rvo-hero--man-met-laptop">
          <div class="rvo-hero-bg-img-container">
            <img
              src="../images/hero-bg--man-met-laptop.webp"
              class="rvo-hero-bg-img"
            />
          </div>
          <div class="rvo-max-width-layout rvo-max-width-layout--md">
            <div class="rvo-hero-content">
              <div class="rvo-hero-text">
                <h1 class="utrecht-heading-1">
                  Rijksdienst voor Ondernemend Nederland
                </h1>
                <Paragraph class="rvo-hero-description">
                  Onze mensen maken wereldwijd verbinding. Tussen bedrijven,
                  kennis- en financiële instellingen, ambassades en lokale
                  overheden.
                </Paragraph>
              </div>
              <div class="rvo-hero-img-container">
                <img src="../images/man-met-laptop.webp" class="rvo-hero-img" />
              </div>
            </div>
          </div>
        </div>
        <main class="rvo-main--mijn-zaken"></main>
      </div>
    </div>
  </main>
</template>
