<script setup lang="ts">
import { Button } from "@utrecht/component-library-vue";
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
		<div class="rvo-layout-column rvo-layout-gap--md">
			<div class="rvo-topnav__background">
				<nav class="rvo-topnav rvo-topnav--md">
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
			<div class="rvo-max-width-layout rvo-max-width-layout--sm">
				<main>
					<div class="rvo-alerts">
						<div class="rvo-layout-column rvo-layout-gap--md">
							<div class="rvo-alert rvo-alert--info">
								<span
									class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"
									role="img"
									aria-label="Info"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of an info alert.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--info">
								<span
									class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"
									role="img"
									aria-label="Info"
								></span>
								<div class="rvo-alert-text">
									<strong>Info with heading</strong><br />
									<p>This is an example of an info alert with a heading.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--info">
								<span
									class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"
									role="img"
									aria-label="Info"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of an info alert with a button.</p>
									<Button
										class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-sm"
										type="button"
									>
										Button
									</Button>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--info">
								<span
									class="utrecht-icon rvo-icon rvo-icon-info rvo-icon--lg rvo-icon--hemelblauw"
									role="img"
									aria-label="Info"
								></span>
								<div class="rvo-alert-text">
									<p>
										This is an example of an info alert with an optional close
										button.
									</p>
								</div>
								<Button
									class="utrecht-button utrecht-button--subtle rvo-button--close utrecht-button--rvo-md"
									type="button"
								>
									<span
										class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--hemelblauw"
										role="img"
										aria-label="Kruis"
									></span>
								</Button>
							</div>
							<div class="rvo-alert rvo-alert--warning">
								<span
									class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-waarschuwing"
									role="img"
									aria-label="Waarschuwing"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of a warning alert.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--warning">
								<span
									class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-waarschuwing"
									role="img"
									aria-label="Waarschuwing"
								></span>
								<div class="rvo-alert-text">
									<strong>Warning with heading</strong><br />
									<p>This is an example of a warning alert with a heading.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--warning">
								<span
									class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-waarschuwing"
									role="img"
									aria-label="Waarschuwing"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of a warning alert with a button.</p>
									<Button
										class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-sm"
										type="button"
									>
										Button
									</Button>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--warning">
								<span
									class="utrecht-icon rvo-icon rvo-icon-waarschuwing rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-waarschuwing"
									role="img"
									aria-label="Waarschuwing"
								></span>
								<div class="rvo-alert-text">
									<p>
										This is an example of a warning alert with an optional close
										button.
									</p>
								</div>
								<Button
									class="utrecht-button utrecht-button--subtle rvo-button--close utrecht-button--rvo-md"
									type="button"
								>
									<span
										class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--hemelblauw"
										role="img"
										aria-label="Kruis"
									></span>
								</Button>
							</div>
							<div class="rvo-alert rvo-alert--error">
								<span
									class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-foutmelding"
									role="img"
									aria-label="Foutmelding"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of a error alert.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--error">
								<span
									class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-foutmelding"
									role="img"
									aria-label="Foutmelding"
								></span>
								<div class="rvo-alert-text">
									<strong>error with heading</strong><br />
									<p>This is an example of a error alert with a heading.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--error">
								<span
									class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-foutmelding"
									role="img"
									aria-label="Foutmelding"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of a error alert with a button.</p>
									<Button
										class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-sm"
										type="button"
									>
										Button
									</Button>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--error">
								<span
									class="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-foutmelding"
									role="img"
									aria-label="Foutmelding"
								></span>
								<div class="rvo-alert-text">
									<p>
										This is an example of a error alert with an optional close
										button.
									</p>
								</div>
								<Button
									class="utrecht-button utrecht-button--subtle rvo-button--close utrecht-button--rvo-md"
									type="button"
								>
									<span
										class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--hemelblauw"
										role="img"
										aria-label="Kruis"
									></span>
								</Button>
							</div>
							<div class="rvo-alert rvo-alert--succes">
								<span
									class="utrecht-icon rvo-icon rvo-icon-bevestiging rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-bevestiging"
									role="img"
									aria-label="Bevestiging"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of a succes alert.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--succes">
								<span
									class="utrecht-icon rvo-icon rvo-icon-bevestiging rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-bevestiging"
									role="img"
									aria-label="Bevestiging"
								></span>
								<div class="rvo-alert-text">
									<strong>succes with heading</strong><br />
									<p>This is an example of a succes alert with a heading.</p>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--succes">
								<span
									class="utrecht-icon rvo-icon rvo-icon-bevestiging rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-bevestiging"
									role="img"
									aria-label="Bevestiging"
								></span>
								<div class="rvo-alert-text">
									<p>This is an example of a succes alert with a button.</p>
									<Button
										class="utrecht-button utrecht-button--primary-action utrecht-button--rvo-sm"
										type="button"
									>
										Button
									</Button>
								</div>
							</div>
							<div class="rvo-alert rvo-alert--succes">
								<span
									class="utrecht-icon rvo-icon rvo-icon-bevestiging rvo-icon--lg rvo-icon--hemelblauw rvo-status-icon-bevestiging"
									role="img"
									aria-label="Bevestiging"
								></span>
								<div class="rvo-alert-text">
									<p>
										This is an example of a succes alert with an optional close
										button.
									</p>
								</div>
								<Button
									class="utrecht-button utrecht-button--subtle rvo-button--close utrecht-button--rvo-md"
									type="button"
								>
									<span
										class="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--md rvo-icon--hemelblauw"
										role="img"
										aria-label="Kruis"
									></span>
								</Button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
</template>
