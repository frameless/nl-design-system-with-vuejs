<script setup lang="ts">
import { Heading } from "@utrecht/component-library-vue";
import { UnorderedList } from "@utrecht/component-library-vue";
import { UnorderedListItem } from "@utrecht/component-library-vue";
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
          <UnorderedList class="utrecht-topnav__list">
            <UnorderedListItem class="utrecht-topnav__item">
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
            </UnorderedListItem>
            <UnorderedListItem
              class="utrecht-topnav__item utrecht-topnav__item--align-right"
            >
              <a
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                >Uitloggen</a
              >
            </UnorderedListItem>
          </UnorderedList>
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
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--substep-start rvo-image-bg-progress-tracker-line-substep-start--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten"
                class="rvo-link rvo-progress-tracker__step-link"
                >Kosten</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-sm--after rvo-progress-tracker__step--substep-end rvo-image-bg-progress-tracker-line-substep-end--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten-opvoeren&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Kosten opvoeren</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--bijlagen&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
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
                <div class="rvo-layout-column rvo-layout-gap--md">
                  <Heading :level="1">Kosten opvoeren</Heading>
                  <dl class="rvo-data">
                    <dt>Omschrijving van de investering</dt>
                    <dd>Aanschaf voertuig</dd>
                  </dl>
                </div>
              </div>
              <form>
                <div class="rvo-layout-column rvo-layout-gap--md">
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
                            >Hoeveel kost het vissersvaartuig (exclusief
                            btw)?</label
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
                            >Wordt u volledig of gedeeltelijk eigenaar van het
                            vissersvaartuig?</label
                          >
                        </div>
                        <div class="rvo-radio-button__group">
                          <label class="rvo-custom-radio-button" for="vveiga"
                            ><input
                              id="vveiga"
                              name="vv-eigenaar"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Volledig eigenaar</label
                          ><label class="rvo-custom-radio-button" for="vveigb"
                            ><input
                              id="vveigb"
                              name="vv-eigenaar"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Mede eigenaar</label
                          >
                        </div>
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
                            >Wat zijn de kosten waarvoor u subsidie wilt
                            aanvragen?</label
                          >
                          <div class="utrecht-form-field-description">
                            <details class="rvo-expandable-text">
                              <summary class="rvo-expandable-text__summary">
                                <span
                                  class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--md rvo-icon--hemelblauw"
                                  role="img"
                                  aria-label="Info"
                                ></span
                                >Meer informatie
                              </summary>
                              <div class="rvo-expandable-text__details">
                                Uitgebreide uitleg over de subsidie.
                              </div>
                            </details>
                          </div>
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
                  <div class="rvo-button-group">
                    <a
                      class="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                      >Opslaan en sluiten</a
                    ><a
                      class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                      href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten"
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
