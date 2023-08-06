<script lang="ts">
	import { Img } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Tårs Lystbådehavn</title>
</svelte:head>
<div class="flex flex-wrap mb-4">
	<section
		class="bg-center bg-cover bg-[url('/images/Taarshavn.webp')] bg-gray-700 bg-blend-multiply sm:basis-full xl:basis-4/5"
	>
		<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
			>
				Welcome to Tårs Lystbådehavn
			</h1>
			<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
				TårsHavn er en lille havn med 45 havnepladser i den nord-vestlige del af Nakskov fjord, ved
				færgeforbindelsen “Tårs-Spodsbjerg”
			</p>
			<div
				class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
			/>
		</div>
	</section>
	<div class="basis-full xl:basis-1/5 px-4">
		<h2 class="text-4xl mb-4">Faciliteter</h2>
		<div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-1">
			<div><iconify-icon icon="map:toilet" width="50" height="50" /> Toilet</div>
			<div><iconify-icon icon="material-symbols:power-plug" width="50" height="50" />El</div>
			<div><iconify-icon icon="material-symbols:shower" width="50" height="50" />Bad</div>
			<div><iconify-icon icon="mdi:campervan" width="50" height="50" />Autocamper</div>
			<div><iconify-icon icon="mdi:bike" width="50" height="50" />Cykel Camping</div>
			<div><iconify-icon icon="map:boat-ramp" width="50" height="50" />Slæbe Sted</div>
			<div>
				<iconify-icon
					icon="fluent-emoji-high-contrast:potable-water"
					width="50"
					height="50"
				/>Drikke Vand
			</div>
			<div>
				<iconify-icon icon="icon-park-outline:fire-two" width="50" height="50" />Bål Plads
			</div>
		</div>
	</div>
</div>
<article>
	<header class="mb-2">
		<h2 class="text-4xl">Beliggenhed</h2>
	</header>
	<p>Storebælt, Lolland W-kyst</p>
	<p>
		Tårs Havn er en lille havn med 45 havnepladser i den nord-vestlige del af Nakskov fjord, ved
		færgeforbindelsen “Tårs- Spodsbjerg”
	</p>
	<p>Ved kraftig vestlig vind , må der dog forventes lavere vandstand</p>
	<p>Navigation: 54°52,7'N 011°01,4'E - kort 144</p>
	<p>
		Havnen kan anløbes dag og nat, der sejles mod Tårs Færgehavn, (om natten ledefyr F.R), derefter
		kurs 346° med 2 hvide ledefyr ind til havnen
	</p>
	<div class="felx flex-wrap">
		<Img class="h-auto w-auto basis-1/2 m-0" src="images/142_beskaret.webp" alt="" />
		<Img class="h-auto w-auto basis-1/2 m-0" src="images/harbourLimit500.webp" alt="" />
	</div>
</article>

<style>
</style>
