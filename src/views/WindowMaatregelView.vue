<script setup lang="ts">
import { Heading } from "@utrecht/component-library-vue";
</script>
<template>
	<div id="storybook-root">
		<div class="rvo-demo-page rvo-demo-page--regelmaat">
			<div class="rvo-app rvo-app--maatregelen">
				<div class="rvo-app-container rvo-app-container--maatregel">
					<div class="rvo-app-content">
						<Heading :level="1">Onderzaai vanggewas</Heading>
						<Heading :level="3">Wat is het?</Heading>
						<p>
							Grasland met kruiden zorgt voor een diepere doorworteling en een
							betere bodemstructuur. En voor diversiteit in ruwvoer.
						</p>
						<Heading :level="3">Wat levert het op?</Heading>
						<p>
							Staan er op het perceel minimaal 25% kruiden en vlinderbloemige
							gewassen (ingezaaid of spontane opkomst); en minimaal 25% gras.
						</p>
						<Heading :level="3">In welke situatie geschikt?</Heading>
						<p>
							Uw perceel is zichtbaar bedekt en u verdeelt het gras, de kruiden
							en vlinderbloemige gewassen gelijkmatig over het perceel.
						</p>
						<Heading :level="3">Wat moet ik er voor doen?</Heading>
						<p>
							In het document Gewascodes en gewassen eco-activiteiten leest u
							welke gewassen meetellen voor deze eco-activiteit. En welke
							grassen, kruiden en vlinderbloemige gewassen uit de lijst
							Stikstofbindend gewas.
						</p>
						<div class="rvo-maatregel-actions">
							<details class="rvo-bewaar-knop">
								<summary class="rvo-maatregel-bewaar-link">
									<span class="rvo-bewaar"
										><span
											class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
											role="img"
											aria-label="Favoriet"
										></span
										>Bewaar</span
									><span class="rvo-bewaard"
										><span
											class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--md rvo-icon--hemelblauw"
											role="img"
											aria-label="Favoriet"
										></span
										>Bewaard</span
									>
								</summary>
							</details>
							<span class="rvo-link rvo-link--with-icon rvo-link--no-underline">
								Meer informatie op rvo.nl<span
									class="utrecht-icon rvo-icon rvo-icon-externe-link rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--after"
									role="img"
									aria-label="Externe link"
								></span
							></span>
						</div>
						<div class="rvo-maatregel-img-container">
							<img
								src="../images/regelmaat/boer-computer.svg"
								class="rvo-maatregel-img"
							/>
						</div>
					</div>
					<ul class="rvo-app-menu">
						<li class="rvo-app-menu-item">
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--zoeken&amp;viewMode=story"
								class="rvo-app-menu-item-link"
								><span
									class="utrecht-icon rvo-icon rvo-icon-zoek rvo-icon--2xl rvo-icon--hemelblauw"
									role="img"
									aria-label="Zoek"
								></span
								>Zoeken</a
							>
						</li>
						<li class="rvo-app-menu-item">
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--bewaard&amp;viewMode=story"
								class="rvo-app-menu-item-link"
								><span
									class="utrecht-icon rvo-icon rvo-icon-favoriet rvo-icon--2xl rvo-icon--hemelblauw"
									role="img"
									aria-label="Favoriet"
								></span
								>Bewaard</a
							>
						</li>
						<li class="rvo-app-menu-item">
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--maatregelen&amp;viewMode=story"
								class="rvo-app-menu-item-link"
								><span
									class="utrecht-icon rvo-icon rvo-icon-plus rvo-icon--2xl rvo-icon--hemelblauw"
									role="img"
									aria-label="Plus"
								></span
								>Suggesties</a
							>
						</li>
						<li class="rvo-app-menu-item">
							<a
								href="iframe.html?args=&amp;id=demo-pagina-s-de-regelmaat--profiel&amp;viewMode=story"
								class="rvo-app-menu-item-link"
								><span
									class="utrecht-icon rvo-icon rvo-icon-user rvo-icon--2xl rvo-icon--hemelblauw"
									role="img"
									aria-label="User"
								></span
								>Profiel</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
