<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Checkbox } from "@utrecht/component-library-vue";
import { PageHeader } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo">
    <div class="rvo-header-content">
      <PageHeader class="rvo-header">
        <Logo />
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
            <li class="utrecht-topnav__item utrecht-topnav__item--active">
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
              <Heading :level="1">Mijn zaken</Heading>
              <Paragraph class="rvo-hero-description">
                Hier vindt u een overzicht met alle uw online zaken bij de
                Rijksdienst voor Ondernemend Nederland (RVO).
              </Paragraph>
            </div>
            <div class="rvo-hero-img-container">
              <img src="../images/man-met-laptop.webp" class="rvo-hero-img" />
            </div>
          </div>
        </div>
      </div>
      <main class="rvo-main--mijn-zaken">
        <div class="rvo-responsive-filter-wrapper">
          <div class="rvo-max-width-layout rvo-max-width-layout--md">
            <details class="rvo-responsive-filters">
              <summary class="rvo-responsive-filters-toggle">
                Zaken filteren<span
                  class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"
                ></span
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"
                ></span>
              </summary>
              <div class="rvo-tmp-filters">
                <div class="utrecht-form-fieldset rvo-form-fieldset">
                  <fieldset
                    class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                  >
                    <div
                      role="group"
                      aria-labelledby="fieldId-label"
                      class="utrecht-form-field utrecht-form-field--text rvo-form-field"
                    >
                      <div class="rvo-form-field__label">
                        <label
                          id="fieldId-label"
                          for="fieldId"
                          class="utrecht-form-label"
                          >Op zaaknummer</label
                        >
                      </div>
                      <input
                        id="field"
                        placeholder=""
                        type="text"
                        class="utrecht-textbox utrecht-textbox--html-input"
                        value=""
                      />
                    </div>
                    <div
                      role="group"
                      aria-labelledby="fieldId-label"
                      class="utrecht-form-field utrecht-form-field--text rvo-form-field"
                    >
                      <div class="rvo-form-field__label">
                        <label
                          id="fieldId-label"
                          for="fieldId"
                          class="utrecht-form-label"
                          >Op omschrijving</label
                        >
                      </div>
                      <input
                        id="field"
                        placeholder=""
                        type="text"
                        class="utrecht-textbox utrecht-textbox--html-input"
                        value=""
                      />
                    </div>
                    <details class="rvo-tmp-filter">
                      <summary>
                        <div
                          class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
                        >
                          <label
                            class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                            for="fieldId"
                            ><span class="rvo-form-field__label-text"
                              >Op status</span
                            ></label
                          >
                          <div class="rvo-select-wrapper">
                            <div
                              class="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder"
                            >
                              Maak een keuze
                            </div>
                          </div>
                        </div>
                      </summary>
                      <div
                        class="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm"
                      >
                        <label
                          class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          for="optionA"
                          ><Checkbox
                            id="optionA"
                            name="group"
                            class="rvo-checkbox__input"
                            value=""
                          />Beslissing genomen</label
                        ><label
                          class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          for="optionB"
                          ><Checkbox
                            id="optionB"
                            name="group"
                            class="rvo-checkbox__input"
                            value=""
                          />Bij U in bewerking</label
                        ><label
                          class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          for="optionC"
                          ><Checkbox
                            id="optionC"
                            name="group"
                            class="rvo-checkbox__input"
                            value=""
                          />Afgehandeld</label
                        >
                      </div>
                    </details>
                  </fieldset>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div class="rvo-max-width-layout rvo-max-width-layout--md">
          <div class="rvo-item-list rvo-item-list--cases">
            <div class="rvo-item-list-item rvo-item-list-item--case">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--case-number"
              >
                <span
                  class="utrecht-icon rvo-icon rvo-icon-map rvo-icon--md rvo-icon--zwart"
                ></span
                >22292000001
              </div>
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <a
                    class="rvo-link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                    >Jonge Vissers 2022</a
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--edit"
                ></div>
                <div class="rvo-status-title">Bij u in bewerking</div>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--case">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--case-number"
              >
                <span
                  class="utrecht-icon rvo-icon rvo-icon-map rvo-icon--md rvo-icon--zwart"
                ></span
                >22269000022
              </div>
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <a
                    class="rvo-link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                    >POP3 Samenwerking Pilots gezonde kalverketen</a
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--success"
                ></div>
                <div class="rvo-status-title">Goedgekeurd</div>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--case">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--case-number"
              >
                <span
                  class="utrecht-icon rvo-icon rvo-icon-map rvo-icon--md rvo-icon--zwart"
                ></span
                >16269000033
              </div>
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <a
                    class="rvo-link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                    >OverheidsOpdrachten NVLG</a
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--error"
                ></div>
                <div class="rvo-status-title">Afgekeurd</div>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--case">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--case-number"
              >
                <span
                  class="utrecht-icon rvo-icon rvo-icon-map rvo-icon--md rvo-icon--zwart"
                ></span
                >16269003453
              </div>
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <a
                    class="rvo-link"
                    href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                    >OverheidsOpdrachten NVLG</a
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--warning"
                ></div>
                <div class="rvo-status-title">In behandeling</div>
              </div>
            </div>
          </div>
          <div class="rvo-pagination rvo-pagination--middle-page">
            <div
              class="rvo-pagination-indicator rvo-pagination-indicator--previous"
            >
              <span
                class="utrecht-icon rvo-icon rvo-icon-delta-naar-links rvo-icon--sm rvo-icon--zwart"
              ></span
              ><a class="rvo-link" href="#">Vorige</a>
            </div>
            <div class="rvo-pagination-page-numbers">
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--first"
              >
                <a class="rvo-link" href="#">1</a>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator--separator"
              >
                ...
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number"
              >
                <a class="rvo-link" href="#">6</a>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--current"
              >
                <a class="rvo-link" href="#">7</a>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number"
              >
                <a class="rvo-link" href="#">8</a>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator--separator"
              >
                ...
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--last"
              >
                <a class="rvo-link" href="#">42</a>
              </div>
            </div>
            <div
              class="rvo-pagination-indicator rvo-pagination-indicator--next"
            >
              <a class="rvo-link" href="#">Volgende</a
              ><span
                class="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--zwart"
              ></span>
            </div>
          </div>
        </div>
      </main>
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
