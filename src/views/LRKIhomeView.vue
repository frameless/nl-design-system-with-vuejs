<script setup lang="ts">
import {
  Paragraph,
  Textbox,
  FormField,
  Button,
  FormLabel,
} from "@utrecht/component-library-vue";
import { PageHeader } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import {} from "./components/PageFooterRVO.vue";
import { BreadcrumbNav } from "@utrecht/component-library-vue";
import { RadioButton } from "@utrecht/component-library-vue";
import { BreadcrumbLink } from "@utrecht/component-library-vue";
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
      <main class="rvo-main-content">
        <div class="lrki-searchform">
          <Heading :level="2">Zoek in het register</Heading>

          <div class="lrki-search-container">
            <img src="" 
                                  class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"/>
            <Paragraph>Zoek een</Paragraph>
            <div class="radio-buttons">
              <FormField type="radio">
                <RadioButton
                  name="example-radio-button"
                  @update:modelValue="updateModelValue"
                  id="radio1"
                />
                <FormLabel for="radio1">kinderopvangvoorziening</FormLabel>
              </FormField>
              <FormField type="radio">
                <RadioButton
                  name="example-radio-button"
                  @update:modelValue="updateModelValue"
                  id="radio2"
                />
                <FormLabel for="radio2"
                  >eigenaar van een kinderopvangvoorziening</FormLabel
                >
              </FormField>
            </div>
            <div class="searchbar-form">
              <Paragraph>Kenmerk</Paragraph>
              <Textbox
                name="default-textbox"
                id="default-textbox"
                placeholder="Vul bijvoorbeeld een naam of een KvK-nummer in"
                @update:modelValue="updateModelValue"
                >Vul bijvoorbeeld een naam of een KvK-nummer in</Textbox
              >
            </div>
            <Button appearance="primary-action-button"> Zoeken</Button>
          </div>
        </div>
      </main>
    </div>
    <PageFooter />
  </div>
</template>
