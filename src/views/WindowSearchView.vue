<script setup lang="ts">
import { Checkbox, Paragraph } from "@utrecht/component-library-vue";
</script>
<template>
  <div class="rvo-demo-page rvo-demo-page--regelmaat">
    <div class="rvo-app rvo-app--profiel">
      <div class="rvo-app-container rvo-app-container--profiel">
        <div class="rvo-app-content">
          <h1 class="utrecht-heading-1">Zoeken</h1>
          <Paragraph>
            Vul je profiel in om maatregelen te krijgen die voor jou van
            toepassing kunnen zijn.
          </Paragraph>
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
                    >Ik ben op zoek naar maatregelen</label
                  >
                </div>
                <div class="rvo-checkbox__group">
                  <label
                    class="rvo-checkbox rvo-checkbox--not-checked"
                    for="optionA-cb"
                    ><Checkbox
                      id="optionA-cb"
                      name="group"
                      class="rvo-checkbox__input"
                      value=""
                    />die eenvoudig te realiseren zijn</label
                  ><label
                    class="rvo-checkbox rvo-checkbox--not-checked"
                    for="optionB-cb"
                    ><Checkbox
                      id="optionB-cb"
                      name="group"
                      class="rvo-checkbox__input"
                      value=""
                    />die duurzaam zijn</label
                  ><label
                    class="rvo-checkbox rvo-checkbox--not-checked"
                    for="optionC-cb"
                    ><Checkbox
                      id="optionC-cb"
                      name="group"
                      class="rvo-checkbox__input"
                      value=""
                    />die financieel interessant zijn</label
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
                    >Duurzaam op het gebied van</label
                  >
                </div>
                <div class="rvo-select-wrapper">
                  <select
                    id="field"
                    class="utrecht-select utrecht-select--html-select"
                  >
                    <option>Klimaat</option>
                    <option>Bodem en lucht</option>
                    <option>Water</option>
                    <option>Landschap</option>
                    <option>Biodiversiteit</option>
                    <option>Op alle gebieden</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
          <Paragraph class="utrecht-button-group">
            <a
              href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
              class="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
            ></a
            ><a
              href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
              class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
              >Zoeken</a
            >
          </Paragraph>
          <ul class="rvo-app-menu">
            <li class="rvo-app-menu-item">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--zoeken&amp;viewMode=story"
                class="rvo-app-menu-item-link rvo-app-menu-item-link--active"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-zoek rvo-icon--2xl rvo-icon--wit"
                  role="img"
                  aria-label="Zoek"
                ></span
                >Zoeken</a
              >
            </li>
            <li class="rvo-app-menu-item">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--bewaard&amp;viewMode=story"
                class="rvo-app-menu-item-link"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--2xl rvo-icon--hemelblauw"
                  role="img"
                  aria-label="Favoriet"
                ></span
                >Bewaard</a
              >
            </li>
            <li class="rvo-app-menu-item">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
                class="rvo-app-menu-item-link"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--2xl rvo-icon--hemelblauw"
                  role="img"
                  aria-label="Plus"
                ></span
                >Suggesties</a
              >
            </li>
            <li class="rvo-app-menu-item">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--profiel&amp;viewMode=story"
                class="rvo-app-menu-item-link"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--2xl rvo-icon--hemelblauw"
                  role="img"
                  aria-label="User"
                ></span
                >Profiel</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
