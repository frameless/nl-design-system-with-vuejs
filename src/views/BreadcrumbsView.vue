<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
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
      <div class="rvo-max-width-layout rvo-max-width-layout--md">
        <main>
          <div class="rvo-breadcrumbs">
            <ol class="rvo-breadcrumbs__list">
              <li class="rvo-breadcrumbs__list-item">
                <a class="rvo-link rvo-layout-row rvo-layout-gap--sm" href="#"
                  >First step</a
                >
              </li>
              <li class="rvo-breadcrumbs__list-item">
                <a class="rvo-link rvo-layout-row rvo-layout-gap--sm" href="#"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                    role="img"
                    aria-label="Delta naar rechts"
                  ></span
                  >Second step</a
                >
              </li>
              <li class="rvo-breadcrumbs__list-item">
                <a class="rvo-link rvo-layout-row rvo-layout-gap--sm" href="#"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                    role="img"
                    aria-label="Delta naar rechts"
                  ></span
                  >Third step</a
                >
              </li>
              <li class="rvo-breadcrumbs__list-item">
                <span
                  class="rvo-layout-row rvo-layout-gap--sm rvo-breadcrumb-current-page"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--xs rvo-icon--hemelblauw"
                    role="img"
                    aria-label="Delta naar rechts"
                  ></span
                  >Current page</span
                >
              </li>
            </ol>
          </div>
          <div class="rvo-content">
            <Heading :level="1" class="utrecht-heading-1"
              >Breadcrumbs example</Heading
            >
            <Paragraph class="rvo-paragraph rvo-paragraph--md">
              <strong>Paragraph medium.</strong> De overheid zet zich in voor
              een uitstekend ondernemersklimaat. De ministeries stippelen daar
              beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de
              Rijksdienst voor Ondernemend Nederland. Onze mensen maken
              wereldwijd verbinding.
              <a href="#" class="rvo-link">Dit is een link.</a>Tussen bedrijven,
              kennis- en financiële instellingen, ambassades en lokale
              overheden.
            </Paragraph>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
