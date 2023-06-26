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
          <BreadcrumbLink href="/" :rel="Home" :index="0">
            <img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/home.svg"
              class="utrecht-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit" />
            Home
            <img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-naar-rechts.svg"
              class="utrecht-icon rvo-icon-delta-omhoog rvo-icon--md"
          /></BreadcrumbLink>
          <BreadcrumbLink href="/LRKIcontactView" :index="3" :current="true"
            >Contact</BreadcrumbLink
          >
        </BreadcrumbNav>
      </div>
      <main>
        <div class="rvo-max-width-layout rvo-max-width-layout--sm main-content">
          <div class="rvo-main-content"></div>

          <Heading :level="1">Vraag en antwoord</Heading>
          <br />
          <br />
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Wat staat er in het Landelijk Register Kinderopvang?
          </Heading>
          <Paragraph>
            In het Landelijk Register Kinderopvang (LRK) staat informatie over
            kinderopvangvoorzieningen zoals adresgegevens, inspectierapporten en
            het registratienummer. Ook vindt u in het LRK een samenvatting van
            het inspectierapport en of er is gehandhaafd. Zo ziet u snel
            informatie over de kwaliteit van de opvangvoorziening.</Paragraph
          >
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Wanneer heeft een ouder recht op kinderopvangtoeslag?</Heading
          >
          <Paragraph
            >Om recht te hebben op kinderopvangtoeslag, moet de ouder zijn/haar
            kind laten opvangen bij een kinderopvangvoorziening die is
            geregistreerd in het Landelijk Register Kinderopvang (LRK). Een
            geregistreerde opvangvoorziening krijgt een registratienummer, dat
            is te vinden in het LRK. Bij de aanvraag van de kinderopvangtoeslag
            moet de ouder dit nummer vermelden.
            <br />
            <br />
            Een kinderopvangvoorziening met het kenmerk ouderparticipatiecrèche
            krijgt pas na verloop van tijd een registratienummer. Er bestaat
            alleen recht op kinderopvangtoeslag voor een ouderparticipatiecrèche
            wanneer het registratienummer in LRK is vastgelegd.
            <br />
            <br />
            Er gelden nog meer voorwaarden voor het recht op
            kinderopvangtoeslag.
            <br />
            <br />
            Zie ook
            <Link
              href="https://www.belastingdienst.nl/wps/wcm/connect/nl/kinderopvangtoeslag/kinderopvangtoeslag"
              ><img
                src="../../node_modules/@nl-rvo/assets/icons/functioneel/diagonale-pijl.svg"
                class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
              />Lees meer over kinderopvangtoeslag</Link
            >
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Waar vindt u het registratienummer van uw kinderopvangvoorziening?
          </Heading>
          <Paragraph>
            Het registratienummer staat in het Landelijk Register Kinderopvang,
            dit is te vinden bij de kerngegevens van de kinderopvangvoorziening
            waar uw kind heen gaat.
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Welke kinderopvangvoorzieningen staan in het Landelijk Register
            Kinderopvang?
          </Heading>
          <Paragraph>
            In het Landelijk Register Kinderopvang (LRK) staan alle
            geregistreerde kinderopvangvoorzieningen in Nederland. Dit zijn alle
            voorzieningen die in Nederland open zijn.
            <br />
            <br />
            Onder kinderopvangvoorzieningen verstaan we kinderdagverblijven,
            buitenschoolse opvang, gastouderbureaus en voorzieningen voor
            gastouderopvang (gastouders).
            <br />
            <br />
            Voorzieningen waar ouders onderling de opvang voor hun kinderen op
            zich nemen, zijn ouderparticipatiecrèches (opc) en zijn
            geregistreerd als kinderdagverblijf en buitenschoolse opvang.
            <br />
            <br />
            In het LRK staan ook de kinderopvangvoorzieningen die niet meer zijn
            geregistreerd, en dus niet meer open zijn. Van deze
            niet-geregistreerde voorzieningen kunt u bijvoorbeeld nog het
            registratienummer vinden.
            <br />
            <br />
            <strong>NB:</strong> Ouders hebben vanaf de datum dat het
            kinderdagverblijf, de buitenschoolse opvang of de
            gastoudervoorziening niet meer is geregistreerd, geen recht meer op
            kinderopvangtoeslag.
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Staan er ook peuterspeelzalen in het Landelijk Register
            Kinderopvang?
          </Heading>
          <Paragraph>
            Peuterspeelzalen zijn per 1 januari 2018 kinderdagverblijven
            geworden in het LRK. Als zodanig bestaan er dus geen geregistreerde
            peuterspeelzalen meer in het Landelijk Register Kinderopvang (LRK).
            U kunt wel zoeken op niet meer geregistreerde peuterspeelzalen.
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Hoe kunt u zoeken in het Landelijk Register Kinderopvang?
          </Heading>
          <Heading :level="3">
            <br />
            Zoeken naar een kinderopvangvoorziening
          </Heading>
          <Paragraph>
            U kunt in het register op verschillende manieren zoeken naar een
            kinderopvangvoorziening. Het zoeken begint op de startpagina. De
            volgende manieren zijn mogelijk:
            <br />
            <br />
            <ul>
              <li>
                U vult een kenmerk en een locatie in. Een kenmerk is
                bijvoorbeeld een naam of een registratienummer van 9 cijfers.
                Een locatie-gegeven is bijvoorbeeld een straatnaam, postcode,
                plaatsnaam of gemeentenaam.
              </li>
              <li>
                U kunt ook alleen een kenmerk of alleen een locatie-gegeven
                invullen. U vult dan één van beide velden in.
              </li>
            </ul>
            <br />
            Als u kiest voor "Zoek" dan ziet u de gevonden
            kinderopvangvoorzieningen in een lijst. Als de lijst van
            kinderopvangvoorzieningen erg groot is, dan kunt u de zoekopdracht
            nog specifieker maken met de filters. Door het toepassen van filters
            zal het gevonden zoekresultaat kleiner worden. Wordt er geen
            zoekresultaat gevonden dan kunt u uw zoekopdracht aanpassen.
            <!---->
            <br />
            <br /><i
              >Voorbeeld: U zoekt een kinderdagverblijf in Delft. U kiest op de
              startpagina “Zoek een kinderopvangvoorziening”. Het veld “Kenmerk”
              blijft leeg. U vult bij plaatsnaam Delft in en kiest “Zoek”. Het
              systeem laat alle kinderopvangvoorzieningen in Delft zien die
              ingeschreven staan in het Landelijk Register Kinderopvang. U kunt
              via het filter “kinderdagverblijf” kiezen. Het zoekresultaat wordt
              automatisch aangepast. Het zoekresultaat laat alle
              kinderdagverblijven in Delft zien.
              <br />
              <br />Voorbeeld: U zoekt gastouder Jansen in Deventer. U kiest op
              de startpagina “Zoek een kinderopvangvoorziening”. In het veld
              “Kenmerk” typt u Jansen. U vult bij plaatsnaam Deventer in en
              kiest “Zoek”. Het systeem laat alle ingeschreven gastouders met de
              naam Jansen in Deventer zien.
              <br />
              <br />Voorbeeld: U zoekt de buitenschoolse opvang aan de
              Langestraat in Enschede. U kiest op de startpagina “Zoek een
              kinderopvangvoorziening”. In het veld “Kenmerk” typt u Langestraat
              Enschede. Terwijl u typt toont het systeem enkele suggesties. U
              kiest de juiste en kiest “Zoek”. Het systeem laat de
              buitenschoolse opvang aan de Langestraat in Enschede zien. Als u
              op straatnaam of postcode zoekt kunt u via het filter het
              zoekgebied verder verkleinen door bij locatie bijvoorbeeld "800
              meter" te selecteren. Het systeem zoekt dan in een straal van 800
              meter rondom de Langestraat in Enschede.</i
            >
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Zoeken naar een eigenaar van een kinderopvangvoorziening
          </Heading>
          <Paragraph>
            U kunt in het register zoeken naar een eigenaar van een
            kinderopvangvoorziening. Het zoeken start vanaf de startpagina. U
            kiest de optie Zoek een eigenaar van een kinderopvangvoorziening. U
            vult ten minste één kenmerk in. Een kenmerk is bijvoorbeeld een
            handelsnaam of een KvK-nummer van 8 cijfers.
            <br />
            <br />
            Als u kiest voor "Zoek" dan ziet u de gevonden eigenaren van
            kinderopvangvoorzieningen in een lijst. Als de lijst erg groot is,
            dan kunt u de zoekopdracht nog specifieker maken met de filters.
            Door het toepassen van filters zal het gevonden zoekresultaat
            kleiner worden.
            <br />
            <br />
            Wordt er geen zoekresultaat gevonden dan kunt u uw zoekopdracht
            aanpassen.
            <br />
            <br />
            <i
              >Voorbeeld: U zoekt de eigenaar van een buitenschoolse opvang, u
              weet het KvK-nummer. U kiest op de startpagina “Zoek een eigenaar
              van een kinderopvangvoorziening”. In het veld “Kenmerk” typt u het
              KvK-nummer van 8 cijfers en u kiest “Zoek”. Het systeem laat de
              ingeschreven eigenaar van de voorziening zien met dit
              KvK-nummer.</i
            >
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Hoe vindt toezicht en handhaving op de kinderopvang plaats?
          </Heading>
          <Paragraph>
            De verantwoordelijkheid voor toezicht op en handhaving van de
            kwaliteit van kinderopvangvoorzieningen ligt bij de gemeenten. De
            gemeenten laten het toezicht uitvoeren door de Gemeentelijke
            Gezondheidsdienst (GGD). Op basis van de uitkomsten van het toezicht
            door de GGD besluit de gemeente of en hoe zij gaat handhaven.
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Welke onderzoeken voert de GGD uit?</Heading
          >
          <Paragraph>
            De toezichthouder van de GGD voert vijf soorten onderzoek uit:
            <br />
            <ol>
              <li>
                Het onderzoek voor registratie. Dit onderzoek vindt plaats
                voordat een opvanglocatie open mag. De toezichthouder onderzoekt
                of de opvanglocatie (naar verwachting) gaat voldoen aan de eisen
                uit de Wet kinderopvang.
              </li>
              <li>
                Het onderzoek na registratie. Dit onderzoek vindt plaats binnen
                drie maanden nadat een opvanglocatie open is gegaan. De
                toezichthouder onderzoekt of de opvanglocatie – nu er
                daadwerkelijk kinderen worden opgevangen – voldoet aan de eisen
                uit de Wet kinderopvang.
              </li>
              <li>
                Het jaarlijks onderzoek. Dit onderzoek vindt jaarlijks plaats
                bij alle kinderdagverblijven, voorzieningen voor buitenschoolse
                opvang en gastouderbureaus (bij gastouders is dit
                steekproefsgewijs). De toezichthouder onderzoekt of de
                opvanglocatie voldoet aan de eisen in de Wet kinderopvang.
              </li>
              <li>
                Het nader onderzoek. Dit onderzoek vindt plaats als in een
                eerder onderzoek een overtreding is gezien. De toezichthouder
                bekijkt in dit onderzoek onder meer of de overtreding is
                hersteld.
              </li>
              <li>
                Het incidenteel onderzoek. Dit onderzoek vindt éénmalig plaats,
                bijvoorbeeld na een signaal of klacht van ouders, werknemers of
                buurtbewoners. Ook is er een incidenteel onderzoek wanneer een
                kinderopvanglocatie iets wil wijzigen in het Landelijk Register
                Kinderopvang. Bijvoorbeeld wanneer de eigenaar van de
                kinderopvangvoorziening het aantal geregistreerde kindplaatsen
                wil wijzigen.
              </li>
            </ol>
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Wanneer wordt een kinderopvangvoorziening geregistreerd in het
            Landelijk Register Kinderopvang?</Heading
          >
          <Paragraph
            >Een kinderopvangvoorziening wordt door de gemeente geregistreerd in
            het Landelijk Register Kinderopvang nadat de gemeente mede op grond
            van een onderzoek door de GGD besloten heeft dat exploitatie is
            toegestaan.
          </Paragraph>
          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Welke soorten voorzieningen worden geregistreerd in het Landelijk
            Register Kinderopvang?</Heading
          ><Paragraph>
            <ul>
              <li>
                voorziening voor gastouderopvang (VGO). Dit is een gastouder die
                op een specifiek adres (zijn eigen woonadres of het woonadres
                van een vraagouder) gastouderopvang verzorgt. Ieder opvangadres
                van een gastouder wordt als een afzonderlijke VGO geregistreerd
                en krijgt een afzonderlijk registratienummer;
              </li>
              <br />
              <li>
                gastouderbureau: het bureau dat bemiddelt tussen gastouders en
                vraagouders van wie het kind wordt opgevangen;
              </li>
              <br />
              <li>kinderdagverblijf;</li>
              <li>buitenschoolse opvang.</li>
            </ul>
            <br />
            <strong>NB:</strong>
            Voorzieningen waar ouders onderling de opvang voor hun kinderen op
            zich nemen, zijn ouderparticipatiecrèches (opc) en zijn
            geregistreerd als kinderdagverblijf of buitenschoolse opvang.
          </Paragraph>

          <Heading :level="3"
            ><img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Wat betekent de status 'geregistreerd'?</Heading
          >
          <Paragraph>
            Een kinderopvangvoorziening krijgt de status "geregistreerd" in het
            Landelijk Register Kinderopvang nadat de gemeente een positief
            besluit hiertoe genomen heeft. De gemeente beslist hiertoe mede op
            basis van de uitkomsten van het onderzoek van de gemeentelijke of
            regionale gezondheidsdienst (GGD). Een geregistreerde voorziening
            mag kinderen opvangen. Ouders kunnen aanspraak maken op de
            kinderopvangtoeslag wanneer de voorziening de status “geregistreerd”
            heeft.
          </Paragraph>

          <Heading :level="3">
            <img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Wat betekent de status 'niet meer geregistreerd'?</Heading
          >
          <Paragraph>
            Kinderopvangvoorzieningen die niet meer actief zijn, zijn nog wel in
            het Landelijk Register Kinderopvang te vinden met de status 'niet
            meer geregistreerd'. Deze opvangvoorzieningen zijn om een van
            onderstaande redenen uitgeschreven: op verzoek van de eigenaar van
            een kinderopvangvoorziening/eigenaar; indien is gebleken dat de
            eigenaar de kinderopvangvoorziening niet (langer) exploiteert; of
            indien uit onderzoek is gebleken dat de eigenaar van een
            kinderopvangvoorziening niet dan wel niet langer voldoet aan de
            kwaliteitseisen van de Wet kinderopvang (Wko).
            <br />
            <br /><strong>NB:</strong> Ouders hebben vanaf de datum dat het
            kinderdagverblijf, de buitenschoolse opvang of de
            gastoudervoorziening niet meer geregistreerd is geen recht meer op
            kinderopvangtoeslag.
          </Paragraph>
          <Heading :level="3">
            <img
              src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
              class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
            />
            Wie is de eigenaar van een kinderopvangvoorziening?</Heading
          ><Paragraph
            >De eigenaar van een kinderopvangvoorziening is de natuurlijke
            persoon van tenminste 18 jaar of de rechtspersoon die een
            kinderdagverblijf, een buitenschoolse opvang, een voorziening voor
            gastouderopvang of een gastouderbureau exploiteert. In de Wet
            kinderopvang wordt deze eigenaar de “houder” genoemd.</Paragraph
          >

          <details>
            <summary>
              <Heading :level="3">
                <img
                  src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
                  class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
                />Wat betekenen de gegevens op een inspectierapport?</Heading
              >
            </summary>
            <div class="rvo-accordion">
              <Paragraph
                >De ‘datum rapport’ is de datum waarop het rapport definitief is
                vastgesteld. Het administratieve kenmerk wordt gebruikt om in
                communicatie een document te identificeren. Optioneel wordt er
                een toelichting gegeven op publicatie of inhoud van het
                rapport.</Paragraph
              >
            </div>
          </details>
          <br />
          <details>
            <summary>
              <Heading :level="3">
                <img
                  src="../../node_modules/@nl-rvo/assets/icons/functioneel/delta-omlaag.svg"
                  class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--wit"
                />Wat is het versie-nummer van het Landelijk Register
                Kinderopvang?</Heading
              >
            </summary>
            <div class="rvo-accordion">
              <Paragraph
                >Landelijk Register Kinderopvang 23.1.9.2-2.1</Paragraph
              >
            </div>
          </details>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          // hier volgt een accordion voorbeeld
          <details class="rvo-accordion__item">
            <summary class="rvo-accordion__item-summary">
              <Heading :level="3" class="rvo-link">
                <span class="rvo-accordion__item-title"
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"
                  ></span
                  ><span
                    class="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"
                  ></span
                  >Voor ondernemers en gemeentes met e-Herkenning
                  <img
                    src="../images/e-herkenning-logo.svg"
                    class="rvo-login-option-img rvo-login-option-img--e-herkenning"
                /></span>
              </Heading>
            </summary>
            <div class="rvo-accordion__content">
              <Paragraph>
                U bent <strong>ondernemer</strong> en ingeschreven bij KVK. Of u
                logt in namens een <strong>gemeente</strong>.
              </Paragraph>
              <Paragraph>
                Meer informatie leest u op onze pagina
                <a href="#" class="rvo-link">Zaken regelen bij RVO</a> . Lukt
                het inloggen niet? Ga naar
                <a href="#" class="rvo-link">Hulp bij inloggen</a>.
              </Paragraph>
              <Paragraph
                >Kies het niveau van het middel waarmee u wilt
                inloggen.</Paragraph
              >
              <Paragraph> </Paragraph>
              <Paragraph
                >Kies het niveau van het middel waarmee u wilt
                inloggen.</Paragraph
              >
              <Paragraph>
                <a
                  class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                  >Inloggen met e-Herkenning 2</a
                ><br /><br /><a
                  class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                  href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--mijn-zaken&amp;viewMode=story"
                  >Inloggen met e-Herkenning 3</a
                >
              </Paragraph>
            </div>
          </details>
        </div>
      </main>
    </div>
    <PageFooter />
  </div>
</template>
