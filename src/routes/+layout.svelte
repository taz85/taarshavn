<script>
	import '../app.css';
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import 'iconify-icon';
	let cc = todayDate();
	function todayDate() {
		var d = new Date();
		var n = d.getFullYear() + '  ';
		return n;
	}
</script>

<header class="flex-none w-full mx-auto bg-white dark:bg-slate-950">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="images\Logo.webp" class="mr-3 h-6 sm:h-9" alt="Logo" />
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
	<main>
		<div class="container mx-auto mt-5">
			<slot />
		</div>
	</main>
</div>
<footer class="container mx-auto dark:text-white mt-8 bg-white dark:bg-gray-900">
	<div class="grid md:grid-cols-2 gap-4 text-center">
		<div class="">
			<p>Den selvejende institution Tårs Havn</p>
			<p>Tårsvej 215 Tårs 4912 Harpelunde</p>
			<p>CVR- nr. 65823411</p>
		</div>
		<div class="">
			<p>Tårs Havn Hjemmeside: www.taarshavn.dk</p>
			<p>Tlf. (Havnefoged) + 45 23 72 84 84</p>
			<p>Mail: havnefoged@taarshavn.dk</p>
			<p>Mail: taarshavn@taarshavn.dk</p>
			<p>Mail: webmaster@taarshavn.dk</p>
		</div>
	</div>
	<div class=" mt-2 md:mt-0 text-center">Copyright © 2017 - {cc}</div>
</footer>
