<script setup lang="ts">
import { Checkbox } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Paragraph } from "@utrecht/component-library-vue";
import { Textbox } from "@utrecht/component-library-vue";
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
        <main>
          <div
            class="rvo-layout-row rvo-layout-row--flex-start rvo-layout-gap--2xl"
          >
            <div class="rvo-progress-tracker">
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--start rvo-image-bg-progress-tracker-start-end-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                Progress Tracker
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                  >Step completed</a
                >
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                  >Step doing</a
                >
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--substep-start rvo-image-bg-progress-tracker-line-substep-start--before"
              >
                <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                  >Step incomplete</a
                >
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                  >First sub-step</a
                >
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                  >Sub-step doing</a
                >
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                  >Sub-step completed</a
                >
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-incomplete-sm--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                Sub-step disabled
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--sm rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-sm--after rvo-progress-tracker__step--substep-end rvo-image-bg-progress-tracker-line-substep-end--before"
              >
                <a href="#" class="rvo-link rvo-progress-tracker__step-link"
                  >Last sub-step</a
                >
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--disabled rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
              >
                Step disabled
              </div>
              <div
                class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end rvo-image-bg-progress-tracker-start-end-md--after"
              >
                Process completed
              </div>
            </div>
            <div class="rvo-form">
              <div class="rvo-layout-column rvo-layout-gap--sm">
                <div class="intro">
                  <a href="#" class="rvo-link rvo-link--with-icon"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="Terug"
                    ></span
                    >Terug</a
                  >
                  <Heading :level="1">Heading</Heading>
                </div>
                <form class="rvo-layout-spacer rvo-layout-spacer--2xl">
                  <div class="utrecht-form-fieldset rvo-form-fieldset">
                    <fieldset
                      class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
                    >
                      <legend
                        class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend"
                      >
                        Keyboard inputs
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
                            >Text</label
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
                            >Text with helper text</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            This is a helper text which can be used for
                            instructions.
                          </div>
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
                            >Text</label
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
                            >Text with an error</label
                          >
                          <div
                            class="utrecht-form-field-description utrecht-form-field-description--invalid rvo-form-feedback rvo-form-feedback--error"
                          >
                            <span
                              class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--md rvo-status-icon-foutmelding rvo-status-icon-foutmelding"
                              role="img"
                              aria-label="Foutmelding"
                            ></span
                            >This is an error
                          </div>
                        </div>
                        <input
                          id="field"
                          placeholder=""
                          type="text"
                          class="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--invalid"
                          aria-invalid="true"
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
                            >Text with a warning</label
                          >
                          <div
                            class="utrecht-form-field-description utrecht-form-field-description--warning rvo-form-feedback rvo-form-feedback--warning"
                          >
                            <span
                              class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--md rvo-status-icon-waarschuwing rvo-status-icon-waarschuwing"
                              role="img"
                              aria-label="Waarschuwing"
                            ></span
                            >This is a warning
                          </div>
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
                            >Text with expandable helper text</label
                          >
                          <div class="utrecht-form-field-description">
                            <details class="rvo-expandable-text">
                              <summary class="rvo-expandable-text__summary">
                                <span
                                  class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--md rvo-icon--hemelblauw"
                                  role="img"
                                  aria-label="Info"
                                ></span
                                >Expandable helper text
                              </summary>
                              <div class="rvo-expandable-text__details">
                                This is a helper text which can be used for
                                instructions.
                              </div>
                            </details>
                          </div>
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
                            >Text disabled</label
                          >
                        </div>
                        <input
                          id="field"
                          placeholder=""
                          type="text"
                          class="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--disabled"
                          disabled=""
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
                            >Text disabled with value</label
                          >
                        </div>
                        <input
                          id="field"
                          placeholder=""
                          type="text"
                          class="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--disabled"
                          disabled=""
                          value="Value"
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
                            >Number</label
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
                            >Textarea</label
                          >
                        </div>
                        <textarea
                          id="field"
                          placeholder=""
                          class="utrecht-textarea utrecht-textarea--html-textarea"
                        ></textarea>
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
                        Options
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
                            >Radio buttons</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            This is an helper text
                          </div>
                        </div>
                        <div class="rvo-radio-button__group">
                          <label class="rvo-custom-radio-button" for="optionA"
                            ><input
                              id="optionA"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option A</label
                          ><label class="rvo-custom-radio-button" for="optionB"
                            ><input
                              id="optionB"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option B</label
                          ><label class="rvo-custom-radio-button" for="optionC"
                            ><input
                              id="optionC"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option C</label
                          ><label class="rvo-custom-radio-button" for="optionD"
                            ><input
                              id="optionD"
                              name="radio-buttons"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option D</label
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
                            >Radio buttons invalid</label
                          >
                          <div
                            class="utrecht-form-field-description utrecht-form-field-description--invalid rvo-form-feedback rvo-form-feedback--error"
                          >
                            <span
                              class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--md rvo-status-icon-foutmelding rvo-status-icon-foutmelding"
                              role="img"
                              aria-label="Foutmelding"
                            ></span
                            >This is an error
                          </div>
                        </div>
                        <div
                          class="rvo-radio-button__group rvo-radio-button__group--error"
                        >
                          <label
                            class="rvo-custom-radio-button"
                            for="optionA-error"
                            ><input
                              id="optionA-error"
                              name="radio-buttons-error"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option A</label
                          ><label
                            class="rvo-custom-radio-button"
                            for="optionB-error"
                            ><input
                              id="optionB-error"
                              name="radio-buttons-error"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option B</label
                          ><label
                            class="rvo-custom-radio-button"
                            for="optionC-error"
                            ><input
                              id="optionC-error"
                              name="radio-buttons-error"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option C</label
                          ><label
                            class="rvo-custom-radio-button"
                            for="optionD-error"
                            ><input
                              id="optionD-error"
                              name="radio-buttons-error"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option D</label
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
                            >Radio buttons with warning</label
                          >
                          <div
                            class="utrecht-form-field-description utrecht-form-field-description--warning rvo-form-feedback rvo-form-feedback--warning"
                          >
                            <span
                              class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--md rvo-status-icon-waarschuwing rvo-status-icon-waarschuwing"
                              role="img"
                              aria-label="Waarschuwing"
                            ></span
                            >This is a warning
                          </div>
                        </div>
                        <div class="rvo-radio-button__group">
                          <label
                            class="rvo-custom-radio-button"
                            for="optionA-warning"
                            ><input
                              id="optionA-warning"
                              name="radio-buttons-warning"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option A</label
                          ><label
                            class="rvo-custom-radio-button"
                            for="optionB-warning"
                            ><input
                              id="optionB-warning"
                              name="radio-buttons-warning"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option B</label
                          ><label
                            class="rvo-custom-radio-button"
                            for="optionC-warning"
                            ><input
                              id="optionC-warning"
                              name="radio-buttons-warning"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option C</label
                          ><label
                            class="rvo-custom-radio-button"
                            for="optionD-warning"
                            ><input
                              id="optionD-warning"
                              name="radio-buttons-warning"
                              type="radio"
                              class="utrecht-custom-radio-button"
                            />Option D</label
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
                            >Checkboxes</label
                          >
                          <div
                            id="helperTextId"
                            class="utrecht-form-field-description"
                          >
                            This is an helper text
                          </div>
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
                            />Option A</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionB-cb"
                            ><Checkbox
                              id="optionB-cb"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option B</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionC-cb"
                            ><Checkbox
                              id="optionC-cb"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option C</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionD-cb"
                            ><Checkbox
                              id="optionD-cb"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option D</label
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
                            >Checkboxes with error</label
                          >
                          <div
                            class="utrecht-form-field-description utrecht-form-field-description--invalid rvo-form-feedback rvo-form-feedback--error"
                          >
                            <span
                              class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--md rvo-status-icon-foutmelding rvo-status-icon-foutmelding"
                              role="img"
                              aria-label="Foutmelding"
                            ></span
                            >This is an error
                          </div>
                        </div>
                        <div
                          class="rvo-checkbox__group rvo-radio-button__group--error"
                        >
                          <label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionA-cb-error"
                            ><Checkbox
                              id="optionA-cb-error"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option A</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionB-cb-error"
                            ><Checkbox
                              id="optionB-cb-error"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option B</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionC-cb-error"
                            ><Checkbox
                              id="optionC-cb-error"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option C</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionD-cb-error"
                            ><Checkbox
                              id="optionD-cb-error"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option D</label
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
                            >Checkboxes with a warning</label
                          >
                          <div
                            class="utrecht-form-field-description utrecht-form-field-description--warning rvo-form-feedback rvo-form-feedback--warning"
                          >
                            <span
                              class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--md rvo-status-icon-waarschuwing rvo-status-icon-waarschuwing"
                              role="img"
                              aria-label="Waarschuwing"
                            ></span
                            >This is a warning
                          </div>
                        </div>
                        <div class="rvo-checkbox__group">
                          <label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionA-cb-warning"
                            ><Checkbox
                              id="optionA-cb-warning"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option A</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionB-cb-warning"
                            ><Checkbox
                              id="optionB-cb-warning"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option B</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionC-cb-warning"
                            ><Checkbox
                              id="optionC-cb-warning"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option C</label
                          ><label
                            class="rvo-checkbox rvo-checkbox--not-checked"
                            for="optionD-cb-warning"
                            ><Checkbox
                              id="optionD-cb-warning"
                              name="group"
                              class="rvo-checkbox__input"
                              value=""
                            />Option D</label
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
                            >Select</label
                          >
                        </div>
                        <div class="rvo-select-wrapper">
                          <select
                            id="field"
                            class="utrecht-select utrecht-select--html-select"
                          >
                            <option>Option #1</option>
                            <option>Option #2</option>
                            <option>Option #3</option>
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
                        Other
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
                            >File</label
                          >
                        </div>
                        <Textbox
                          id="field"
                          type="file"
                          class="rvo-file-input"
                          multiple=""
                        />
                      </div>
                      <div
                        class="utrecht-form-field rvo-form-field rvo-layout-column rvo-layout-gap--sm"
                      >
                        <div
                          class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                        >
                          <label
                            for="fieldId"
                            class="utrecht-form-label rvo-form-field__label-text"
                            >Date</label
                          >
                        </div>
                        <input
                          type="date"
                          id="field"
                          placeholder=""
                          class="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--sm"
                          value=""
                        />
                      </div>
                      <div
                        class="utrecht-form-field rvo-form-field rvo-layout-column rvo-layout-gap--sm"
                      >
                        <div
                          class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                        >
                          <label
                            for="fieldId"
                            class="utrecht-form-label rvo-form-field__label-text"
                            >Time</label
                          >
                        </div>
                        <input
                          type="time"
                          id="field"
                          placeholder=""
                          class="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--sm"
                          value=""
                        />
                      </div>
                    </fieldset>
                  </div>
                  <Paragraph class="utrecht-button-group">
                    <button
                      class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
                      type="button"
                    >
                      Primary action</button
                    ><button
                      class="utrecht-button utrecht-button--secondary-action utrecht-button--rvo-md"
                      type="button"
                    >
                      Secondary action
                    </button>
                  </Paragraph>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
