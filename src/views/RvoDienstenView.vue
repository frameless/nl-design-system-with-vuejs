<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { PageHeader } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Checkbox } from "@utrecht/component-library-vue";
import { Link } from "@utrecht/component-library-vue";
import { FormLabel } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo rvo-demo-page--diensten">
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
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                  >Zaken</Link
                >
              </li>
              <li class="utrecht-topnav__item">
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--diensten&amp;viewMode=story"
                  >Diensten</Link
                >
              </li>
              <li class="utrecht-topnav__item">
                <Link class="utrecht-topnav__link" href="#">Help</Link>
              </li>
              <li class="utrecht-topnav__item">
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--profiel&amp;viewMode=story"
                  >Profiel</Link
                >
              </li>
              <li
                class="utrecht-topnav__item utrecht-topnav__item--align-right"
              >
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                  >Uitloggen</Link
                >
              </li>
              <li class="utrecht-topnav__item">
                <Link class="utrecht-topnav__link" href="#"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-wereldbol rvo-icon--lg rvo-icon--wit"
                    role="img"
                    aria-label="Wereldbol"
                  ></span
                  >English</Link
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
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                >Zaken</Link
              >
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--active">
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--diensten&amp;viewMode=story"
                >Diensten</Link
              >
            </li>
            <li class="utrecht-topnav__item">
              <Link class="utrecht-topnav__link" href="#">Help</Link>
            </li>
            <li class="utrecht-topnav__item">
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--profiel&amp;viewMode=story"
                >Profiel</Link
              >
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                >Uitloggen</Link
              >
            </li>
            <li class="utrecht-topnav__item">
              <Link class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-wereldbol rvo-icon--lg rvo-icon--wit"
                  role="img"
                  aria-label="Wereldbol"
                ></span
                >English</Link
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-hero rvo-hero--man_vrouw_met_laptop">
        <div class="rvo-hero-bg-img-container">
          <img
            src="../images/hero-bg--man_vrouw_met_laptop.webp"
            class="rvo-hero-bg-img"
          />
        </div>
        <div class="rvo-max-width-layout rvo-max-width-layout--md">
          <div class="rvo-hero-content">
            <div class="rvo-hero-text">
              <Heading :level="1">Diensten</Heading>
              <Paragraph class="rvo-hero-description">
                Geef aan wie u bent en wat u zoekt, en u krijgt een overzicht
                met diensten op maat.
              </Paragraph>
            </div>
            <div class="rvo-hero-img-container">
              <img
                src="../images/man_vrouw_met_laptop.webp"
                class="rvo-hero-img"
              />
            </div>
          </div>
        </div>
      </div>
      <main class="rvo-main--mijn-zaken">
        <div class="rvo-responsive-filter-wrapper">
          <div class="rvo-max-width-layout rvo-max-width-layout--md">
            <details class="rvo-responsive-filters">
              <summary class="rvo-responsive-filters-toggle">
                <Paragraph>Diensten filteren</Paragraph>
                <span
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
                        <FormLabel
                          id="fieldId-label"
                          for="fieldId"
                          class="utrecht-form-label"
                          >Op titel</FormLabel
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
                          <div class="rvo-form-field__label">
                            <FormLabel
                              id="fieldId-label"
                              for="fieldId"
                              class="utrecht-form-label"
                              >Ik zoek geld voor</FormLabel
                            >
                          </div>
                          <Paragraph class="rvo-select-wrapper">
                            <div
                              class="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder"
                            >
                              Maak een keuze
                            </div>
                          </Paragraph>
                        </div>
                      </summary>
                      <div
                        class="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm"
                      >
                        <label
                          class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          for="option1A"
                          ><Checkbox
                            id="option1A"
                            name="group1"
                            class="rvo-checkbox__input"
                            value=""
                          />Compensatie</label
                        ><label
                          class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          for="option1B"
                          ><Checkbox
                            id="option1B"
                            name="group1"
                            class="rvo-checkbox__input"
                            value=""
                          />Duurzaam en circulair ondernemen</label
                        ><label
                          class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          for="option1C"
                          ><Checkbox
                            id="option1C"
                            name="group1"
                            class="rvo-checkbox__input"
                            value=""
                          />Energie besparen</label
                        >
                      </div>
                    </details>
                    <details class="rvo-tmp-filter">
                      <summary>
                        <div
                          class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
                        >
                          <div class="rvo-form-field__label">
                            <FormLabel
                              id="fieldId-label"
                              for="fieldId"
                              class="utrecht-form-label"
                              >Op titel</FormLabel
                            >
                          </div>
                          <Paragraph class="rvo-select-wrapper">
                            <div
                              class="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder"
                            >
                              Maak een keuze
                            </div>
                          </Paragraph>
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
                          />Open voor aanvragen</label
                        ><label
                          class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                          for="optionB"
                          ><Checkbox
                            id="optionB"
                            name="group"
                            class="rvo-checkbox__input"
                            value=""
                          />Bijna open voor aanvragen</label
                        ><label
                          class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          for="optionC"
                          ><Checkbox
                            id="optionC"
                            name="group"
                            class="rvo-checkbox__input"
                            value=""
                          />Tijdelijk gesloten voor aanvragen</label
                        ><label
                          class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                          for="optionD"
                          ><Checkbox
                            id="optionD"
                            name="group"
                            class="rvo-checkbox__input"
                            value=""
                          />Gesloten voor aanvragen</label
                        >
                      </div>
                    </details>
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
                          >Sorteren op</label
                        >
                      </div>
                      <div class="rvo-select-wrapper">
                        <select
                          id="field"
                          class="utrecht-select utrecht-select--html-select"
                        >
                          <option>Aanbevolen</option>
                          <option>Openingsdatum</option>
                          <option>A tot Z</option>
                          <option>Z tot A</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div class="rvo-max-width-layout rvo-max-width-layout--md">
          <div class="rvo-item-list rvo-item-list--diensten">
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >Gemeenschappelijke Marktordening 2023</Link
                  ><span
                    class="rvo-item-list-detail rvo-item-list-detail--aanbevolen"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--zwart"
                    ></span
                    >Voor u aanbevolen</span
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--edit"
                ></div>
                <Paragraph class="rvo-status-title">Bijna open</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >POP3 Samenwerking Pilots gezonde kalverketen</Link
                  ><span
                    class="rvo-item-list-detail rvo-item-list-detail--aanbevolen"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--zwart"
                    ></span
                    >Voor u aanbevolen</span
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--success"
                ></div>
                <Paragraph class="rvo-status-title">Open</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >OverheidsOpdrachten NVLG</Link
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--success"
                ></div>
                <Paragraph class="rvo-status-title">Open</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >Borgstelling MKB-kredieten (BMKB)</Link
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--success"
                ></div>
                <Paragraph class="rvo-status-title">Open</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >Eureka: programma internationale marktgerichte
                    R&amp;D</Link
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--edit"
                ></div>
                <Paragraph class="rvo-status-title">Bijna open</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#">Groeifaciliteit</Link>
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--edit"
                ></div>
                <Paragraph class="rvo-status-title">Bijna open</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >Borgstelling MKB-kredieten (BMKB)</Link
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--warning"
                ></div>
                <Paragraph class="rvo-status-title">Bijna gesloten</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >SBIR innovatie in opdracht</Link
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--warning"
                ></div>
                <Paragraph class="rvo-status-title">Bijna gesloten</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#"
                    >Borgstelling MKB-kredieten (BMKB)</Link
                  >
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--warning"
                ></div>
                <Paragraph class="rvo-status-title">Bijna gesloten</Paragraph>
              </div>
            </div>
            <div class="rvo-item-list-item rvo-item-list-item--dienst">
              <div
                class="rvo-item-list-detail rvo-item-list-detail--description"
              >
                <Heading :level="3">
                  <Link class="rvo-link" href="#">DHI-subsidieregeling</Link>
                </Heading>
              </div>
              <div class="rvo-item-list-detail rvo-item-list-detail--status">
                <div
                  class="rvo-status-indicator rvo-status-indicator--error"
                ></div>
                <Paragraph class="rvo-status-title">Gesloten</Paragraph>
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
              ><Link class="rvo-link" href="#">Vorige</Link>
            </div>
            <div class="rvo-pagination-page-numbers">
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--first"
              >
                <Link class="rvo-link" href="#">1</Link>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator--separator"
              >
                ...
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number"
              >
                <Link class="rvo-link" href="#">6</Link>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--current"
              >
                <Link class="rvo-link" href="#">7</Link>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number"
              >
                <Link class="rvo-link" href="#">8</Link>
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator--separator"
              >
                ...
              </div>
              <div
                class="rvo-pagination-indicator rvo-pagination-indicator-page-number rvo-pagination-indicator-page-number--last"
              >
                <Link class="rvo-link" href="#">42</Link>
              </div>
            </div>
            <div
              class="rvo-pagination-indicator rvo-pagination-indicator--next"
            >
              <Link class="rvo-link" href="#">Volgende</Link
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
