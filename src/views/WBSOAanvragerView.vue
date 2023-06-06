<script setup lang="ts">
import { PageHeader, Heading } from "@utrecht/component-library-vue";
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
    <div class="rvo-topnav__background">
      <nav
        class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--md"
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
      <main class="rvo-progress-tracker-active">
        <div class="rvo-progress-tracker">
          <div
            class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--start rvo-image-bg-progress-tracker-start-end-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
          >
            Aanvraag WBSO
          </div>
          <div
            class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
          >
            <a
              href="iframe.html?args=&amp;id=demo-demo-pagina-s-wbso--01-voordat-u-start&amp;viewMode=story"
              class="rvo-link rvo-progress-tracker__step-link"
              >Voordat u start</a
            >
          </div>
          <div
            class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
          >
            <a
              href="iframe.html?args=&amp;id=demo-demo-pagina-s-wbso--02-vormvrije-aanvraag&amp;viewMode=story"
              class="rvo-link rvo-progress-tracker__step-link"
              >Vormvrije aanvraag</a
            >
          </div>
          <div
            class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
          >
            <a
              href="iframe.html?args=&amp;id=demo-demo-pagina-s-wbso--03-aanvrager&amp;viewMode=story"
              class="rvo-link rvo-progress-tracker__step-link"
              >Aanvrager</a
            >
          </div>
          <div
            class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
          >
            <a href="#" class="rvo-link rvo-progress-tracker__step-link"
              >Projecten</a
            >
          </div>
          <div
            class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
          >
            <a href="#" class="rvo-link rvo-progress-tracker__step-link"
              >S&amp;O uren</a
            >
          </div>
          <div
            class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end rvo-image-bg-progress-tracker-start-end-md--after"
          >
            Aanvraag ingediend
          </div>
        </div>
        <div class="rvo-form">
          <div class="rvo-layout-column rvo-layout-gap--md">
            <div class="intro">
              <a href="#" class="rvo-link rvo-link--with-icon"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                  role="img"
                  aria-label="Terug"
                ></span
                >Terug</a
              >
              <Heading :level="1">Aanvrager</Heading>
              <Heading :level="2">Bedrijfsgegevens (NHR)</Heading>
              <dl class="rvo-data">
                <dt>KVK-nummer</dt>
                <dd>35012085</dd>
                <dt>Naam</dt>
                <dd>Albert Heijn B.V.</dd>
                <dt>Rechtsvorm</dt>
                <dd>bv</dd>
                <dt>RSIN</dt>
                <dd>002230884</dd>
              </dl>
              <Heading :level="2">Bedrijfsgegevens</Heading>
              <dl class="rvo-data">
                <dt>Website</dt>
                <dd class="rvo-url">https://www.streetplanet.nl</dd>
                <dt>
                  Maakt u deel uit van een fiscale eenheid voor de
                  vennootschapbelasting?
                </dt>
                <dd>Ja</dd>
                <dt>RSIN-Nummer fiscale moeder</dt>
                <dd>200000007</dd>
              </dl>
            </div>
            <form>
              <div class="rvo-layout-column rvo-layout-gap--md">
                <div class="rvo-layout-column rvo-layout-gap--md">
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        Contactpersoon
                      </legend>
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
                            >Contactpersoon</label
                          >
                        </div>
                        <div class="rvo-select-wrapper">
                          <select
                            id="field"
                            class="utrecht-select utrecht-select--html-select"
                          >
                            <option>Contactpersoon 1</option>
                            <option>Contactpersoon 2</option>
                            <option>Contactpersoon 3</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        Organisatie
                      </legend>
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
                            >U drijft een onderneming in de zin van de Wet IB of
                            Wet Vpb en bent geen publieke
                            kennisinstelling?</label
                          >
                          <div class="utrecht-form-field-description">
                            <details class="rvo-expandable-text">
                              <summary class="rvo-expandable-text__summary">
                                <span
                                  class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--md rvo-icon--hemelblauw"
                                  role="img"
                                  aria-label="Info"
                                ></span
                                >Meer uitleg
                              </summary>
                              <div class="rvo-expandable-text__details">
                                Bent u geen ondernemer in de zin van de Wet IB
                                (Inkomstenbelasting 2001) of Wet VpB
                                (Vennootschapsbelasting 1969), dan kunt u geen
                                WBSO aanvragen. U kunt ook geen WBSO aanvragen
                                indienen als u een publieke kennisinstelling
                                bent (zie artikel 1, onderdeel m van de WVA).
                              </div>
                            </details>
                          </div>
                        </div>
                        <div class="rvo-radio-button__group">
                          <label class="rvo-custom-radio-button" for="wet-ib"
                            ><input
                              id="wet-ib"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Ja</label
                          ><label class="rvo-custom-radio-button" for="wet-ib2"
                            ><input
                              id="wet-ib2"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Nee</label
                          >
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        Gegevens aanvrager in aanvraagperiode
                      </legend>
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
                            >Prognose totaal aantal werknemers</label
                          >
                        </div>
                        <input
                          id="field"
                          placeholder=""
                          pattern="[0-9]*"
                          type="text"
                          class="utrecht-textbox utrecht-textbox--html-input"
                          inputmode="numeric"
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
                            >(Waarvan) eigen S&amp;O-werknemers</label
                          >
                        </div>
                        <input
                          id="field"
                          placeholder=""
                          pattern="[0-9]*"
                          type="text"
                          class="utrecht-textbox utrecht-textbox--html-input"
                          inputmode="numeric"
                          value=""
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        S&amp;O-uurloon
                      </legend>
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
                            >Heeft u in 2020 S&amp;O-werkzaamheden verricht
                            waarvoor u een S&amp;O-verklaring heeft
                            ontvangen?</label
                          >
                          <div
                            class="utrecht-form-field-description utrecht-form-field-description--warning rvo-form-feedback rvo-form-feedback--warning"
                          >
                            <span
                              class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--md rvo-status-icon-waarschuwing rvo-status-icon-waarschuwing"
                              role="img"
                              aria-label="Waarschuwing"
                            ></span
                            >Voor u geldt in 2022 een forfaitar uurloon van €29.
                          </div>
                        </div>
                        <div class="rvo-radio-button__group">
                          <label class="rvo-custom-radio-button" for="so"
                            ><input
                              id="so"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Ja</label
                          ><label class="rvo-custom-radio-button" for="so2"
                            ><input
                              id="so2"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Nee</label
                          >
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        Technologiegebied
                      </legend>
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
                            >Technologiegebied</label
                          >
                          <div class="utrecht-form-field-description">
                            <details class="rvo-expandable-text">
                              <summary class="rvo-expandable-text__summary">
                                <span
                                  class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--md rvo-icon--hemelblauw"
                                  role="img"
                                  aria-label="Info"
                                ></span
                                >Uitleg over technologiegebieden
                              </summary>
                              <div class="rvo-expandable-text__details">
                                <dl>
                                  <dt>aard- en milieuwetenschappen</dt>
                                  <dd>
                                    geowetenschappen | meteorologie |
                                    klimaatonderzoek | water &amp; ecologie
                                    onderzoek
                                  </dd>
                                </dl>
                              </div>
                            </details>
                          </div>
                        </div>
                        <div class="rvo-select-wrapper">
                          <select
                            id="field"
                            class="utrecht-select utrecht-select--html-select"
                          >
                            <option>aard- en milieuwetenschappen</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        Periode aanvraag
                      </legend>
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
                            >Maand aanvang</label
                          >
                        </div>
                        <div class="rvo-select-wrapper">
                          <select
                            id="field"
                            class="utrecht-select utrecht-select--html-select"
                          >
                            <option>Januari</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div class="rvo-button-group">
                  <button
                    class="utrecht-button utrecht-button--secondary-action utrecht-button--rvo-md"
                    type="button"
                  >
                    Opslaan en sluiten</button
                  ><button
                    class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
                    type="button"
                  >
                    Opslaan en verder
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
