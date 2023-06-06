<script setup lang="ts">
import { Heading, Checkbox } from "@utrecht/component-library-vue";
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
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Controleer uw gegevens</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--correspondentie&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Correspondentie</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--datum&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Datum verleningsverzoek</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--project&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Project vragen</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten"
                class="rvo-link rvo-progress-tracker__step-link"
                >Kosten</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                >Bijlagen</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--samenvatting"
                class="rvo-link rvo-progress-tracker__step-link"
                >Samenvatting</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--ondertekening&amp;viewMode=story"
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
                <Heading :level="1">Bijlagen</Heading>
                <ul>
                  <li>
                    U kunt alleen bijlagen versturen in PDF-formaat. Als u een
                    ander type document wil versturen maakt u hier eerst een PDF
                    van waarvoor u eventueel de gratis
                    <a href="#" class="rvo-link">PDF Creator</a> kan gebruiken.
                  </li>
                  <li>
                    Iedere bijlage mag <strong>maximaal 25MB</strong> groot
                    zijn.
                  </li>
                  <li>
                    Voeg eventueel gelijksoortige bijlagen samen in een PDF,
                    bijvoorbeeld alle offertes.
                  </li>
                  <li>Geef het PDF-bestand een logische naam.</li>
                </ul>
              </div>
              <form>
                <div class="rvo-layout-column rvo-layout-gap--md">
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        Financiële capaciteit
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
                            >Wat stuurt u mee om uw financiële capaciteit aan te
                            tonen?</label
                          >
                        </div>
                        <div class="rvo-checkbox__group">
                          <label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="fca"
                            ><Checkbox
                              id="fca"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Bewijs van het eigen vermogen</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="fcb"
                            ><Checkbox
                              id="fcb"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Bewijs van de lening die is toegezegd</label
                          >
                        </div>
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
                            >Bewijs van het eigen vermogen</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            Het is mogelijk meerdere bestanden te selecteren
                          </div>
                        </div>
                        <input
                          id="field"
                          type="file"
                          class="rvo-file-input"
                          multiple=""
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
                        Opleiding of werkervaring
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
                            >Wat stuurt u mee om uw opleiding of werkervaring
                            aan te tonen?</label
                          >
                        </div>
                        <div class="rvo-checkbox__group">
                          <label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="wea"
                            ><Checkbox
                              id="wea"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Bewijs van de opleiding</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="web"
                            ><Checkbox
                              id="web"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Bewijs dat u vijf jaar werkervaring heeft</label
                          >
                        </div>
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
                            >Bewijs dat u vijf jaar werkervaring heeft</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            Het is mogelijk meerdere bestanden te selecteren
                          </div>
                        </div>
                        <input
                          id="field"
                          type="file"
                          class="rvo-file-input"
                          multiple=""
                        />
                      </div>
                    </fieldset>
                  </div>
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
                            >Offerte vaartuig</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            Het is mogelijk meerdere bestanden te selecteren
                          </div>
                        </div>
                        <input
                          id="field"
                          type="file"
                          class="rvo-file-input"
                          multiple=""
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
                        Marktwaarde vissersvaartuig
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
                            >Wat stuurt u mee om de marktwaarde van het
                            visservaartuig aan te tonen?</label
                          >
                        </div>
                        <div class="rvo-radio-button__group">
                          <label class="rvo-custom-radio-button" for="mwa"
                            ><input
                              id="mwa"
                              name="vv"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Taxatierapport</label
                          ><label class="rvo-custom-radio-button" for="mwb"
                            ><input
                              id="mwb"
                              name="vv"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Twee andere offertes van vergelijkbare
                            voertuigen</label
                          >
                        </div>
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
                            >Taxatierapport</label
                          >
                        </div>
                        <input
                          id="field"
                          type="file"
                          class="rvo-file-input"
                          multiple=""
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
                        Bewijs andere subsidies
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
                            >U stuurt de beslissing mee van deze andere
                            subsidies</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            Heeft u nog geen beslissing ontvangen? Stuur dan een
                            kopie van de aanvraag mee. Het is mogelijk meerdere
                            bestanden te selecteren.
                          </div>
                        </div>
                        <input
                          id="field"
                          type="file"
                          class="rvo-file-input"
                          multiple=""
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
                        Niet verplichte bijlagen
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
                            >Voeg hier de overige (niet verplichte) bijlagen
                            toe</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            Het is mogelijk meerdere bestanden te selecteren
                          </div>
                        </div>
                        <input
                          id="field"
                          type="file"
                          class="rvo-file-input"
                          multiple=""
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div class="rvo-button-group">
                    <a
                      class="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                      >Opslaan en sluiten</a
                    ><a
                      class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--samenvatting"
                      >Opslaan en verder</a
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
