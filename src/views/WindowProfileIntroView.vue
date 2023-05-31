<template>
  <div class="rvo-demo-page rvo-demo-page--regelmaat">
    <div class="rvo-app rvo-app--profiel">
      <div class="rvo-app-container rvo-app-container--profiel">
        <div class="rvo-app-content">
          <h1 class="utrecht-heading-1">Profiel</h1>
          <p>
            Vul je profiel in om maatregelen te krijgen die voor jou van
            toepassing kunnen zijn.
          </p>
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
          <p class="utrecht-button-group">
            <a
              href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
              class="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
              >Overslaan</a
            ><a
              href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
              class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
              >Opslaan</a
            >
          </p>
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
