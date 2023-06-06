<script setup lang="ts">
import {
	Heading,
	Checkbox,
	UnorderedList,
	UnorderedListItem,
} from "@utrecht/component-library-vue";
</script>
<template>
	<div class="rvo-demo-page">
		<header class="rvo-header">
			<div class="rvo-header__logo-wrapper">
				<a href="/" class="rvo-header__logo-link"
					><img
						src="../images/logo.svg"
						alt="Rijksdienst voor Ondernemend Nederland, ga naar de startpagina van RVO"
						class="rvo-logo-img rvo-header__logo-img"
				/></a>
			</div>
		</header>
		<div class="rvo-layout-column rvo-layout-gap--lg">
			<div class="rvo-topnav__background">
				<nav
					class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--md"
				>
					<UnorderedList class="utrecht-topnav__list">
						<UnorderedListItem class="utrecht-topnav__item">
							<a class="utrecht-topnav__link" href="#">Home</a>
						</UnorderedListItem>
						<UnorderedListItem class="utrecht-topnav__item">
							<a class="utrecht-topnav__link" href="#">Onderwerpen</a>
						</UnorderedListItem>
						<UnorderedListItem class="utrecht-topnav__item">
							<a class="utrecht-topnav__link" href="#"
								>Subsidie- en financieringswijzer</a
							>
						</UnorderedListItem>
						<UnorderedListItem class="utrecht-topnav__item">
							<a class="utrecht-topnav__link" href="#">Over ons</a>
						</UnorderedListItem>
						<UnorderedListItem class="utrecht-topnav__item">
							<a class="utrecht-topnav__link" href="#">Contact</a>
						</UnorderedListItem>
						<UnorderedListItem
							class="utrecht-topnav__item utrecht-topnav__item--align-right"
						>
							<a class="utrecht-topnav__link" href="#"
								><span
									class="utrecht-icon rvo-icon rvo-icon-zoek rvo-icon--md rvo-icon--wit"
									role="img"
									aria-label="Zoek"
								></span
								>Zoeken</a
							>
						</UnorderedListItem>
					</UnorderedList>
				</nav>
			</div>
			<div class="rvo-layout-column rvo-layout-gap--3xl">
				<main>
					<div class="rvo-filter">
						<div class="rvo-layout-column rvo-layout-gap--xl">
							<div class="rvo-max-width-layout rvo-max-width-layout--sm">
								<div class="rvo-intro">
									<Heading :level="1">Vind uw adviseur</Heading>
									<p>
										Werkt u bij een innovatief technologisch bedrijf of
										kennisinstelling met internationale ambities? Onze ervaren
										adviseurs kennen de mogelijkheden van internationale
										innovatieprogramma’s en vergroten uw kansen op een
										succesvolle deelname. Zoek de juiste adviseur voor uw vraag.
									</p>
								</div>
							</div>
							<div class="rvo-layout-column rvo-layout-gap--md">
								<div class="rvo-tmp-filters">
									<div class="utrecht-form-fieldset rvo-form-fieldset">
										<fieldset
											class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
										>
											<div
												class="rvo-max-width-layout rvo-max-width-layout--sm"
											>
												<div class="rvo-layout-row rvo-layout-gap--xl">
													<details class="rvo-tmp-filter">
														<summary>
															<div
																class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
															>
																<label
																	class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
																	for="fieldId"
																	><span class="rvo-form-field__label-text"
																		>Thema</span
																	></label
																>
																<div class="rvo-select-wrapper">
																	<div
																		class="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder"
																	>
																		Maak een keuze
																	</div>
																</div>
															</div>
														</summary>
														<div
															class="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm"
														>
															<label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionA"
																><Checkbox
																	id="optionA"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Agro en visserij</label
															><label
																class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
																for="optionB"
																><Checkbox
																	id="optionB"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Energie</label
															><label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionC"
																><Checkbox
																	id="optionC"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>ICT</label
															><label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionD"
																><Checkbox
																	id="optionD"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Transport</label
															>
														</div>
													</details>
													<details class="rvo-tmp-filter">
														<summary>
															<div
																class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
															>
																<label
																	class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
																	for="fieldId"
																	><span class="rvo-form-field__label-text"
																		>Fase activiteit</span
																	></label
																>
																<div class="rvo-select-wrapper">
																	<div
																		class="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder"
																	>
																		Maak een keuze
																	</div>
																</div>
															</div>
														</summary>
														<div
															class="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm"
														>
															<label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionA1"
																><Checkbox
																	id="optionA1"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Fundamenteel onderzoek</label
															><label
																class="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
																for="optionB1"
																><Checkbox
																	id="optionB1"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Industrieel onderzoek</label
															><label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionC1"
																><Checkbox
																	id="optionC1"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Ontwikkeling</label
															><label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionD1"
																><Checkbox
																	id="optionD1"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Toepassing</label
															>
														</div>
													</details>
													<details class="rvo-tmp-filter">
														<summary>
															<div
																class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
															>
																<label
																	class="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
																	for="fieldId"
																	><span class="rvo-form-field__label-text"
																		>Subsidie/onderwerp</span
																	></label
																>
																<div class="rvo-select-wrapper">
																	<div
																		class="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder"
																	>
																		Maak een keuze
																	</div>
																</div>
															</div>
														</summary>
														<div
															class="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm"
														>
															<label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionA2"
																><Checkbox
																	id="optionA2"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>EU (Horizon, Digital Europe, EDF)</label
															><label
																class="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
																for="optionB2"
																><Checkbox
																	id="optionB2"
																	name="group"
																	class="rvo-checkbox__input"
																	value=""
																/>Eureka/Eurostars</label
															>
														</div>
													</details>
												</div>
											</div>
										</fieldset>
									</div>
								</div>
								<div class="rvo-layout-column rvo-layout-gap--2xl">
									<div class="rvo-active-filters">
										<div class="rvo-max-width-layout rvo-max-width-layout--sm">
											<div class="rvo-layout-row rvo-layout-gap--sm">
												<span class="rvo-results-count"
													><strong>12</strong> resultaten voor</span
												><span class="rvo-tag rvo-tag--default rvo-tag--sm"
													>Agro en visserij<a href="#"
														><span
															class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"
															role="img"
															aria-label="Kruis"
														></span></a></span
												><span class="rvo-tag rvo-tag--default rvo-tag--sm"
													>Ontwikkeling<a href="#"
														><span
															class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm rvo-icon--zwart"
															role="img"
															aria-label="Kruis"
														></span></a
												></span>
											</div>
										</div>
									</div>
									<div class="rvo-max-width-layout rvo-max-width-layout--sm">
										<div class="rvo-results">
											<div class="rvo-layout-column rvo-layout-gap--2xl">
												<div class="rvo-result rvo-result--w-image">
													<div class="rvo-layout-row rvo-layout-gap--lg">
														<div class="rvo-result-text">
															<div class="rvo-layout-column rvo-layout-gap--sm">
																<a href="#" class="rvo-link">Jelle Knop</a
																><span class="rvo-result-description"
																	>Ik ben adviseur innovatieprogramma’s health
																	bij RVO, waar ik me vooral focus op de
																	subsidieprogramma’s van het Eureka-netwerk
																	zoals Eurostars en Globalstars. Ik help
																	startende ondernemers in de life sciences
																	&amp; health bij het aanvragen van subsidies
																	om internationale samenwerking te
																	stimuleren.</span
																><span
																	class="rvo-result-meta-data rvo-result-meta--column"
																	><span class="rvo-result-meta-data-item"
																		><strong>Thema:</strong> Life Sciences &amp;
																		Health</span
																	><span class="rvo-result-meta-data-item"
																		><strong>Fase activiteit:</strong>
																		Industrieel onderzoek; Ontwikkeling</span
																	><span class="rvo-result-meta-data-item"
																		><strong>Subsidie/onderwerp:</strong>
																		Eureka/Eurostars</span
																	></span
																>
															</div>
														</div>
														<a href="#"
															><img
																alt=""
																class="rvo-result-profile-pic"
																src="https://media-exp1.licdn.com/dms/image/C4E03AQEirwEyMyg2pQ/profile-displayphoto-shrink_200_200/0/1657908152116?e=2147483647&amp;v=beta&amp;t=McXjZqk3FV1ud7n4sE7MzYloKoPc7ZpNoJTtzkHKc4k"
														/></a>
													</div>
												</div>
												<div class="rvo-result rvo-result--w-image">
													<div class="rvo-layout-row rvo-layout-gap--lg">
														<div class="rvo-result-text">
															<div class="rvo-layout-column rvo-layout-gap--sm">
																<a href="#" class="rvo-link"
																	>Bert van der Heide</a
																><span class="rvo-result-description"
																	>Als adviseur internationale innovatie binnen
																	RVO werk ik op het agri-food domein. Dit omvat
																	onder andere land- en tuinbouw, veehouderij en
																	foodtech. Daarbij help ik bedrijven en
																	onderzoekers om samenwerkingen te verkennen en
																	aan te gaan met internationale partners.</span
																><span
																	class="rvo-result-meta-data rvo-result-meta--column"
																	><span class="rvo-result-meta-data-item"
																		><strong>Thema:</strong> Agriculture, Food
																		Technology, Water</span
																	><span class="rvo-result-meta-data-item"
																		><strong>Fase activiteit:</strong>
																		Ontwikkeling; Toepassing</span
																	></span
																>
															</div>
														</div>
														<a href="#"
															><img
																alt=""
																class="rvo-result-profile-pic"
																src="https://pbs.twimg.com/profile_images/1275762454895738881/laNLU5lV_400x400.jpg"
														/></a>
													</div>
												</div>
												<div class="rvo-result">
													<div class="rvo-layout-row rvo-layout-gap--lg">
														<div class="rvo-result-text">
															<div class="rvo-layout-column rvo-layout-gap--sm">
																<a href="#" class="rvo-link">Roy Paulissen</a
																><span class="rvo-result-description"
																	>Samen met de topsector HTSM vorm ik de nieuwe
																	internationale strategie. Ik zit in het
																	kernteam samen met ministeries Economische
																	Zaken en Klimaat en Buitenlandse Zaken. Voor
																	de helft van mijn tijd werk ik namens het
																	ministerie van Economische Zaken en Klimaat
																	voor het innovatieteam (IRIS) van RVO.</span
																><span
																	class="rvo-result-meta-data rvo-result-meta--column"
																	><span class="rvo-result-meta-data-item"
																		><strong>Thema:</strong> Materials,
																		Manufacturing, Chemistry; Transport</span
																	><span class="rvo-result-meta-data-item"
																		><strong>Fase activiteit:</strong>
																		Ontwikkeling; Toepassing</span
																	><span class="rvo-result-meta-data-item"
																		><strong>Subsidie/onderwerp:</strong>
																		Innovatiepartner Search</span
																	></span
																>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<footer class="rvo-footer">
					<div class="rvo-max-width-layout rvo-max-width-layout--lg">
						<UnorderedList class="rvo-footer-menu">
							<UnorderedListItem class="rvo-footer-menu-title">
								<Heading :level="3">RVO</Heading>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Over ons</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Contact</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Pers</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Zaken regelen bij RVO</a>
							</UnorderedListItem>
						</UnorderedList>
						<UnorderedList class="rvo-footer-menu">
							<UnorderedListItem class="rvo-footer-menu-title">
								<Heading :level="3">Over deze site</Heading>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Privacy</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Cookies en anti-spam</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Toegankelijkheid</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Proclaimer</a>
							</UnorderedListItem>
						</UnorderedList>
						<UnorderedList class="rvo-footer-menu">
							<UnorderedListItem class="rvo-footer-menu-title">
								<Heading :level="3">Snel naar</Heading>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Onderwerpen A t/m Z</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Klantenpanel</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Documenten en publicaties</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link"
									>Overheidspublicaties en auteursrecht</a
								>
							</UnorderedListItem>
						</UnorderedList>
						<UnorderedList class="rvo-footer-menu">
							<UnorderedListItem class="rvo-footer-menu-title">
								<Heading :level="3">Blijf op de hoogte</Heading>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Social media</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link"
									>Higherlevel.nl ondernemersforum</a
								>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">RSS</a>
							</UnorderedListItem>
							<UnorderedListItem class="rvo-footer-menu-item">
								<span
									class="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"
									role="img"
									aria-label="Delta naar rechts"
								></span
								><a href="#" class="rvo-link">Gratis nieuwsbrief</a>
							</UnorderedListItem>
						</UnorderedList>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>
