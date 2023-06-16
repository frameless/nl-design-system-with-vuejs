<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { PageHeader } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Link } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo">
    <div class="rvo-header-content">
      <PageHeader class="rvo-header">
        <div class="rvo-header__logo-wrapper">
          <Link href="/" class="rvo-header__logo-link"
            ><img
              src="../images/logo.svg"
              alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
              class="rvo-logo-img rvo-header__logo-img"
          /></Link>
        </div>
      </PageHeader>
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
              <Paragraph class="rvo-hero-description">
                Hieronder vindt u de verschillende manieren om in te loggen op
                Mijn RVO
              </Paragraph>
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
                  <Paragraph>
                    U bent <strong>ondernemer</strong> en ingeschreven bij KVK.
                    Of u logt in namens een <strong>gemeente</strong>.
                  </Paragraph>
                  <Paragraph>
                    Meer informatie leest u op onze pagina
                    <Link href="#" class="rvo-link">Zaken regelen bij RVO</Link>
                    . Lukt het inloggen niet? Ga naar
                    <Link href="#" class="rvo-link">Hulp bij inloggen</Link>.
                  </Paragraph>
                  <Paragraph
                    >Kies het niveau van het middel waarmee u wilt
                    inloggen.</Paragraph
                  >
                  <Paragraph> </Paragraph>
                  <Paragraph
                    >Kies het niveau van het middel waarmee u wilt
                    inloggen.</Paragraph
                  >
                  <Paragraph>
                    <a
                      class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                      >Inloggen met e-Herkenning 2</a
                    ><br /><br /><a
                      class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                      >Inloggen met e-Herkenning 3</a
                    >
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
                      >Voor particulieren met DigiD
                      <img
                        src="../images/digid-logo.svg"
                        class="rvo-login-option-img rvo-login-option-img--digid"
                    /></span>
                  </Heading>
                </summary>
                <div class="rvo-accordion__content">
                  <Paragraph>
                    U bent <strong>particulier</strong> en heeft een
                    Burgerservicenummer (BSN). Log in met DigiD. Meer informatie
                    leest u op de website van
                    <Link href="#" class="rvo-link">DigiD</Link>
                  </Paragraph>
                  <a
                    class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                    >Inloggen met DigiD</a
                  >
                </div>
              </details>
              <details
                class="rvo-accordion__item rvo-login-option login-option--eu"
              >
                <summary class="rvo-accordion__item-summary">
                  <Heading :level="3">
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
                  <Paragraph>
                    Log in with a digital identity from another European
                    country.
                  </Paragraph>
                  <a
                    class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                    >EU Login</a
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
                  <Paragraph>U heeft geen eHerkenning of DigiD.</Paragraph>
                  <a
                    class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                    >Anders inloggen</a
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
            ><Link href="#" class="rvo-link">Help</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Toegankelijkheid</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Webservices</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Privacy</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Sitemap</Link>
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
            ><Link href="#" class="rvo-link">Machtigingen en TAN-codes</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Zaken regelen bij RVO</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Inschrijven en registreren</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Bedrijfsoverdracht melden</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Overlijden melden</Link>
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
            ><Link href="#" class="rvo-link">Abonneren op nieuwsbrief</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Klantenpanel</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Berichtenbox voor bedrijven</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">RVO.nl</Link>
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
            ><Link href="#" class="rvo-link">Contactgegevens</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Contactformulier</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link"
              >Aanvraag voorlichting/spreker</Link
            >
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
