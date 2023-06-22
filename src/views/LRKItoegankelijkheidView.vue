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
          <Link href="/" class="rvo-header__logo-link"
            ><img
              src="../images/logo.svg"
              alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
              class="rvo-logo-img rvo-header__logo-img"
          /></Link>
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
            <Heading :level="3">Toegankelijkheid </Heading
            ><Paragraph
              >In Nederland willen we dat openbare voorzieningen toegankelijk
              zijn voor alle burgers. Dat geldt ook voor alle DUO-websites. Want
              ieder mens heeft het recht om net als ieder ander mee te doen in
              de maatschappij.
            </Paragraph>

            <Heading :level="3">Toegankelijkheidseisen </Heading
            ><Paragraph
              >Een toegankelijke website is voor alle gebruikers beter te
              gebruiken. Daarom gelden er functioneel-technische en redactionele
              toegankelijkheidseisen (voorheen 'webrichtlijnen') voor websites
              van de overheid. Deze zijn vastgelegd in de
              toegankelijkheidsstandaard Digitoegankelijk EN 301 549.
            </Paragraph>

            <Heading :level="3"
              >Toegankelijkheidsverklaring Landelijk Register Kinderopvang (LRK) </Heading
            ><Paragraph>
              Deze verklaring geldt voor de website(s):
              <Link href="https://www.landelijkregisterkinderopvang.nl"
                >https://www.landelijkregisterkinderopvang.nl</Link
              >
              <br />Ga naar de
              <Link
                href="https://www.toegankelijkheidsverklaring.nl/register/549"
                >Verklaring van landelijkregisterkinderopvang</Link
              >
              voor de volledige toegankelijkheidsverklaring van het LRK
            </Paragraph>

            <Heading :level="3"
              >Maatregelen bevorderen toegankelijkheid LRK</Heading
            >
            <Paragraph
              ><strong>Onderzoek:</strong> Onafhankelijke deskundigen toetsen
              regelmatig (onderdelen van) onze website op toegankelijkheid.
              Gevonden knelpunten lossen wij duurzaam op. <br /><strong
                >Periodieke interne controle:</strong
              >
              Onze redactie voert periodiek tussentijdse controles uit op de
              content. <br /><strong>Automatische toetsen:</strong> Wij laten
              onze website regelmatig toetsen door een automatische
              toetstool.</Paragraph
            >

            <Heading :level="3"
              >Probleem met de toegankelijkheid van deze website?</Heading
            >
            <Paragraph
              >Als u ondanks de maatregelen die wij al hebben genomen een
              toegankelijkheidsprobleem ervaart op onze website, laat het ons
              dan weten. Bekijk onze
              <Link
                href="https://www.duo.nl/zakelijk/contact/contact-kinderopvang.jsp"
                >contactgegevens.</Link
              ></Paragraph
            >

            <Heading :level="3">Meer weten?</Heading>
            <Paragraph
              >Wilt u meer weten over toegankelijkheid bij DUO? Kijk dan op
              <Link href="https://duo.nl/toegankelijkheid.jsp"
                >duo.nl/toegankelijkheid.</Link
              ></Paragraph
            >
          </div>
        </div>
      </main>
    </div>
    <PageFooter />
  </div>
</template>
