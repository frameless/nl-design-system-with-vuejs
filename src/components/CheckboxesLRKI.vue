<script setup lang="ts">
import { Checkbox } from "@utrecht/component-library-vue";
import { Heading } from "@utrecht/component-library-vue";
import { Paragraph } from "@utrecht/component-library-vue";
</script>

<template>
    <div>
        <Heading :level="2">Zoekresultaten</Heading>
        <br />
        <strong>Filter</strong>
        <br />
        <Paragraph>Gezocht op kinderopvangvoorziening: </Paragraph>
        <br />
        <strong>Soort</strong>
        <br />
    </div>
    <div class="rvo-checkbox__group row">
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
      id="optionD"
      name="group"
      class="rvo-checkbox__input"
      type="checkbox"
      value=""
    />
    Voormalig peuterspeelzaal
  </label>
</div>

    
</template>