<script setup lang="ts">
import { Heading } from "@utrecht/component-library-vue";
import { Paragraph } from "@utrecht/component-library-vue";
import { PageHeader } from "@utrecht/component-library-vue";
import { Link } from "@utrecht/component-library-vue";
import { Table } from "@utrecht/component-library-vue";
</script>

<template>
  <div class="rvo-demo-page rvo-demo-page--mijn-rvo">
    <div class="rvo-header-content">
      <PageHeader class="rvo-header">
        <div class="rvo-header__logo-wrapper">
          <Link href="/" class="rvo-header__logo-link"
            ><img
              src="../images/logo.svg"
              alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
              class="rvo-logo-img rvo-header__logo-img"
          /></Link>
        </div>
      </PageHeader>
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
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                  >Zaken</Link
                >
              </li>
              <li class="utrecht-topnav__item">
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--diensten&amp;viewMode=story"
                  >Diensten</Link
                >
              </li>
              <li class="utrecht-topnav__item">
                <Link class="utrecht-topnav__link" href="#">Help</Link>
              </li>
              <li class="utrecht-topnav__item">
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--profiel&amp;viewMode=story"
                  >Profiel</Link
                >
              </li>
              <li
                class="utrecht-topnav__item utrecht-topnav__item--align-right"
              >
                <Link
                  class="utrecht-topnav__link"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                  >Uitloggen</Link
                >
              </li>
              <li class="utrecht-topnav__item">
                <Link class="utrecht-topnav__link" href="#"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-wereldbol rvo-icon--lg rvo-icon--wit"
                    role="img"
                    aria-label="Wereldbol"
                  ></span
                  >English</Link
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
            <li class="utrecht-topnav__item">
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                >Zaken</Link
              >
            </li>
            <li class="utrecht-topnav__item">
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--diensten&amp;viewMode=story"
                >Diensten</Link
              >
            </li>
            <li class="utrecht-topnav__item">
              <Link class="utrecht-topnav__link" href="#">Help</Link>
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--active">
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--profiel&amp;viewMode=story"
                >Profiel</Link
              >
            </li>
            <li class="utrecht-topnav__item utrecht-topnav__item--align-right">
              <Link
                class="utrecht-topnav__link"
                href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
                >Uitloggen</Link
              >
            </li>
            <li class="utrecht-topnav__item">
              <Link class="utrecht-topnav__link" href="#"
                ><span
                  class="utrecht-icon rvo-icon rvo-icon-wereldbol rvo-icon--lg rvo-icon--wit"
                  role="img"
                  aria-label="Wereldbol"
                ></span
                >English</Link
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="rvo-hero rvo-hero--man-met-laptop">
        <div class="rvo-hero-bg-img-container">
          <img
            src="../images/hero-bg--vrouw-met-laptop.webp"
            class="rvo-hero-bg-img"
          />
        </div>
        <div class="rvo-max-width-layout rvo-max-width-layout--md">
          <div class="rvo-hero-content">
            <div class="rvo-hero-text">
              <Heading :level="1" class="utrecht-heading-1"
                >Mijn profiel</Heading
              >
              <Paragraph class="rvo-hero-description">
                Hier vindt u een overzicht van uw gegevens en machtigingen zoals
                deze bij ons bekend zijn.
              </Paragraph>
            </div>
            <div class="rvo-hero-img-container">
              <img src="../images/vrouw-met-laptop.webp" class="rvo-hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="rvo-max-width-layout rvo-max-width-layout--md">
        <main class="rvo-main rvo-main--profiel">
          <div class="rvo-main-content">
            <div class="rvo-layout-column rvo-layout-gap--2xl">
              <div class="rvo-layout-column rvo-layout-gap--md">
                <Heading :level="2">Mijn gegevens</Heading>
                <div class="rvo-layout-column rvo-layout-gap--2xs">
                  <Table class="rvo-data-list">
                    <dt>Adres</dt>
                    <dd>
                      Prinses Beatrixlaan 2<br />
                      2595AL s-GRAVENHAGE
                    </dd>
                    <dt>Postbus</dt>
                    <dd>
                      40217<br />
                      8004DE Zwolle
                    </dd>
                    <dt>KVK-nr.</dt>
                    <dd>27378529</dd>
                    <dt>Relatienummer</dt>
                    <dd>203465993</dd>
                    <dt>Telefoon</dt>
                    <dd>033 - 9858 857</dd>
                    <dt>Mobiel</dt>
                    <dd>06 - 7584 7463</dd>
                    <dt>E-mail</dt>
                    <dd>info@rvo.nl</dd>
                    <dt>Rekeningnummer</dt>
                    <dd>NL41INGB0705001490</dd>
                  </Table>
                  <Link
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-bewerken rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="Bewerken"
                    ></span
                    >Gegevens bewerken</Link
                  >
                </div>
              </div>
            </div>
          </div>
          <aside class="rvo-sidebar">
            <div class="rvo-machtigingen">
              <Heading :level="2">Wie heb ik gemachtigd?</Heading>
              <div class="rvo-machtigingen-item">
                <div class="rvo-machtigingen-title">
                  <Link
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="User"
                    ></span
                    >G.G.L. Luijten</Link
                  ><button
                    class="utrecht-button utrecht-button--subtle utrecht-button--warning rvo-layout-row rvo-layout-gap--xs utrecht-button--rvo-xs"
                    type="button"
                  >
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--md"
                    ></span
                    >Intrekken
                  </button>
                </div>
                <Paragraph class="rvo-machtigingen-description">
                  Voor alle diensten in Mijn machtigingen(volmacht)
                </Paragraph>
                <Paragraph class="rvo-machtigingen-date">
                  vanaf 14-02-2022 tot 13-02-2023
                </Paragraph>
              </div>
              <div class="rvo-machtigingen-item">
                <div class="rvo-machtigingen-title">
                  <Link
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="User"
                    ></span
                    >Maatschap A.F. Nijboer en L. van der Lei</Link
                  ><button
                    class="utrecht-button utrecht-button--subtle utrecht-button--warning utrecht-button--rvo-xs"
                    type="button"
                  >
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--xs rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Verwijderen"
                    ></span
                    >Intrekken
                  </button>
                </div>
                <Paragraph class="rvo-machtigingen-description">
                  VDM gegevens leveren aan
                </Paragraph>
                <Paragraph class="rvo-machtigingen-date"
                  >vanaf 14-02-2017</Paragraph
                >
              </div>
            </div>
            <div class="rvo-machtigingen">
              <Heading :level="2">Wie heeft mij gemachtigd?</Heading>
              <div class="rvo-machtigingen-item">
                <div class="rvo-machtigingen-title">
                  <Link
                    href="#"
                    class="rvo-link rvo-link--with-icon rvo-link--no-underline"
                    ><span
                      class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                      role="img"
                      aria-label="User"
                    ></span
                    >ACME</Link
                  ><button
                    class="utrecht-button utrecht-button--subtle utrecht-button--warning utrecht-button--rvo-xs"
                    type="button"
                  >
                    <span
                      class="utrecht-icon rvo-icon rvo-icon-verwijderen rvo-icon--xs rvo-icon--hemelblauw"
                      role="img"
                      aria-label="Verwijderen"
                    ></span
                    >Intrekken
                  </button>
                </div>
                <Paragraph class="rvo-machtigingen-description">
                  Natuurbeheer (agrarisch) SNL
                </Paragraph>
                <Paragraph class="rvo-machtigingen-date"
                  >vanaf 16-11-2021</Paragraph
                >
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
    <footer class="rvo-footer">
      <div class="rvo-max-width-layout rvo-max-width-layout--lg">
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <Heading :level="3">Algemeen</Heading>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Help</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Toegankelijkheid</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Webservices</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Privacy</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Sitemap</Link>
          </li>
        </ul>
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <Heading :level="3" class="utrecht-heading-3">Hoe werkt</Heading>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Machtigingen en TAN-codes</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Zaken regelen bij RVO</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Inschrijven en registreren</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Bedrijfsoverdracht melden</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Overlijden melden</Link>
          </li>
        </ul>
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <Heading :level="3">Naar</Heading>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Abonneren op nieuwsbrief</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Klantenpanel</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Berichtenbox voor bedrijven</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">RVO.nl</Link>
          </li>
        </ul>
        <ul class="rvo-footer-menu">
          <li class="rvo-footer-menu-title">
            <Heading :level="3">Contact</Heading>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Contactgegevens</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link">Contactformulier</Link>
          </li>
          <li class="rvo-footer-menu-item">
            <span
              class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
              role="img"
              aria-label="Delta naar rechts"
            ></span
            ><Link href="#" class="rvo-link"
              >Aanvraag voorlichting/spreker</Link
            >
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
