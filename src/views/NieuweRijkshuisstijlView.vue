<script setup lang="ts">
import { PageHeader, Textbox } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-rhs-nieuw">
    <PageHeader class="rvo-header">
      <div class="rvo-header__logo-wrapper">
        <a href="/" class="rvo-header__logo-link--new"
          ><img src="../images/lint.svg" class="rvo-lint" /><span
            class="rvo-logo-tekst"
            >Rijksdienst voor Ondernemend Nederland</span
          ></a
        >
      </div>
    </PageHeader>
    <div class="rvo-layout-column rvo-layout-gap--2xl">
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
              <li
                class="utrecht-topnav__item utrecht-topnav__item--align-right"
              >
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
      </details>
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
      <div class="rvo-max-width-layout rvo-max-width-layout--sm">
        <main>
          <div class="rvo-form">
            <div class="intro"><h1 class="utrecht-heading-1">Heading</h1></div>
            <form>
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
                    <Textbox
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
                    <Textbox
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
                    <Textbox
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
                    <Textbox
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
                    <Textbox
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
                    <Textbox
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
                    <Textbox
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
                    <Textbox
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
                    <Textbox
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
                      <label class="rvo-custom-radio-button" for="optionA-error"
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
                        ><input
                          id="optionA-cb"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option A</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionB-cb"
                        ><input
                          id="optionB-cb"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option B</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionC-cb"
                        ><input
                          id="optionC-cb"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option C</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionD-cb"
                        ><input
                          id="optionD-cb"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
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
                        ><input
                          id="optionA-cb-error"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option A</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionB-cb-error"
                        ><input
                          id="optionB-cb-error"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option B</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionC-cb-error"
                        ><input
                          id="optionC-cb-error"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option C</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionD-cb-error"
                        ><input
                          id="optionD-cb-error"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
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
                        ><input
                          id="optionA-cb-warning"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option A</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionB-cb-warning"
                        ><input
                          id="optionB-cb-warning"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option B</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionC-cb-warning"
                        ><input
                          id="optionC-cb-warning"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
                          value=""
                        />Option C</label
                      ><label
                        class="rvo-checkbox rvo-checkbox--not-checked"
                        for="optionD-cb-warning"
                        ><input
                          id="optionD-cb-warning"
                          name="group"
                          class="rvo-checkbox__input"
                          type="checkbox"
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
        </main>
      </div>
    </div>
  </div>
</template>
