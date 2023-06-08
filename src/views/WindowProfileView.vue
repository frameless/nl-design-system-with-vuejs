<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Checkbox } from "@utrecht/component-library-vue";
import { Textbox } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--regelmaat">
    <div class="rvo-app rvo-app--profiel">
      <div class="rvo-app-container rvo-app-container--profiel">
        <div class="rvo-app-content">
          <Heading :level="1" class="utrecht-heading-1">Profiel</Heading>
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
                    >Waar zit je onderneming?</label
                  >
                </div>
                <div class="rvo-select-wrapper">
                  <select
                    id="field"
                    class="utrecht-select utrecht-select--html-select"
                  >
                    <option>Noordelijk kleigebied</option>
                    <option>Noordelijk weidegebied - veen</option>
                    <option>Noordelijk weidegebied - zand</option>
                    <option>Veenkoloniën</option>
                    <option>Oostelijk veehouderijgebied</option>
                    <option>Centraal veehouderijgebied</option>
                    <option>IJsselmeerpolders</option>
                    <option>Westelijk Holland</option>
                    <option>Waterland en Droogmakerijen</option>
                    <option>Hollands Utrechts weidegebied</option>
                    <option>Zuidwestelijk akkerbouwgebied</option>
                    <option>Zuidwest-Brabant</option>
                    <option>Rivierengebied</option>
                    <option>Zuidelijk veehouderijgebied</option>
                    <option>Zuid-Limburg</option>
                  </select>
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
                    >Soort onderneming</label
                  >
                </div>
                <div class="rvo-select-wrapper">
                  <select
                    id="field"
                    class="utrecht-select utrecht-select--html-select"
                  >
                    <option>Akkerbouwbedrijf</option>
                    <option>Melkveehouderij</option>
                    <option>Fruitteler</option>
                    <option>Intensieve veeteelt</option>
                    <option>Gemengd</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="rvo-short-inputs">
            <label class="utrecht-form-label">Grondgebruik</label>
            <details class="rvo-short-inputs-details">
              <summary>
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                >Grasland
              </summary>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha blijvend grasland</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha tijdelijk grasland</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha grasland totaal</label>
              </div>
            </details>
            <details class="rvo-short-inputs-details">
              <summary>
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                >Bouwland
              </summary>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha klei</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha zand</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha loss</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha veen</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha bouwland totaal</label>
              </div>
            </details>
            <details class="rvo-short-inputs-details">
              <summary>
                <span
                  class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw"
                  role="img"
                  aria-label="Delta naar rechts"
                ></span
                >Overig land
              </summary>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha heg, haag, struweel</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  inputmode="numeric"
                /><label>ha overige houtige elementen</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  class="utrecht-textbox utrecht-textbox--html-input"
                  inputmode="numeric"
                /><label>ha sloten en poelen</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  class="utrecht-textbox utrecht-textbox--html-input"
                  inputmode="numeric"
                /><label>ha braak</label>
              </div>
              <div class="rvo-short-input">
                <Textbox
                  pattern="[0-9]*"
                  type="text"
                  class="utrecht-textbox utrecht-textbox--html-input"
                  inputmode="numeric"
                /><label>ha overig land totaal</label>
              </div>
            </details>
          </div>
          <div class="rvo-short-inputs">
            <label class="utrecht-form-label">Dieren</label>
            <div class="rvo-short-input">
              <Textbox
                pattern="[0-9]*"
                type="text"
                class="utrecht-textbox utrecht-textbox--html-input"
                inputmode="numeric"
              /><label># melkvee</label>
            </div>
            <div class="rvo-short-input">
              <Textbox
                pattern="[0-9]*"
                type="text"
                class="utrecht-textbox utrecht-textbox--html-input"
                inputmode="numeric"
              /><label># varkens</label>
            </div>
            <div class="rvo-short-input">
              <Textbox
                pattern="[0-9]*"
                type="text"
                class="utrecht-textbox utrecht-textbox--html-input"
                inputmode="numeric"
              /><label># vleesvee</label>
            </div>
            <div class="rvo-short-input">
              <Textbox
                pattern="[0-9]*"
                type="text"
                class="utrecht-textbox utrecht-textbox--html-input"
                inputmode="numeric"
              /><label># jongvee</label>
            </div>
            <div class="rvo-short-input">
              <Textbox
                pattern="[0-9]*"
                type="text"
                class="utrecht-textbox utrecht-textbox--html-input"
                inputmode="numeric"
              /><label># overige graasdieren</label>
            </div>
          </div>
          <div class="rvo-short-inputs">
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
                  >Overige gegevens</label
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
                  />Vroeg oogsten</label
                ><label
                  class="rvo-checkbox rvo-checkbox--not-checked"
                  for="optionB-cb"
                  ><Checkbox
                    id="optionB-cb"
                    name="group"
                    class="rvo-checkbox__input"
                    value=""
                  />Inproductieve stukken land</label
                ><label
                  class="rvo-checkbox rvo-checkbox--not-checked"
                  for="optionC-cb"
                  ><Checkbox
                    id="optionC-cb"
                    name="group"
                    class="rvo-checkbox__input"
                    value=""
                  />Drogere grond</label
                >
              </div>
            </div>
          </div>
          <Paragraph class="utrecht-button-group">
            <a
              href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
              class="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
            ></a
            ><a
              href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
              class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
              >Opslaan</a
            >
          </Paragraph>
          <ul class="rvo-app-menu">
            <li class="rvo-app-menu-item">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--zoeken&amp;viewMode=story"
                class="rvo-app-menu-item-link"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-zoek rvo-icon--2xl rvo-icon--hemelblauw"
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
                class="rvo-app-menu-item-link rvo-app-menu-item-link--active"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--2xl rvo-icon--wit"
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
