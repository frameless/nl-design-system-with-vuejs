<script setup lang="ts">
import { Paragraph } from "@utrecht/component-library-vue";
import { PageHeader } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import {} from "./components/PageFooterRVO.vue";
import { BreadcrumbNav, BreadcrumbLink } from "@utrecht/component-library-vue";
import { Link } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="lrki-theme rvo-demo-page rvo-demo-page--mijn-rvo">
    <div class="rvo-header-content">
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
        <BreadcrumbNav
          class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--sm"
        >
          <BreadcrumbLink href="/" :rel="Home" :index="0">Home</BreadcrumbLink>
          <BreadcrumbLink href="/LRKIcontactView" :index="3" :current="true"
            >Contact</BreadcrumbLink
          >
        </BreadcrumbNav>
      </div>
      <main>
        <div class="rvo-max-width-layout rvo-max-width-layout--sm main-content">
          <div class="rvo-main-content">
            <Heading :level="3">Contact</Heading
            ><Paragraph
              >Voor meer informatie en antwoord op uw vragen kunt u terecht bij
              <img
                src="../../node_modules/@nl-rvo/assets/icons/functioneel/diagonale-pijl.svg"
                class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
              />
              <Link
                href="https://www.rijksoverheid.nl/onderwerpen/kinderopvang/"
                >Kinderopvang
              </Link>
            </Paragraph>
          </div>
        </div>
      </main>
    </div>
    <PageFooter />
  </div>
</template>
