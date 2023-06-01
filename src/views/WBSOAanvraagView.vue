<script setup lang="ts">
import { PageHeader, Button, Heading } from "@utrecht/component-library-vue";
</script>
<template>
	<div class="rvo-demo-page">
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
			<nav
				class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--md"
			>
				<ul class="utrecht-topnav__list">
					<li class="utrecht-topnav__item">
						<a class="utrecht-topnav__link" href="#"
							><span
								class="utrecht-icon rvo-icon rvo-icon-home rvo-icon--md rvo-icon--wit"
								role="img"
								aria-label="Home"
							></span
							>Home</a
						>
					</li>
					<li class="utrecht-topnav__item">
						<a class="utrecht-topnav__link" href="#"
							><span
								class="utrecht-icon rvo-icon rvo-icon-publicatie rvo-icon--md rvo-icon--wit"
								role="img"
								aria-label="Publicatie"
							></span
							>Mijn aanvragen</a
						>
					</li>
					<li class="utrecht-topnav__item">
						<a class="utrecht-topnav__link" href="#"
							><span
								class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--md rvo-icon--wit"
								role="img"
								aria-label="Plus"
							></span
							>Nieuwe aanvraag</a
						>
					</li>
					<li class="utrecht-topnav__item utrecht-topnav__item--align-right">
						<a class="utrecht-topnav__link" href="#"
							><span
								class="utrecht-icon rvo-icon rvo-icon-versleutelen rvo-icon--md rvo-icon--wit"
								role="img"
								aria-label="Versleutelen"
							></span
							>Uitloggen</a
						>
					</li>
				</ul>
			</nav>
		</div>
		<div class="rvo-max-width-layout rvo-max-width-layout--md">
			<main class="rvo-progress-tracker-active">
				<div class="rvo-progress-tracker">
					<div
						class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--start rvo-image-bg-progress-tracker-start-end-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
					>
						Aanvraag WBSO
					</div>
					<div
						class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--completed rvo-image-bg-progress-tracker-completed-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
					>
						<a
							href="iframe.html?args=&amp;id=demo-demo-pagina-s-wbso--01-voordat-u-start&amp;viewMode=story"
							class="rvo-link rvo-progress-tracker__step-link"
							>Voordat u start</a
						>
					</div>
					<div
						class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--doing rvo-image-bg-progress-tracker-doing-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
					>
						<a
							href="iframe.html?args=&amp;id=demo-demo-pagina-s-wbso--02-vormvrije-aanvraag&amp;viewMode=story"
							class="rvo-link rvo-progress-tracker__step-link"
							>Vormvrije aanvraag</a
						>
					</div>
					<div
						class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
					>
						<a
							href="iframe.html?args=&amp;id=demo-demo-pagina-s-wbso--03-aanvrager&amp;viewMode=story"
							class="rvo-link rvo-progress-tracker__step-link"
							>Aanvrager</a
						>
					</div>
					<div
						class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
					>
						<a href="#" class="rvo-link rvo-progress-tracker__step-link"
							>Projecten</a
						>
					</div>
					<div
						class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--incomplete rvo-image-bg-progress-tracker-incomplete-md--after rvo-progress-tracker__step--straight rvo-image-bg-progress-tracker-line-straight--before"
					>
						<a href="#" class="rvo-link rvo-progress-tracker__step-link"
							>S&amp;O uren</a
						>
					</div>
					<div
						class="rvo-progress-tracker__step rvo-progress-tracker__step--md rvo-progress-tracker__step--end rvo-image-bg-progress-tracker-start-end-md--after"
					>
						Aanvraag ingediend
					</div>
				</div>
				<div class="rvo-form">
					<div class="rvo-layout-column rvo-layout-gap--md">
						<div class="intro">
							<a href="#" class="rvo-link rvo-link--with-icon"
								><span
									class="utrecht-icon rvo-icon rvo-icon-terug rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
									role="img"
									aria-label="Terug"
								></span
								>Terug</a
							>
							<Heading :level="1">Vormvrije aanvraag</Heading>
						</div>
						<form>
							<div class="rvo-layout-column rvo-layout-gap--md">
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
														>Wilt u een vormvrije aanvraag indienen?</label
													>
													<div
														id="helperTextId"
														class="utrecht-form-field-description"
													>
														Heeft u geen tijd om een volledige WBSO-aanvraag in
														te dienen? Dien dan een vormvrije aanvraag in. U
														vult een paar basisgegevens in en vult uw aanvraag
														later aan.
													</div>
												</div>
												<div class="rvo-radio-button__group">
													<label class="rvo-custom-radio-button" for="vva"
														><input
															id="vva"
															name="radio-buttons"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Ja</label
													><label class="rvo-custom-radio-button" for="vva2"
														><input
															id="vva2"
															name="radio-buttons"
															type="radio"
															class="utrecht-custom-radio-button"
														/>Nee</label
													>
												</div>
											</div>
										</fieldset>
									</div>
								</div>
								<div class="rvo-button-group">
									<Button
										class="utrecht-button--rvo-md"
										appearance="secondary-action-button"
									>
										Opslaan en sluiten</Button
									><Button
										class="utrecht-button--rvo-md"
										appearance="primary-action-button"
									>
										Opslaan en verder
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
