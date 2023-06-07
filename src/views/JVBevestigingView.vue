<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { PageHeader } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page">
    <PageHeader class="rvo-header">
      <div class="rvo-header__logo-wrapper">
        <a href="/" class="rvo-header__logo-link"
          ><img
            src="../images/logo.svg"
            alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
            class="rvo-logo-img rvo-header__logo-img"
        /></a>
      </div>
    </PageHeader>
    <div class="rvo-layout-column rvo-layout-gap--2xl">
      <div class="rvo-topnav__background">
        <nav
          class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--md"
        >
          <ul class="utrecht-topnav__list">
            <li class="utrecht-topnav__item">
              <a
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--lg rvo-icon--wit"
                  role="img"
                  aria-label="Terug"
                ></span
                >Terug naar Mijn RVO</a
              >
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              <a
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                >Uitloggen</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-max-width-layout rvo-max-width-layout--md">
        <main class="rvo-progress-tracker-active">
          <div class="rvo-progress-tracker">
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--start rvo-image-bg-progress-tracker-start-end-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              JV 2020
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--controleer-uw-gegevens&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Controleer uw gegevens</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--correspondentie&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Correspondentie</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--datum&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Datum verleningsverzoek</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--project&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Project vragen</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--kosten"
                class="rvo-link rvo-progress-tracker__step-link"
                >Kosten</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--bijlagen"
                class="rvo-link rvo-progress-tracker__step-link"
                >Bijlagen</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--samenvatting"
                class="rvo-link rvo-progress-tracker__step-link"
                >Samenvatting</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-demo-pagina-s-jonge-vissers--ondertekening&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Ondertekening</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end rvo-image-bg-progress-tracker-start-end-md--after"
            >
              Bevestiging
            </div>
          </div>
          <div class="rvo-form">
            <div class="rvo-layout-column rvo-layout-gap--xl">
              <div class="intro">
                <Heading :level="1">Bevestiging</Heading>
                <Paragraph>
                  Wij hebben uw aanvraag verlenging Jonge Visser 2020 ontvangen
                  op <strong>05-07-2022</strong>.<br />Het zaaknummer dat wij
                  hieraan hebben gegevens is <strong>192040000027</strong>.
                  Gebruik dit nummer als u met ons belt of digitale post wilt
                  versturen.
                </Paragraph>
                <Heading :level="2" class="utrecht-heading-2"
                  >Uw gegevens</Heading
                >
                <div class="rvo-layout-column rvo-layout-gap--md">
                  <dl class="rvo-data">
                    <dt>Naam</dt>
                    <dd>Albert Heijn B.V.</dd>
                    <dt>KVK Nummer</dt>
                    <dd>342346534634</dd>
                    <dt>Relatienummer</dt>
                    <dd>35012085</dd>
                  </dl>
                  <Paragraph>
                    U kunt deze ontvangstbevestiging inzien in Mijn dossier. U
                    kunt het document dan ook afdrukken of opslaan op uw
                    computer.
                  </Paragraph>
                </div>
                <Paragraph>
                  Een PDF kunt u openen met
                  <a href="#" class="rvo-link">Adobe Acrobat Reader</a>.
                </Paragraph>
                <Paragraph>
                  Heeft u nog vragen? Dan kunt u ons bellen op werkdagen tussen
                  8:30 en 17:00 uur op 088 042 42 42 (lokaal tarief)
                </Paragraph>
                <a href="#" class="rvo-link rvo-link--with-icon"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-downloaden rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                    role="img"
                    aria-label="Downloaden"
                  ></span
                  >Ontvangstbevestiging 192040000027</a
                >
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
