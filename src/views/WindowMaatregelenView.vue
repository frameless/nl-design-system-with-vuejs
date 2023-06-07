<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
</script>
<template>
  <div class="rvo-demo-page rvo-demo-page--regelmaat">
    <div class="rvo-app rvo-app--maatregelen">
      <div class="rvo-app-container rvo-app-container--maatregelen">
        <div class="rvo-app-content">
          <Heading :level="1">Suggesties</Heading>
          <Paragraph>
            Regelmaat heeft de volgende <strong>maatregelen</strong> voor u
            gevonden
          </Paragraph>
          <div class="rvo-alert rvo-alert--warning">
            <span
              class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--xl rvo-status-icon-waarschuwing"
              role="img"
              aria-label="Waarschuwing"
            ></span>
            <div class="rvo-alert-text">
              <div>
                <div>
                  Uw profiel is momenteel voor
                  <strong>80%</strong> ingevuld.&nbsp;<a
                    href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--profiel&amp;viewMode=story"
                    class="rvo-link rvo-link--no-underline"
                    >Maak uw profiel compleet</a
                  >&nbsp;om betere suggesties voor maatregelen te krijgen
                </div>
              </div>
            </div>
          </div>
          <ul class="rvo-maatregelen">
            <li class="rvo-maatregel">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregel&amp;viewMode=story"
                class="rvo-maatregel-link"
                >Onderzaai vanggewas</a
              >
              <details class="rvo-bewaar-knop">
                <summary class="rvo-maatregel-bewaar-link">
                  <span class="rvo-bewaar"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaar</span
                  ><span class="rvo-bewaard"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaard</span
                  >
                </summary>
              </details>
            </li>
            <li class="rvo-maatregel">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregel&amp;viewMode=story"
                class="rvo-maatregel-link"
                >Vroeg oogsten rooigewas</a
              >
              <details class="rvo-bewaar-knop">
                <summary class="rvo-maatregel-bewaar-link">
                  <span class="rvo-bewaar"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaar</span
                  ><span class="rvo-bewaard"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaard</span
                  >
                </summary>
              </details>
            </li>
            <li class="rvo-maatregel">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregel&amp;viewMode=story"
                class="rvo-maatregel-link"
                >Grasland met kruiden</a
              >
              <details class="rvo-bewaar-knop">
                <summary class="rvo-maatregel-bewaar-link">
                  <span class="rvo-bewaar"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaar</span
                  ><span class="rvo-bewaard"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaard</span
                  >
                </summary>
              </details>
            </li>
            <li class="rvo-maatregel">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregel&amp;viewMode=story"
                class="rvo-maatregel-link"
                >Rustgewas</a
              >
              <details class="rvo-bewaar-knop">
                <summary class="rvo-maatregel-bewaar-link">
                  <span class="rvo-bewaar"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaar</span
                  ><span class="rvo-bewaard"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaard</span
                  >
                </summary>
              </details>
            </li>
          </ul>
          Mogelijk ook interessant
          <ul class="rvo-maatregelen">
            <li class="rvo-maatregel">
              <a
                href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregel&amp;viewMode=story"
                class="rvo-maatregel-link"
                >Verlengde weidegang</a
              >
              <details class="rvo-bewaar-knop">
                <summary class="rvo-maatregel-bewaar-link">
                  <span class="rvo-bewaar"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaar</span
                  ><span class="rvo-bewaard"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Favoriet"
                    ></span
                    >Bewaard</span
                  >
                </summary>
              </details>
            </li>
          </ul>
        </div>
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
              class="rvo-app-menu-item-link rvo-app-menu-item-link--active"
              ><span
                class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--2xl rvo-icon--wit"
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
</template>
