<script>
	import '../app.css';
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import 'iconify-icon';
</script>

<header class="flex-none w-full mx-auto bg-white dark:bg-slate-950">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="images\Logo.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Tårs Lystbådehavn
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />

		<NavUl {hidden}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/nyheder">Nyheder</NavLi>
			<NavLi href="/aktiviteter">Aktiviteter</NavLi>
			<NavLi href="/gæster">Gæster</NavLi>
			<NavLi href="/faciliteter">Faciliteter</NavLi>
			<NavLi href="/om-tårsHavn">Om TårsHavn</NavLi>
			<NavLi href="/billedgalleri">Billedgalleri</NavLi>
			<DarkMode />
		</NavUl>
	</Navbar>
</header>
<div class="dark:text-white">
	<main class="container mx-auto mt-5">
		<slot />
	</main>
</div>
