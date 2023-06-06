<script setup lang="ts">
import {
	Heading,
	Heading1,
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
		<div class="rvo-layout-column rvo-layout-gap--2xl">
			<div class="rvo-topnav__background">
				<nav
					class="rvo-topnav rvo-topnav--lg rvo-max-width-layout rvo-max-width-layout--md"
				>
					<UnorderedList class="utrecht-topnav__list">
						<UnorderedListItem class="utrecht-topnav__item">
							<a
								class="utrecht-topnav__link"
								href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
								><span
									class="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--lg rvo-icon--wit"
									role="img"
									aria-label="Terug"
								></span
								>Terug naar Mijn RVO</a
							>
						</UnorderedListItem>
						<UnorderedListItem
							class="utrecht-topnav__item utrecht-topnav__item--align-right"
						>
							<a
								class="utrecht-topnav__link"
								href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--inloggen&amp;viewMode=story"
								>Uitloggen</a
							>
						</UnorderedListItem>
					</UnorderedList>
				</nav>
			</div>
			<div class="rvo-max-width-layout rvo-max-width-layout--md">
				<main class="rvo-progress-tracker-active">
					<div class="rvo-progress-tracker">
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--start rvo-image-bg-progress-tracker-start-end-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							JV 2020
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&amp;viewMode=story"
								class="rvo-link rvo-progress-tracker__step-link"
								>Controleer uw gegevens</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--correspondentie&amp;viewMode=story"
								class="rvo-link rvo-progress-tracker__step-link"
								>Correspondentie</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--datum&amp;viewMode=story"
								class="rvo-link rvo-progress-tracker__step-link"
								>Datum verleningsverzoek</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--project&amp;viewMode=story"
								class="rvo-link rvo-progress-tracker__step-link"
								>Project vragen</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten"
								class="rvo-link rvo-progress-tracker__step-link"
								>Kosten</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--bijlagen"
								class="rvo-link rvo-progress-tracker__step-link"
								>Bijlagen</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--samenvatting"
								class="rvo-link rvo-progress-tracker__step-link"
								>Samenvatting</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
						>
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--ondertekening&amp;viewMode=story"
								class="rvo-link rvo-progress-tracker__step-link"
								>Ondertekening</a
							>
						</div>
						<div
							class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end rvo-image-bg-progress-tracker-start-end-md--after"
						>
							Bevestiging
						</div>
					</div>
					<div class="rvo-form">
						<div class="rvo-layout-column rvo-layout-gap--xl">
							<div class="intro">
								<Heading :level="1" class="utrecht-heading-1"
									>Project vragen</Heading
								>
							</div>
							<form>
								<div class="rvo-layout-column rvo-layout-gap--md">
									<div class="utrecht-form-fieldset rvo-form-fieldset">
										<fieldset
											class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
										>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Field label</label
													>
												</div>
												<div
													class="rvo-form-field rvo-layout-column rvo-layout-gap--sm"
												>
													<label class="rvo-label"
														>Wat is uw geboortedatum?</label
													><input
														type="date"
														id="geboortedatum"
														class="rvo-date"
													/>
												</div>
											</div>
										</fieldset>
									</div>
									<div class="utrecht-form-fieldset rvo-form-fieldset">
										<fieldset
											class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
										>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Heeft u een vissersvaartuig in bezit of in bezit
														gehad?</label
													>
												</div>
												<div class="rvo-radio-button__group">
													<label class="rvo-custom-radio-button" for="vva"
														><input
															id="vva"
															name="vv"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Ja</label
													><label class="rvo-custom-radio-button" for="vvb"
														><input
															id="vvb"
															name="vv"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Nee</label
													>
												</div>
											</div>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Waar gaat u het aan te schaffen visservaartuig voor
														gebruiken?</label
													>
												</div>
												<div class="rvo-radio-button__group">
													<label class="rvo-custom-radio-button" for="vvga"
														><input
															id="vvga"
															name="vvg"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Zee- of kustvisserij</label
													><label class="rvo-custom-radio-button" for="vvgb"
														><input
															id="vvgb"
															name="vvg"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Binnenvisserij</label
													>
												</div>
											</div>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Voor welke vorm van visserij is het vissersvaartuig
														uitgerust?</label
													>
												</div>
												<div class="rvo-radio-button__group">
													<label class="rvo-custom-radio-button" for="vvua"
														><input
															id="vvua"
															name="vvu"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Zee- of kustvisserij</label
													><label class="rvo-custom-radio-button" for="vvub"
														><input
															id="vvub"
															name="vvu"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Binnenvisserij</label
													><label class="rvo-custom-radio-button" for="vvuc"
														><input
															id="vvuc"
															name="vvu"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Geen uitrusting</label
													>
												</div>
											</div>
										</fieldset>
									</div>
									<div class="utrecht-form-fieldset rvo-form-fieldset">
										<fieldset
											class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
										>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Heeft het vaartuig dat u aanschaft een nummer in
														het EU-vlootregister (een
														EU-identificatienummer)?</label
													>
												</div>
												<div class="rvo-radio-button__group">
													<label class="rvo-custom-radio-button" for="vveua"
														><input
															id="vveua"
															name="vveu"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Ja</label
													><label class="rvo-custom-radio-button" for="vveub"
														><input
															id="vveub"
															name="vveu"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Nee</label
													>
												</div>
											</div>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Wat is dit EU-identificatienummer?</label
													>
												</div>
												<input
													id="field"
													placeholder=""
													pattern="[0-9]*"
													type="text"
													class="utrecht-textbox utrecht-textbox--html-input"
													inputmode="numeric"
													value=""
												/>
											</div>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>In welk land is het vaartuig dat u aanschaft
														geregistreerd in het EU-vlootregister?</label
													>
												</div>
												<input
													id="field"
													placeholder=""
													type="text"
													class="utrecht-textbox utrecht-textbox--html-input"
													value=""
												/>
											</div>
										</fieldset>
									</div>
									<div class="utrecht-form-fieldset rvo-form-fieldset">
										<fieldset
											class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
										>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Hoeveel personen (in fte per jaar) verwacht u dat
														er op het visservaartuig komen werken, met uzelf
														erbij?</label
													>
												</div>
												<input
													id="field"
													placeholder=""
													pattern="[0-9]*"
													type="text"
													class="utrecht-textbox utrecht-textbox--html-input"
													inputmode="numeric"
													value=""
												/>
											</div>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Hoeveel personen (in fte per jaar) verwacht u
														hebben niet eerder gewerkt in de visserij of
														maritieme sector?</label
													>
												</div>
												<input
													id="field"
													placeholder=""
													pattern="[0-9]*"
													type="text"
													class="utrecht-textbox utrecht-textbox--html-input"
													inputmode="numeric"
													value=""
												/>
											</div>
										</fieldset>
									</div>
									<div class="utrecht-form-fieldset rvo-form-fieldset">
										<fieldset
											class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
										>
											<div
												role="group"
												aria-labelledby="fieldId-label"
												class="utrecht-form-field utrecht-form-field--text rvo-form-field"
											>
												<div class="rvo-form-field__label">
													<label
														id="fieldId-label"
														for="fieldId"
														class="utrecht-form-label"
														>Gaat u met het publiek communiceren over uw
														investering (bijvoorbeeld via een brochure, flyer of
														persbericht)?</label
													>
												</div>
												<div class="rvo-radio-button__group">
													<label class="rvo-custom-radio-button" for="coma"
														><input
															id="coma"
															name="com"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Ja</label
													><label class="rvo-custom-radio-button" for="comb"
														><input
															id="comb"
															name="com"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Nee</label
													>
												</div>
											</div>
										</fieldset>
									</div>
									<div class="rvo-button-group">
										<a
											class="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
											href="iframe.html?args=&amp;id=demo-pagina-s-mijn-rvo--zaak&amp;viewMode=story"
											>Opslaan en sluiten</a
										><a
											class="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
											href="iframe.html?args=&amp;id=demo-pagina-s-jonge-vissers--kosten"
											>Opslaan en verder</a
										>
									</div>
								</div>
							</form>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
</template>
