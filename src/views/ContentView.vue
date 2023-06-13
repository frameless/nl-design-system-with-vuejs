<script setup lang="ts">
import { Heading, Link } from "@utrecht/component-library-vue";
</script>
<template>
  <div class="rvo-demo-page">
    <header class="rvo-header">
      <div class="rvo-header__logo-wrapper">
        <Link href="/" class="rvo-header__logo-link"
          ><img
            src="../images/logo.svg"
            alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
            class="rvo-logo-img rvo-header__logo-img"
        /></Link>
      </div>
    </header>
    <div class="rvo-layout-column rvo-layout-gap--md">
      <div class="rvo-topnav__background">
        <nav class="rvo-topnav rvo-topnav--md">
          <ul class="utrecht-topnav__list">
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-home rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Home"
                ></span
                >Home</a
              >
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-publicatie rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Publicatie"
                ></span
                >Mijn aanvragen</a
              >
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Plus"
                ></span
                >Nieuwe aanvraag</a
              >
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-versleutelen rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Versleutelen"
                ></span
                >Uitloggen</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <main class="rvo-max-width-layout rvo-max-width-layout--sm">
        <div class="rvo-content">
          <Heading :level="1">Heading 1</Heading>
          <p class="rvo-paragraph rvo-paragraph--lg">
            <strong>Paragraph large.</strong> De overheid zet zich in voor een
            uitstekend ondernemersklimaat. De ministeries stippelen daar beleid
            voor uit. En de taak om dit uit te voeren ligt bij RVO: de
            Rijksdienst voor Ondernemend Nederland. Onze mensen maken wereldwijd
            verbinding.
            <Link href="#" class="rvo-link">Dit is een link. </Link>&nbsp;Tussen
            bedrijven, kennis- en financiële instellingen, ambassades en lokale
            overheden.
          </p>
          <Heading :level="2">Heading 2</Heading>
          <p class="rvo-paragraph rvo-paragraph--md">
            <strong>Paragraph medium.</strong> De overheid zet zich in voor een
            uitstekend ondernemersklimaat. De ministeries stippelen daar beleid
            voor uit. En de taak om dit uit te voeren ligt bij RVO: de
            Rijksdienst voor Ondernemend Nederland. Onze mensen maken wereldwijd
            verbinding.
            <Link href="#" class="rvo-link">Dit is een link. </Link>&nbsp;Tussen
            bedrijven, kennis- en financiële instellingen, ambassades en lokale
            overheden.
          </p>
          <Heading :level="3">Heading 3</Heading>
          <p class="rvo-paragraph rvo-paragraph--sm">
            <strong>Paragraph small.</strong> De overheid zet zich in voor een
            uitstekend ondernemersklimaat. De ministeries stippelen daar beleid
            voor uit. En de taak om dit uit te voeren ligt bij RVO: de
            Rijksdienst voor Ondernemend Nederland. Onze mensen maken wereldwijd
            verbinding.
            <Link href="#" class="rvo-link">Dit is een link. </Link>&nbsp;Tussen
            bedrijven, kennis- en financiële instellingen, ambassades en lokale
            overheden.
          </p>
          <ul class="rvo-list rvo-list--unordered">
            <li class="rvo-list-item">Unordered list</li>
            <li class="rvo-list-item">Second item</li>
            <li class="rvo-list-item">Third item</li>
          </ul>
          <ol class="rvo-list rvo-list--ordered">
            <li class="rvo-list-item">Ordered list</li>
            <li class="rvo-list-item">Second item</li>
            <li class="rvo-list-item">Third item</li>
          </ol>
          <blockquote class="rvo-blockquote">
            <strong>Dit is een blockquote.</strong> De overheid zet zich in voor
            een uitstekend ondernemersklimaat. De ministeries stippelen daar
            beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de
            Rijksdienst voor Ondernemend Nederland.
          </blockquote>
        </div>
      </main>
    </div>
  </div>
</template>
