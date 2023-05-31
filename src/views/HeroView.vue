<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page">
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
        class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--lg"
      >
        <ul class="utrecht-topnav__list">
          <li class="utrecht-topnav__item">
            <a class="utrecht-topnav__link" href="#"
              ><span
                class="utrecht-icon rvo-icon rvo-icon-home rvo-icon--lg rvo-icon--wit"
                role="img"
                aria-label="Home"
              ></span
              >Home</a
            >
          </li>
          <li class="utrecht-topnav__item">
            <a class="utrecht-topnav__link" href="#"
              ><span
                class="utrecht-icon rvo-icon rvo-icon-publicatie rvo-icon--lg rvo-icon--wit"
                role="img"
                aria-label="Publicatie"
              ></span
              >Mijn aanvragen</a
            >
          </li>
          <li class="utrecht-topnav__item">
            <a class="utrecht-topnav__link" href="#"
              ><span
                class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--lg rvo-icon--wit"
                role="img"
                aria-label="Plus"
              ></span
              >Nieuwe aanvraag</a
            >
          </li>
          <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
            <a class="utrecht-topnav__link" href="#"
              ><span
                class="utrecht-icon rvo-icon rvo-icon-versleutelen rvo-icon--lg rvo-icon--wit"
                role="img"
                aria-label="Versleutelen"
              ></span
              >Uitloggen</a
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
      <div class="rvo-max-width-layout rvo-max-width-layout--lg">
        <div class="rvo-hero-content">
          <div class="rvo-hero-text">
            <h1 class="utrecht-heading-1">Hero title</h1>
            <Paragraph class="rvo-hero-description">
              An additional paragraph that gives an introduction what this page
              is about in easy to understand language.
            </Paragraph>
          </div>
          <div class="rvo-hero-img-container">
            <img src="../images/man-met-laptop.webp" class="rvo-hero-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="rvo-max-width-layout rvo-max-width-layout--md">
      <main></main>
    </div>
  </div>
</template>
