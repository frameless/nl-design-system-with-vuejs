<script setup lang="ts">
import { PageHeader, Paragraph, Heading } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--sub-menu">
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
    <div class="rvo-layout-column rvo-layout-gap--md">
      <div class="rvo-navigation">
        <div class="rvo-topnav__background">
          <nav
            class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--md"
          >
            <ul class="utrecht-topnav__list">
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#">Home</a>
              </li>
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#">Expanded menu item</a>
              </li>
              <li
                class="utrecht-topnav__item utrecht-topnav__item--align-right"
              >
                <a class="utrecht-topnav__link" href="#">Uitloggen</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="rvo-tmp-submenu-wrapper">
          <div class="rvo-topnav__background">
            <nav
              class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--md"
            >
              <ul class="utrecht-topnav__list">
                <li class="utrecht-topnav__item">
                  <a class="utrecht-topnav__link" href="#">Submenu item</a>
                </li>
                <li class="utrecht-topnav__item">
                  <a class="utrecht-topnav__link" href="#">Submenu item</a>
                </li>
                <li
                  class="utrecht-topnav__item utrecht-topnav__item--align-right"
                >
                  <a class="utrecht-topnav__link" href="#">Submenu item</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <main class="rvo-max-width-layout rvo-max-width-layout--sm">
        <div class="rvo-content">
          <Heading :level="1" class="utrecht-heading-1"
            >Default submenu</Heading
          >
          <Paragraph class="rvo-paragraph rvo-paragraph--md">
            A submenu is expanded when a user clicks on an expandable menu item
            which label is followed by a downwards chevron. The submenu expands
            in place not overlapping existing content.
          </Paragraph>
        </div>
      </main>
    </div>
  </div>
</template>
