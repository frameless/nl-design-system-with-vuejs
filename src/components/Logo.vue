<script lang="ts">
import { PageHeader } from "@utrecht/component-library-vue";
</script>

<template>
  <LogoHeader>
    <header data-v-da3bd1b2="" class="utrecht-page-header rvo-header">
      <div data-v-da3bd1b2="" class="rvo-header__logo-wrapper">
        <a data-v-da3bd1b2="" href="/" class="rvo-header__logo-link"
          ><img
            data-v-da3bd1b2=""
            src="/src/images/logo.svg"
            alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
            class="rvo-logo-img rvo-header__logo-img"
        /></a>
      </div>
    </header>
  </LogoHeader>
</template>

<!-- <script lang="ts">
export const LogoWithText: React.FC<ILogoProps> = ({ title = defaultArgs.title, subtitle = defaultArgs.subtitle }) => {
  return (
    <div className="rvo-logo">
      <div className="rvo-logo__emblem">
        <img src={EmblemSrc} alt={`${title || ''}${subtitle.length ? `, ${subtitle}` : ''}`} />
      </div>
      <div className="rvo-logo__wordmark">
        <p className="rvo-logo__title">{title}</p>
        {subtitle && <p className="rvo-logo__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};
</script> -->

<style scoped>
.rvo-logo {
  align-items: center;
  color: var(--rvo-logo-color);
  display: flex;
  flex-direction: row;
  font-family: var(--rvo-logo-font-family);
  font-size: var(--rvo-logo-font-size, 1em);
  gap: var(--rvo-space-sm);
  line-height: var(--rvo-line-height-sm);
}

.rvo-logo__emblem {
  align-self: flex-start;
  height: 101px;
  width: 51px;
}

.rvo-logo__wordmark {
  align-self: flex-start;
  margin-block-start: 48px;
}

.rvo-logo__subtitle {
  font-style: italic;
}

.rvo-logo__title,
.rvo-logo__subtitle {
  margin-block-end: 0;
  margin-block-start: 0;
  max-width: 200px;
  white-space: pre-line;
}
</style>
