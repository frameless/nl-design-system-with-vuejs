<template>
  <LogoDisplay>
    <div class="rvo-header-content">
      <header class="rvo-header">
        <div class="rvo-header__logo-wrapper">
          <a href="/" class="rvo-header__logo-link"
            ><img
              src="/src/images/logo.svg"
              alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
              class="rvo-logo-img rvo-header__logo-img"
          /></a>
        </div>
      </header>
      <details class="rvo-responsive-menu">
        <summary>
          <span
            class="utrecht-icon rvo-icon rvo-icon-menu rvo-icon--lg rvo-icon--wit"
          ></span
          ><span
            class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--lg rvo-icon--wit"
          ></span
          >Menu
        </summary>
        <div class="rvo-topnav__background">
          <nav
            class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--md"
          >
            <ul class="utrecht-topnav__list">
              <li class="utrecht-topnav__item">
                <a
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                  >Zaken</a
                >
              </li>
              <li class="utrecht-topnav__item">
                <a
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--diensten&amp;viewMode=story"
                  >Diensten</a
                >
              </li>
              <li class="utrecht-topnav__item">
                <a class="utrecht-topnav__link" href="#">Help</a>
              </li>
              <li class="utrecht-topnav__item">
                <a
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--profiel&amp;viewMode=story"
                  >Profiel</a
                >
              </li>
              <li
                class="utrecht-topnav__item utrecht-topnav__item--align-right"
              >
                <a
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                  >Uitloggen</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </details>
      <div class="rvo-topnav__background">
        <nav
          class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--md"
        >
          <ul class="utrecht-topnav__list">
            <li class="utrecht-topnav__item utrecht-topnav__item--active">
              <a class="utrecht-topnav__link" href="#">Home</a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#">Onderwerpen</a>
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#"
                >Subsidie- en financieringswijzer</a
              >
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#">Over ons</a>
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-zoek rvo-icon--lg rvo-icon--wit"
                  role="img"
                  aria-label="Zoek"
                ></span
                >Zoeken</a
              >
            </li>
            <li class="utrecht-topnav__item">
              <a class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--lg rvo-icon--wit"
                  role="img"
                  aria-label="User"
                ></span
                >Mijn RVO</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-hero rvo-hero--man-met-laptop">
        <div class="rvo-hero-bg-img-container">
          <img
            src="/src/images/hero-bg--man-met-laptop.webp"
            class="rvo-hero-bg-img"
          />
        </div>
        <div class="rvo-max-width-layout rvo-max-width-layout--md">
          <div class="rvo-hero-content">
            <div class="rvo-hero-text">
              <h1 data-v-7324134c="" class="utrecht-heading-1">
                Rijksdienst voor Ondernemend Nederland
              </h1>
              <p class="utrecht-paragraph rvo-hero-description">
                Onze mensen maken wereldwijd verbinding. Tussen bedrijven,
                kennis- en financiële instellingen, ambassades en lokale
                overheden.
              </p>
            </div>
            <div class="rvo-hero-img-container">
              <img src="/src/images/man-met-laptop.webp" class="rvo-hero-img" />
            </div>
          </div>
        </div>
      </div>
      <main class="rvo-main--mijn-zaken"></main>
    </div>
    <!-- html elementen -->
    <!-- <div className="rvo-logo">
      <div className="rvo-logo__emblem">
        <img src={EmblemSrc} alt={`${title || ''}${subtitle.length ? `, ${subtitle}` : ''}`} />
      </div>
      <div className="rvo-logo__wordmark">
        <p className="rvo-logo__title">{title}</p>
        {subtitle && <p className="rvo-logo__subtitle">{subtitle}</p>}
      </div>
    </div> -->
  </LogoDisplay>
</template>

<script lang="ts">
// export const LogoWithText: React.FC<ILogoProps> = ({ title = defaultArgs.title, subtitle = defaultArgs.subtitle }) => {
//   return (
//     <div className="rvo-logo">
//       <div className="rvo-logo__emblem">
//         <img src={EmblemSrc} alt={`${title || ''}${subtitle.length ? `, ${subtitle}` : ''}`} />
//       </div>
//       <div className="rvo-logo__wordmark">
//         <p className="rvo-logo__title">{title}</p>
//         {subtitle && <p className="rvo-logo__subtitle">{subtitle}</p>}
//       </div>
//     </div>
//   );
// };
</script>

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
