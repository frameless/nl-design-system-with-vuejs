<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Link } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo">
    <div class="rvo-header-content">
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
      <div class="rvo-topnav__background">
        <nav
          class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--sm"
        >
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
              <Link class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-publicatie rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Publicatie"
                ></span
                >Mijn aanvragen</Link
              >
            </li>
            <li class="utrecht-topnav__item">
              <Link class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Plus"
                ></span
                >Nieuwe aanvraag</Link
              >
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              < class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-versleutelen rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Versleutelen"
                ></span
                >Uitloggen</
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-max-width-layout rvo-max-width-layout--sm">
        <main class="rvo-main">
          <div class="rvo-layout-column rvo-layout-gap--sm">
            <Heading :level="1" class="utrecht-heading-1"
              >Telefonisch contact</Heading
            >
            <Paragraph>
              Heeft u vragen? Neem gerust telefonisch contact met ons op. U
              bereikt ons op werkdagen van 08:30 tot 17:00 uur. Tussen 8:30 en
              12:00 uur en tussen 14:00 en 17:00 uur zijn de wachttijden het
              kortst.
            </Paragraph>
            <Heading :level="2">Keuzemenu's</Heading>
            <div class="rvo-layout-column rvo-layout-gap--xl">
              <div
                class="rvo-accordion rvo-accordion--colored rvo-accordion--border-indicator"
              >
                <details class="rvo-accordion__item">
                  <summary class="rvo-accordion__item-summary">
                    <Heading :level="3" class="rvo-link">
                      <span class="rvo-accordion__item-title"
                        ><span
                          class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"
                        ></span
                        ><span
                          class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"
                        ></span
                        >Keuzemenu 088 042 42 42</span
                      >
                    </Heading>
                    <span class="rvo-accordion-teaser"
                      >Voor bedrijven, instellingen en overheden</span
                    >
                  </summary>
                  <div class="rvo-accordion__content">
                    <Paragraph>
                      Belt u namens een bedrijf, instelling of
                      overheidsorganisatie? Via het keuzemenu krijgt u de juiste
                      medewerker aan de lijn om u verder te helpen.
                    </Paragraph>
                    <Heading :level="4" class="utrecht-heading-4"
                      >For English, press 8</Heading
                    >
                    <br />
                    <Heading :level="4">
                      Keuze 0: voor BGT-check, sancties Rusland, de
                      simulatietool van het nieuwe GLB en de SVV
                    </Heading>
                    <Paragraph>
                      0 - 1: vragen over BGT check<br />0 - 2: vragen over
                      sancties Rusland <br />0 - 3: vragen over de simulatietool
                      ECO-regeling nieuwe Gemeenschappelijk Landbouwbeleid (GLB)
                      <br />0 - 4: vragen over de Subsidie Saneren van
                      Vissersvaartuigen (SVV)
                    </Paragraph>
                    <Header :level="4" class="utrecht-heading-4">
                      Keuze 1: dieren, spuitlicenties, landbouw, natuur en
                      visserij
                    </Header>
                    <Paragraph>
                      1 - 1: openbaarmaking van fosfaatrechten, vervoer en
                      uitrijden van mest, productierechten, gebruiksnormen en
                      andere mestregelingen <br />1 - 2: dierregistratie,
                      dierenwelzijn en andere dierregelingen<br />1 - 2 - 1:
                      handel in bedreigde planten en diersoorten (CITES)<br />1
                      - 2 - 2: dierregistratie, dierenwelzijn en andere
                      dierregelingen <br />1 - 3: spuitlicenties,
                      betalingsrechten, GLB en grondregistratie <br />1 - 4:
                      alle andere onderwerpen voor landbouw, natuur en visserij
                      Keuze
                    </Paragraph>
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
                        >Keuzemenu 088 042 47 47</span
                      >
                    </Heading>
                    <span class="rvo-accordion-teaser"
                      >Voor particulieren, woningeigenaren</span
                    >
                  </summary>
                  <div class="rvo-accordion__content">
                    <Paragraph>
                      Bent u particulier? Via het keuzemenu krijgt u de juiste
                      medewerker aan de telefoon om u verder te helpen.
                    </Paragraph>
                    <Heading :level="4" class="utrecht-heading-4">
                      Keuze 1: subsidies en andere regelgeving op het gebied van
                      duurzaamheid, energie, of wonen
                    </Heading>
                    <Paragraph>
                      1 - 1: Energielabel voor woningeigenaren <br />1 - 2:
                      ISDE, Isolatie, Warmtepompen, Zonneboilers en aansluiting
                      op warmtenet <br />1 - 3: elektrisch Rijden <br />1 - 4:
                      SVOH
                    </Paragraph>
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
                        >Keuzemenu 088 042 25 00</span
                      >
                    </Heading>
                    <span class="rvo-accordion-teaser">COVID-19</span>
                  </summary>
                  <div class="rvo-accordion__content">
                    <Paragraph>
                      Belt u over de TVL of een andere COVID-19-regeling? Via
                      het keuzemenu krijgt u de juiste medewerker aan de
                      telefoon om u verder te helpen.
                    </Paragraph>
                    <Heading :level="4" class="utrecht-heading-4">
                      Keuze 1: Tegemoetkoming Vaste Lasten (TVL)
                    </Heading>
                    <br />
                    <Heading :level="4">
                      Keuze 2: Subsidieregeling Evenementen (ATE)
                    </Heading>
                    <br />
                    <Heading :level="4">
                      Keuze 3: Ongedekte Vaste Kosten (OVK)
                    </Heading>
                    <br />
                    <Heading :level="4">
                      Keuze 4: Tijdelijke Subsidieregeling Vuurwerkverbod
                      COVID-19 (TSVC-19)
                    </Heading>
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
                        >Keuzemenu 088 042 4070</span
                      >
                    </Heading>
                    <span class="rvo-accordion-teaser">Waterschade (WTS)</span>
                  </summary>
                  <div class="rvo-accordion__content">
                    <Paragraph>
                      Belt u over de WTS? Via het keuzemenu krijgt u de juiste
                      medewerker aan de telefoon om u verder te helpen.
                    </Paragraph>
                    <Heading :level="4">
                      Keuze 1: WTS juli 2021 en tegemoetkoming omzetschade
                      Limburg en Noord-Brabant
                    </Heading>
                    <br />
                    <Heading :level="4">
                      Keuze 2: Tegemoetkoming teeltplanschade Uiterwaarden juli
                      2021
                    </Heading>
                  </div>
                </details>
              </div>
              <Heading :level="2">Met u meekijken</Heading>
            </div>
            <Paragraph>
              Met u meekijken Als het nodig is, kan onze medewerker met u
              meekijken op uw scherm. Dit gaat in overleg met u. Wij zien alleen
              het scherm dat u ook ziet. Wij nemen niet uw computer over.
            </Paragraph>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
