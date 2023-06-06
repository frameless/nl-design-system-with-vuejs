<script setup lang="ts">
import { Heading, PageHeader } from "@utrecht/component-library-vue";
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
      <nav class="rvo-topnav rvo-topnav--md">
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
        <div>
          <Heading :level="1" class="utrecht-heading-1">Table</Heading>
          <div class="rvo-table--responsive">
            <table class="rvo-table">
              <caption class="rvo-caption">
                Table description.
              </caption>
              <thead class="rvo-table-head">
                <tr class="rvo-table-row">
                  <th scope="col" class="rvo-table-header">Title</th>
                  <th
                    scope="col"
                    class="rvo-table-header rvo-table-header--sortable"
                  >
                    Text
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--sm rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Delta omlaag"
                    ></span>
                  </th>
                  <th
                    scope="col"
                    class="rvo-table-header rvo-table-header--numeric"
                  >
                    Price ($)
                  </th>
                  <th
                    scope="col"
                    class="rvo-table-header rvo-table-header--empty-title"
                  ></th>
                </tr>
              </thead>
              <tbody class="rvo-table-body">
                <tr class="rvo-table-row">
                  <td class="rvo-table-cell">Title value</td>
                  <td class="rvo-table-cell">Text value</td>
                  <td class="rvo-table-cell rvo-table-cell--numeric">57</td>
                  <td class="rvo-table-cell rvo-table-cell--link">
                    <a href="#" class="rvo-link">Link</a>
                  </td>
                </tr>
                <tr class="rvo-table-row">
                  <td class="rvo-table-cell">Title value</td>
                  <td class="rvo-table-cell">Text value</td>
                  <td class="rvo-table-cell rvo-table-cell--numeric">57</td>
                  <td class="rvo-table-cell rvo-table-cell--link">
                    <a href="#" class="rvo-link">Link</a>
                  </td>
                </tr>
                <tr class="rvo-table-row">
                  <td class="rvo-table-cell">Title value</td>
                  <td class="rvo-table-cell">Text value</td>
                  <td class="rvo-table-cell rvo-table-cell--numeric">57</td>
                  <td class="rvo-table-cell rvo-table-cell--link">
                    <a href="#" class="rvo-link">Link</a>
                  </td>
                </tr>
                <tr class="rvo-table-row">
                  <td class="rvo-table-cell">Title value</td>
                  <td class="rvo-table-cell">Text value</td>
                  <td class="rvo-table-cell rvo-table-cell--numeric">57</td>
                  <td class="rvo-table-cell rvo-table-cell--link">
                    <a href="#" class="rvo-link">Link</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
