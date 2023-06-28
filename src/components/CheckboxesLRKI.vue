<script setup lang="ts">
import { Checkbox } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Paragraph } from "@utrecht/component-library-vue";

import { ref } from "vue";

const activeTab = ref("checkboxes");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<template>
  <div>
    <div class="lrki-tab-container">
      <div
        class="lrki-tab"
        :class="{ 'lrki-active-tab': activeTab === 'checkboxes' }"
        @click="changeTab('checkboxes')"
      >
        <img
          src="../../node_modules/@nl-rvo/assets/icons/navigatie/kompas.svg"
          class="lrki-tab-icon"
        />
        Lijst
      </div>
      <div
        class="lrki-tab"
        :class="{ 'lrki-active-tab': activeTab === 'otherTab' }"
        @click="changeTab('otherTab')"
      >
        <img
          src="../../node_modules/@nl-rvo/assets/icons/navigatie/locatiemarker-met-vinkje.svg"
          class="lrki-tab-icon"
        />
        Kaart
      </div>
    </div>
    <div class="lrki-container" v-show="activeTab === 'checkboxes'">
      <div class="checkbox-column">
        <strong>Soort</strong>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionA">
          <input
            id="optionA"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Kinderdagverblijf (0-4 jaar)
        </label>
        <label class="rvo-checkbox rvo-checkbox--checked" for="optionB">
          <input
            id="optionB"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            checked=""
            value=""
          />
          Buitenschoolse opvang (4-13 jaar)
        </label>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionC">
          <input
            id="optionC"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Gastouderopvang (0-13 jaar)
        </label>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionD">
          <input
            id="optionD"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Gastouderbureau
        </label>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionE">
          <input
            id="optionE"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Voormalig peuterspeelzaal
        </label>
      </div>
      <div class="checkbox-row">
        <div class="checkbox-column">
          <strong>Extra</strong>
          <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionE">
            <input
              id="optionE"
              name="group"
              class="rvo-checkbox__input"
              type="checkbox"
              value=""
            />
            Voorschoolse educatie
          </label>
          <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionE">
            <input
              id="optionE"
              name="group"
              class="rvo-checkbox__input"
              type="checkbox"
              value=""
            />
            Ouderparticipatiecrèche
          </label>
        </div>
        <div class="checkbox-column">
          <strong>Status</strong>
          <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionE">
            <input
              id="optionE"
              name="group"
              class="rvo-checkbox__input"
              type="checkbox"
              value=""
            />
            Geregistreerd
          </label>
          <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionE">
            <input
              id="optionE"
              name="group"
              class="rvo-checkbox__input"
              type="checkbox"
              value=""
            />
            Niet meer geregistreerd
          </label>
        </div>
      </div>
    </div>
    <div v-show="activeTab === 'otherTab'">
      <div class="checkbox-column lrki-container">
        <strong>Soort</strong>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionA">
          <input
            id="optionA"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Kinderdagverblijf (0-4 jaar)
        </label>
        <label class="rvo-checkbox rvo-checkbox--checked" for="optionB">
          <input
            id="optionB"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            checked=""
            value=""
          />
          Buitenschoolse opvang (4-13 jaar)
        </label>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionC">
          <input
            id="optionC"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Gastouderopvang (0-13 jaar)
        </label>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionD">
          <input
            id="optionD"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Gastouderbureau
        </label>
        <label class="rvo-checkbox rvo-checkbox--not-checked" for="optionE">
          <input
            id="optionE"
            name="group"
            class="rvo-checkbox__input"
            type="checkbox"
            value=""
          />
          Voormalig peuterspeelzaal
        </label>
      </div>
      <!-- Kaart tab -->
    </div>
  </div>
</template>
