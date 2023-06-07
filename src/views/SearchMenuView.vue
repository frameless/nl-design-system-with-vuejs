<script setup lang="ts">
import { Heading } from "@utrecht/component-library-vue";
import { UnorderedList } from "@utrecht/component-library-vue";
import { UnorderedListItem } from "@utrecht/component-library-vue";
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
		<div class="rvo-topnav__background">
			<nav
				class="rvo-topnav rvo-topnav--md rvo-max-width-layout rvo-max-width-layout--md"
			>
				<UnorderedList class="utrecht-topnav__list">
					<UnorderedListItem class="utrecht-topnav__item">
						<a class="utrecht-topnav__link" href="#"
							><span
								class="utrecht-icon rvo-icon rvo-icon-home rvo-icon--md rvo-icon--wit"
								role="img"
								aria-label="Home"
							></span
							>Home</a
						>
					</UnorderedListItem>
					<UnorderedListItem class="utrecht-topnav__item">
						<a class="utrecht-topnav__link" href="#"
							><span
								class="utrecht-icon rvo-icon rvo-icon-publicatie rvo-icon--md rvo-icon--wit"
								role="img"
								aria-label="Publicatie"
							></span
							>Mijn aanvragen</a
						>
					</UnorderedListItem>
					<UnorderedListItem class="utrecht-topnav__item">
						<a class="utrecht-topnav__link" href="#"
							><span
								class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--md rvo-icon--wit"
								role="img"
								aria-label="Plus"
							></span
							>Nieuwe aanvraag</a
						>
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
		<div class="rvo-layout-column rvo-layout-gap--md">
			<div class="search-form">
				<div class="utrecht-form-fieldset rvo-form-fieldset">
					<fieldset
						class="utrecht-form-fieldset__fieldset utrecht-form-fieldset--html-fieldset"
					>
						<div class="rvo-form-layout">
							<div class="rvo-max-width-layout rvo-max-width-layout--sm">
								<div class="rvo-inline-form">
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
												>Zoekterm</label
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
									<button
										class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
										type="button"
									>
										Zoeken
									</button>
								</div>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
			<div class="rvo-max-width-layout rvo-max-width-layout--sm">
				<main>
					<div class="rvo-content">
						<Heading :level="1">Search in Navigation</Heading>
						<p class="rvo-paragraph rvo-paragraph--md">
							This demopage demonstrates how a search element can be included in
							the navbar. As you can see this in included.
						</p>
					</div>
				</main>
			</div>
		</div>
	</div>
</template>
