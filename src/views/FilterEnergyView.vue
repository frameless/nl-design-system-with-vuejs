<script setup lang="ts">
import { Heading } from "@utrecht/component-library-vue";
import { Checkbox } from "@utrecht/component-library-vue";
import { Paragraph } from "@utrecht/component-library-vue";
import { Link } from "@utrecht/component-library-vue";
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
    <div class="rvo-layout-column rvo-layout-gap--lg">
      <div class="rvo-topnav__background">
        <nav
          class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--md"
        >
          <ul class="utrecht-topnav__list">
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#">Home</a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#">Onderwerpen</a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#"
                >Subsidie- en financieringswijzer</a
              >
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#">Over ons</a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#">Contact</a>
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-zoek rvo-icon--md rvo-icon--wit"
                  role="img"
                  aria-label="Zoek"
                ></span
                >Zoeken</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-layout-column rvo-layout-gap--3xl">
        <main>
          <div class="rvo-filter">
            <div class="rvo-layout-column rvo-layout-gap--xl">
              <div class="rvo-max-width-layout rvo-max-width-layout--sm">
                <div class="rvo-intro">
                  <Heading :level="1"> Milieu- en Energielijst 2022 </Heading>
                  <Paragraph>
                    De Energielijst van de regeling Energie-investeringsaftrek
                    (EIA) wordt ieder jaar geactualiseerd. Er komen
                    bedrijfsmiddelen bij, er gaan er enkele vanaf. En soms
                    worden technische eisen aangescherpt. De nieuwe Energielijst
                    wordt meestal eind december in de Staatscourant
                    gepubliceerd. De lijst is gebaseerd op de wettelijke
                    uitvoeringsregeling.
                  </Paragraph>
                </div>
              </div>
              <div class="rvo-layout-column rvo-layout-gap--md">
                <div class="rvo-tmp-filters">
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <div
                        class="rvo-max-width-layout rvo-max-width-layout--lg"
                      >
                        <div class="rvo-layout-row rvo-layout-gap--xl">
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
                                >Zoek op trefwoord/code</label
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
                                    >Ik wil duurzaam investeren in</span
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
                                />Agro en visserij</label
                              ><label
                                class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                                for="optionB"
                                ><Checkbox
                                  id="optionB"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />Bouw en infrastructuur</label
                              ><label
                                class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                for="optionC"
                                ><Checkbox
                                  id="optionC"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />Groot- en detailhandel</label
                              ><label
                                class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                for="optionD"
                                ><Checkbox
                                  id="optionD"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />Milieusector</label
                              >
                            </div>
                          </details>
                          <details class="rvo-tmp-filter">
                            <summary>
                              <div
                                class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
                              >
                                <label
                                  class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                                  for="fieldId"
                                  ><span class="rvo-form-field__label-text"
                                    >Mijn milieudoel is</span
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
                                for="optionA1"
                                ><Checkbox
                                  id="optionA1"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />Afval(water) verwerken</label
                              ><label
                                class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                                for="optionB1"
                                ><Checkbox
                                  id="optionB1"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />Bodem beschermen</label
                              ><label
                                class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                for="optionC1"
                                ><Checkbox
                                  id="optionC1"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />Broeikasgassen reduceren</label
                              ><label
                                class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                                for="optionD1"
                                ><Checkbox
                                  id="optionD1"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />Circular ondernemen</label
                              >
                            </div>
                          </details>
                          <details class="rvo-tmp-filter">
                            <summary>
                              <div
                                class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
                              >
                                <label
                                  class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                                  for="fieldId"
                                  ><span class="rvo-form-field__label-text"
                                    >Jaar</span
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
                                for="optionA2"
                                ><Checkbox
                                  id="optionA2"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />2022</label
                              >
                            </div>
                          </details>
                          <details class="rvo-tmp-filter">
                            <summary>
                              <div
                                class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
                              >
                                <label
                                  class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                                  for="fieldId"
                                  ><span class="rvo-form-field__label-text"
                                    >Regeling</span
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
                                for="optionA3"
                                ><Checkbox
                                  id="optionA3"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />MIA\Vamil</label
                              ><label
                                class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                                for="optionB3"
                                ><Checkbox
                                  id="optionB3"
                                  name="group"
                                  class="rvo-checkbox__input"
                                  value=""
                                />EIA</label
                              >
                            </div>
                          </details>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div class="rvo-layout-column rvo-layout-gap--2xl">
                  <div class="rvo-active-filters">
                    <div class="rvo-max-width-layout rvo-max-width-layout--sm">
                      <div class="rvo-layout-row rvo-layout-gap--sm">
                        <span class="rvo-results-count"
                          ><strong>54</strong> resultaten voor</span
                        ><span class="rvo-tag rvo-tag--default rvo-tag--sm"
                          >Agro en visserij<Link href="#"
                            ><span
                              class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"
                              role="img"
                              aria-label="Kruis"
                            ></span></Link></span
                        ><span class="rvo-tag rvo-tag--default rvo-tag--sm"
                          >Milieusector<Link href="#"
                            ><span
                              class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"
                              role="img"
                              aria-label="Kruis"
                            ></span></Link
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="rvo-max-width-layout rvo-max-width-layout--sm">
                    <div class="rvo-results">
                      <div class="rvo-layout-column rvo-layout-gap--2xl">
                        <div class="rvo-result rvo-result--w-image">
                          <div class="rvo-layout-row rvo-layout-gap--lg">
                            <div class="rvo-result-text">
                              <div class="rvo-layout-column rvo-layout-gap--sm">
                                <Link href="#" class="rvo-link"
                                  >Energieprestatieverbetering van bestaande
                                  bedrijfsgebouwen [W]</Link
                                ><span class="rvo-result-description"
                                  >Het verbeteren van de energieprestatie van
                                  bestaande bedrijfsgebouwen, bepaald volgens
                                  een energie-indexberekening, zoals vastgelegd
                                  in ISSO 75.1 methode 2014 (Handleiding
                                  Energieprestatie Advies Utiliteitsgebouwen,
                                  Energielabel + Algemeen deel)...</span
                                ><span class="rvo-result-meta-data"
                                  ><span class="rvo-result-meta-data-item"
                                    >Regeling: <strong>EIA</strong></span
                                  ><span class="rvo-result-meta-data-item"
                                    >Code: <strong>210206</strong></span
                                  ></span
                                >
                              </div>
                            </div>
                            <Link href="#"
                              ><img
                                alt=""
                                class="rvo-result-image"
                                src="https://www.rvo.nl/files/file/styles/content/public/2022-07/8-Augustus%202022%20JPJ%20JIC%20Schiphol30.jpg"
                            /></Link>
                          </div>
                        </div>
                        <div class="rvo-result">
                          <div class="rvo-layout-column rvo-layout-gap--sm">
                            <Link href="#" class="rvo-link"
                              >HR-luchtverwarmer [W]</Link
                            ><span class="rvo-result-description"
                              >direct gasgestookte luchtverwarmer, al dan niet
                              voorzien van een tussenmedium, samengebouwd tot
                              één geheel, beoordeeld conform NEN-EN 17082:2019
                              met een rendement van minimaal 90% op d
                              ebovenwaarde van het toegepaste gas(soort),
                              verbrandingsgasafvoersysteem, (eventueel)
                              luchttoevoersysteem...</span
                            ><span class="rvo-result-meta-data"
                              ><span class="rvo-result-meta-data-item"
                                >Regeling: <strong>EIA</strong></span
                              ><span class="rvo-result-meta-data-item"
                                >Code: <strong>210102</strong></span
                              ></span
                            >
                          </div>
                        </div>
                        <div class="rvo-result">
                          <div class="rvo-layout-column rvo-layout-gap--sm">
                            <Link href="#" class="rvo-link"
                              >Direct gasgestookt stralingspaneel [W]</Link
                            ><span class="rvo-result-description"
                              >het verwarmen van gesloten binnenruimten in
                              bedrijfsgebouwen met een gemiddelde hoogtevan meer
                              dan 4 meter, niet zijnde tuinbouwkassen,</span
                            ><span class="rvo-result-meta-data"
                              ><span class="rvo-result-meta-data-item"
                                >Regeling: <strong>EIA</strong></span
                              ><span class="rvo-result-meta-data-item"
                                >Code: <strong>210106</strong></span
                              ></span
                            >
                          </div>
                        </div>
                        <div class="rvo-result">
                          <div class="rvo-layout-column rvo-layout-gap--sm">
                            <Link href="#" class="rvo-link"
                              >Warmteterugwinningsysteem uit luchtwassers</Link
                            ><span class="rvo-result-description"
                              >het verwarmen van veestallen door het benutten
                              van de warmte uit de luchtwasser,</span
                            ><span class="rvo-result-meta-data"
                              ><span class="rvo-result-meta-data-item"
                                >Regeling: <strong>EIA</strong></span
                              ><span class="rvo-result-meta-data-item"
                                >Code: <strong>210109</strong></span
                              ></span
                            >
                          </div>
                        </div>
                        <div class="rvo-result">
                          <div class="rvo-layout-column rvo-layout-gap--sm">
                            <Link href="#" class="rvo-link"
                              >Verwarmingssysteem voor bestaande pluimveestallen
                              [W]</Link
                            ><span class="rvo-result-description"
                              >het verwarmen van bestaande pluimveestallen
                              waarbij warme lucht van boven uit de stal wordt
                              gerecirculeerd,</span
                            ><span class="rvo-result-meta-data"
                              ><span class="rvo-result-meta-data-item"
                                >Regeling: <strong>EIA</strong></span
                              ><span class="rvo-result-meta-data-item"
                                >Code: <strong>210109</strong></span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="rvo-footer">
          <div class="rvo-max-width-layout rvo-max-width-layout--lg">
            <ul class="rvo-footer-menu">
              <li class="rvo-footer-menu-title">
                <Heading :level="3">RVO</Heading>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">Over ons</Link>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">Contact</Link>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">Pers</Link>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">Zaken regelen bij RVO</Link>
              </li>
            </ul>
            <ul class="rvo-footer-menu">
              <li class="rvo-footer-menu-title">
                <Heading :level="3" class="utrecht-heading-3"
                  >Over deze site</Heading
                >
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
                ><Link href="#" class="rvo-link">Cookies en anti-spam</Link>
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
                ><Link href="#" class="rvo-link">Proclaimer</Link>
              </li>
            </ul>
            <ul class="rvo-footer-menu">
              <li class="rvo-footer-menu-title">
                <Heading :level="3">Snel naar</Heading>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">Onderwerpen A t/m Z</Link>
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
                ><Link href="#" class="rvo-link"
                  >Documenten en publicaties</Link
                >
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link"
                  >Overheidspublicaties en auteursrecht</Link
                >
              </li>
            </ul>
            <ul class="rvo-footer-menu">
              <li class="rvo-footer-menu-title">
                <Heading :level="3">Blijf op de hoogte</Heading>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">Social media</Link>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link"
                  >Higherlevel.nl ondernemersforum</Link
                >
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">RSS</Link>
              </li>
              <li class="rvo-footer-menu-item">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                ><Link href="#" class="rvo-link">Gratis nieuwsbrief</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
