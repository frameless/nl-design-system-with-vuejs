<script setup lang="ts">
import { Paragraph, PageHeader } from "@utrecht/component-library-vue"
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
      <div class="rvo-max-width-layout rvo-max-width-layout--lg">
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
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten&amp;viewMode=story"
                class="rvo-link rvo-progress-tracker__step-link"
                >Kosten</a
              >
            </div>
            <div
              class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
            >
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--bijlagen"
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
                <h1 class="utrecht-heading-1">Kosten en subsidies</h1>
              </div>
              <div class="rvo-table--responsive">
                <div class="rvo-layout-column rvo-layout-gap--sm">
                  <table class="rvo-table">
                    <caption class="rvo-caption">
                      Aanschafkosten
                    </caption>
                    <thead class="rvo-table-head">
                      <tr class="rvo-table-row">
                        <th
                          scope="col"
                          class="rvo-table-header rvo-table-header--numeric"
                        >
                          Aanschafkosten (€)
                        </th>
                        <th
                          scope="col"
                          class="rvo-table-header rvo-table-header--numeric"
                        >
                          Eigen aandeel financiering (€)
                        </th>
                        <th
                          scope="col"
                          class="rvo-table-header rvo-table-header--numeric"
                        >
                          Subsidiabel bedrag (€)
                        </th>
                        <th
                          scope="col"
                          class="rvo-table-header rvo-table-header--empty-title"
                        ></th>
                      </tr>
                    </thead>
                    <tbody class="rvo-table-body">
                      <tr class="rvo-table-row">
                        <td class="rvo-table-cell rvo-table-cell--numeric">
                          235.000,00
                        </td>
                        <td class="rvo-table-cell rvo-table-cell--numeric">
                          235.000,00
                        </td>
                        <td class="rvo-table-cell rvo-table-cell--numeric">
                          200.000,00
                        </td>
                        <td class="rvo-table-cell rvo-table-cell--link">
                          <form>
                            <button
                              class="utrecht-button utrecht-button--subtle utrecht-button--warning utrecht-button--rvo-xs"
                              type="button"
                            >
                              <span
                                class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--md rvo-icon--hemelblauw rvo-button__icon--warning-subtle-action"
                                role="img"
                                aria-label="Verwijderen"
                              ></span
                              >Verwijderen</button
                            ><button
                              class="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                              type="button"
                            >
                              <span
                                class="utrecht-icon rvo-icon rvo-icon-bewerken rvo-icon--md rvo-icon--hemelblauw rvo-button__icon--tertiary-action"
                                role="img"
                                aria-label="Bewerken"
                              ></span
                              >Wijzigen
                            </button>
                          </form>
                        </td>
                      </tr>
                      <tr class="rvo-table-row">
                        <td class="rvo-table-cell rvo-table-cell--numeric">
                          135.000,00
                        </td>
                        <td class="rvo-table-cell rvo-table-cell--numeric">
                          135.000,00
                        </td>
                        <td class="rvo-table-cell rvo-table-cell--numeric">
                          100.000,00
                        </td>
                        <td class="rvo-table-cell rvo-table-cell--link">
                          <form>
                            <button
                              class="utrecht-button utrecht-button--subtle utrecht-button--warning utrecht-button--rvo-xs"
                              type="button"
                            >
                              <span
                                class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--md rvo-icon--hemelblauw rvo-button__icon--warning-subtle-action"
                                role="img"
                                aria-label="Verwijderen"
                              ></span
                              >Verwijderen</button
                            ><button
                              class="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                              type="button"
                            >
                              <span
                                class="utrecht-icon rvo-icon rvo-icon-bewerken rvo-icon--md rvo-icon--hemelblauw rvo-button__icon--tertiary-action"
                                role="img"
                                aria-label="Bewerken"
                              ></span
                              >Wijzigen
                            </button>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten-opvoeren"
                    class="rvo-link rvo-link--with-icon"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="Plus"
                    ></span
                    >Kosten toevoegen</a
                  >
                </div>
              </div>
              <div class="rvo-table--responsive">
                <div class="rvo-layout-column rvo-layout-gap--sm">
                  <table class="rvo-table">
                    <caption class="rvo-caption">
                      Andere subsidies
                    </caption>
                    <thead class="rvo-table-head">
                      <tr class="rvo-table-row">
                        <th scope="col" class="rvo-table-header">
                          Naam subsidieregeling
                        </th>
                        <th scope="col" class="rvo-table-header">
                          Subsidieverstreker
                        </th>
                        <th scope="col" class="rvo-table-header">Status</th>
                        <th
                          scope="col"
                          class="rvo-table-header rvo-table-header--numeric"
                        >
                          Subsidiebedrag (€)
                        </th>
                        <th
                          scope="col"
                          class="rvo-table-header rvo-table-header--empty-title"
                        ></th>
                      </tr>
                    </thead>
                    <tbody class="rvo-table-body">
                      <tr class="rvo-table-row">
                        <td class="rvo-table-cell">Naam regeling</td>
                        <td class="rvo-table-cell">Gemeente</td>
                        <td class="rvo-table-cell">Verleend</td>
                        <td class="rvo-table-cell rvo-table-cell--numeric">
                          25.000,00
                        </td>
                        <td class="rvo-table-cell rvo-table-cell--link">
                          <form>
                            <button
                              class="utrecht-button utrecht-button--subtle utrecht-button--warning utrecht-button--rvo-xs"
                              type="button"
                            >
                              <span
                                class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--md rvo-icon--hemelblauw rvo-button__icon--warning-subtle-action"
                                role="img"
                                aria-label="Verwijderen"
                              ></span
                              >Verwijderen</button
                            ><button
                              class="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-xs"
                              type="button"
                            >
                              <span
                                class="utrecht-icon rvo-icon rvo-icon-bewerken rvo-icon--md rvo-icon--hemelblauw rvo-button__icon--tertiary-action"
                                role="img"
                                aria-label="Bewerken"
                              ></span
                              >Wijzigen
                            </button>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" class="rvo-link rvo-link--with-icon"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="Plus"
                    ></span
                    >Subsidie toevoegen</a
                  >
                </div>
              </div>
              <h2 class="utrecht-heading-2">Berekening</h2>
              <dl class="rvo-data">
                <dt>Andere subsidies</dt>
                <dd>€ 25.000,00</dd>
                <dt>Deze subsidie</dt>
                <dd>€ 25.000,00</dd>
              </dl>
              <div class="rvo-alert rvo-alert--warning">
                <span
                  class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-waarschuwing"
                  role="img"
                  aria-label="Waarschuwing"
                ></span>
                <div class="rvo-alert-text">
                  <Paragraph>
                    De subsidie van uw investering kan maximaal € 25.000,00
                    bedragen. Dit is berekend aan de hand van de subsidiabele
                    kosten van uw investering en uw andere subsidies.
                  </Paragraph>
                </div>
              </div>
              <div class="rvo-button-group">
                <a
                  class="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
                  >Opslaan en sluiten</a
                ><a
                  class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                  href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--bijlagen"
                  >Opslaan en verder</a
                >
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
