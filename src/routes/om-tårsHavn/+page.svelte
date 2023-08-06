<script>
	import { Card } from 'flowbite-svelte';
	export let data;
</script>

<svelte:head>
	<title>Om TårsHavn</title>
</svelte:head>

<div class="divide-y-2">
	<section class="mb-8">
		<h1 class="text-4xl mb-2 mt-2">Bestyrelsen</h1>
		<div class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2">
			{#each data.bestyrelsen as b}
				<div
					class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
				>
					<div class="flex flex-col items-center pb-10">
						<img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={b.image} alt="{b.name} image" />
						<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{b.name}</h5>
						<span class="text-sm text-gray-500 dark:text-gray-400">{b.role}</span>
						{#if b.tlf}
							<span class="text-sm text-gray-500 dark:text-gray-400">tlf: {b.tlf}</span>
						{/if}
						<div class="flex mt-4 space-x-3 md:mt-6">
							<a
								href="mailto:{b.email}"
								class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>Email</a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="">
		<h1 class="text-4xl mb-2 mt-2">Vedtægter</h1>
		125
		<div />
	</section>
	<section>
		<h2>Ordensregler</h2>
	</section>
	<section>
		<h2>ModtagetStøtte</h2>
	</section>
	<section>
		<h2>Generalforsamling</h2>
	</section>
	<section>
		<h2>Aktiviteter</h2>
	</section>
	<section>
		<h2>Dokumenter</h2>
	</section>
	<section>
		<h2>Takstblad</h2>
	</section>
</div>
