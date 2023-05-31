<script setup lang="ts">
import { Paragraph, PageHeader } from "@utrecht/component-library-vue"
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo">
    <div class="rvo-header-content">
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
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-wereldbol rvo-icon--lg rvo-icon--wit"
                    role="img"
                    aria-label="Wereldbol"
                  ></span
                  >English</a
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
            <li class="utrecht-topnav__item utrecht-topnav__item--active">
              <a
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--profiel&amp;viewMode=story"
                >Profiel</a
              >
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              <a
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                >Uitloggen</a
              >
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-wereldbol rvo-icon--lg rvo-icon--wit"
                  role="img"
                  aria-label="Wereldbol"
                ></span
                >English</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-hero rvo-hero--man-met-laptop">
        <div class="rvo-hero-bg-img-container">
          <img
            src="../images/hero-bg--vrouw-met-laptop.webp"
            class="rvo-hero-bg-img"
          />
        </div>
        <div class="rvo-max-width-layout rvo-max-width-layout--md">
          <div class="rvo-hero-content">
            <div class="rvo-hero-text">
              <h1 class="utrecht-heading-1">Mijn profiel</h1>
              <Paragraph class="rvo-hero-description">
                Hier vindt u een overzicht van uw gegevens en machtigingen zoals
                deze bij ons bekend zijn.
              </Paragraph>
            </div>
            <div class="rvo-hero-img-container">
              <img src="../images/vrouw-met-laptop.webp" class="rvo-hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="rvo-max-width-layout rvo-max-width-layout--md">
        <main class="rvo-main rvo-main--profiel">
          <div class="rvo-main-content">
            <div class="rvo-layout-column rvo-layout-gap--2xl">
              <div class="rvo-layout-column rvo-layout-gap--md">
                <h2 class="utrecht-heading-2">Mijn gegevens</h2>
                <div class="rvo-layout-column rvo-layout-gap--2xs">
                  <dl class="rvo-data-list">
                    <dt>Adres</dt>
                    <dd>
                      Prinses Beatrixlaan 2<br />
                      2595AL s-GRAVENHAGE
                    </dd>
                    <dt>Postbus</dt>
                    <dd>
                      40217<br />
                      8004DE Zwolle
                    </dd>
                    <dt>KVK-nr.</dt>
                    <dd>27378529</dd>
                    <dt>Relatienummer</dt>
                    <dd>203465993</dd>
                    <dt>Telefoon</dt>
                    <dd>033 - 9858 857</dd>
                    <dt>Mobiel</dt>
                    <dd>06 - 7584 7463</dd>
                    <dt>E-mail</dt>
                    <dd>info@rvo.nl</dd>
                    <dt>Rekeningnummer</dt>
                    <dd>NL41INGB0705001490</dd>
                  </dl>
                  <a
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-bewerken rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="Bewerken"
                    ></span
                    >Gegevens bewerken</a
                  >
                </div>
              </div>
            </div>
          </div>
          <aside class="rvo-sidebar">
            <div class="rvo-machtigingen">
              <h2 class="utrecht-heading-2">Wie heb ik gemachtigd?</h2>
              <div class="rvo-machtigingen-item">
                <div class="rvo-machtigingen-title">
                  <a
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="User"
                    ></span
                    >G.G.L. Luijten</a
                  ><button
                    class="utrecht-button utrecht-button--subtle utrecht-button--warning rvo-layout-row rvo-layout-gap--xs utrecht-button--rvo-xs"
                    type="button"
                  >
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--md"
                    ></span
                    >Intrekken
                  </button>
                </div>
                <div class="rvo-machtigingen-description">
                  Voor alle diensten in Mijn machtigingen(volmacht)
                </div>
                <div class="rvo-machtigingen-date">
                  vanaf 14-02-2022 tot 13-02-2023
                </div>
              </div>
              <div class="rvo-machtigingen-item">
                <div class="rvo-machtigingen-title">
                  <a
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="User"
                    ></span
                    >Maatschap A.F. Nijboer en L. van der Lei</a
                  ><button
                    class="utrecht-button utrecht-button--subtle utrecht-button--warning utrecht-button--rvo-xs"
                    type="button"
                  >
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--xs rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Verwijderen"
                    ></span
                    >Intrekken
                  </button>
                </div>
                <div class="rvo-machtigingen-description">
                  VDM gegevens leveren aan
                </div>
                <div class="rvo-machtigingen-date">vanaf 14-02-2017</div>
              </div>
            </div>
            <div class="rvo-machtigingen">
              <h2 class="utrecht-heading-2">Wie heeft mij gemachtigd?</h2>
              <div class="rvo-machtigingen-item">
                <div class="rvo-machtigingen-title">
                  <a
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="User"
                    ></span
                    >ACME</a
                  ><button
                    class="utrecht-button utrecht-button--subtle utrecht-button--warning utrecht-button--rvo-xs"
                    type="button"
                  >
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--xs rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Verwijderen"
                    ></span
                    >Intrekken
                  </button>
                </div>
                <div class="rvo-machtigingen-description">
                  Natuurbeheer (agrarisch) SNL
                </div>
                <div class="rvo-machtigingen-date">vanaf 16-11-2021</div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
    <footer class="rvo-footer">
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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
