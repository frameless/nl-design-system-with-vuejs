<script setup lang="ts">
import { Paragraph, PageHeader } from "@utrecht/component-library-vue";
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
            <li class="utrecht-topnav__item">
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
      <div class="rvo-max-width-layout rvo-max-width-layout--md">
        <main class="rvo-main rvo-main--zaak">
          <div class="rvo-main-content">
            <div class="rvo-layout-column rvo-layout-gap--2xl">
              <div class="rvo-layout-column rvo-layout-gap--md">
                <h1 class="utrecht-heading-1">
                  Jonge Vissers 2022<span class="rvo-case-number"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-map rvo-icon--lg rvo-icon--zwart"
                    ></span>
                    22933948</span
                  >
                </h1>
                <div class="rvo-alert rvo-alert--warning">
                  <span
                    class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--xl rvo-status-icon-waarschuwing"
                  ></span>
                  <div class="rvo-alert-text">
                    <div>
                      De aanvraag is <strong>bij u in behandeling</strong>. Dat
                      betekent dat deze nog niet is ingediend. U kunt de
                      <a
                        href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&amp;viewMode=story"
                        class="rvo-link"
                        >aanvraag openen</a
                      >, verder invullen en dan indienen.
                    </div>
                  </div>
                </div>
                <a
                  class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                  href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&amp;viewMode=story"
                  >Aanvraag openen</a
                >
              </div>
              <div class="rvo-item-list rvo-item-list--documents">
                <h2 class="utrecht-heading-2">Documenten</h2>
                <div class="rvo-item-list-item rvo-item-list-item--document">
                  <div class="rvo-item-list-detail rvo-item-list-detail--date">
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-document-blanco rvo-icon--md rvo-icon--zwart"
                    ></span>
                    25-02-2022
                  </div>
                  <div
                    class="rvo-item-list-detail rvo-item-list-detail--description"
                  >
                    <a class="rvo-link" href="#">Goedkeuring aanvraag (PDF)</a>
                  </div>
                </div>
                <div class="rvo-item-list-item rvo-item-list-item--document">
                  <div class="rvo-item-list-detail rvo-item-list-detail--date">
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-document-blanco rvo-icon--md rvo-icon--zwart"
                    ></span>
                    31-01-2022
                  </div>
                  <div
                    class="rvo-item-list-detail rvo-item-list-detail--description"
                  >
                    <a class="rvo-link" href="#"
                      >Verzoek aanvullende gegevens (PDF)</a
                    >
                  </div>
                </div>
                <div class="rvo-item-list-item rvo-item-list-item--document">
                  <div class="rvo-item-list-detail rvo-item-list-detail--date">
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-document-blanco rvo-icon--md rvo-icon--zwart"
                    ></span>
                    24-01-2022
                  </div>
                  <div
                    class="rvo-item-list-detail rvo-item-list-detail--description"
                  >
                    <a class="rvo-link" href="#"
                      >Bevestiging aanvraag Gemeenschappelijke Marktordening
                      2023 (PDF)</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside class="rvo-sidebar">
            <div class="rvo-timeline rvo-timeline--zaak-gebeurtenissen">
              <div class="rvo-timeline-event rvo-timeline-event--completed">
                <div class="rvo-timeline-status rvo-timeline-status--completed">
                  <span
                    class="utrecht-icon rvo-icon rvo-icon-vinkje rvo-icon--sm rvo-icon--wit"
                  ></span>
                </div>
                <div class="rvo-timeline-text">
                  <div class="rvo-timeline-description">Aanvraag gestart</div>
                  <div class="rvo-timeline-date">10-10-2022</div>
                </div>
              </div>
              <div class="rvo-timeline-event">
                <div class="rvo-timeline-status rvo-timeline-status--doing">
                  <span
                    class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"
                  ></span>
                </div>
                <div class="rvo-timeline-text">
                  <div class="rvo-timeline-description">
                    Aanvraag bij u in behandeling
                  </div>
                  <div class="rvo-timeline-date">12-10-2022</div>
                </div>
              </div>
              <div class="rvo-timeline-event">
                <div
                  class="rvo-timeline-status rvo-timeline-status--incomplete"
                >
                  <span
                    class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"
                  ></span>
                </div>
                <div class="rvo-timeline-text">
                  <div class="rvo-timeline-description">
                    Aanvraag wordt beoordeeld
                  </div>
                  <div class="rvo-timeline-date">
                    Uiterlijk vier werkweken na indienen
                  </div>
                </div>
              </div>
              <div class="rvo-timeline-event">
                <div
                  class="rvo-timeline-status rvo-timeline-status--incomplete"
                >
                  <span
                    class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"
                  ></span>
                </div>
                <div class="rvo-timeline-text">
                  <div class="rvo-timeline-description">Uitbetaling</div>
                  <div class="rvo-timeline-date">
                    Uiterlijk twee werkweken na goedkeuring
                  </div>
                </div>
              </div>
              <div class="rvo-timeline-event rvo-timeline-event--last">
                <div
                  class="rvo-timeline-status rvo-timeline-status--incomplete"
                >
                  <span
                    class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--sm rvo-icon--wit"
                  ></span>
                </div>
                <div class="rvo-timeline-text">
                  <div class="rvo-timeline-description">Aanvraag afgerond</div>
                </div>
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
