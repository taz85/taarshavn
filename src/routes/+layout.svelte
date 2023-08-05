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
	<main>
		<slot />
	</main>
</div>
<footer class="container mx-auto dark:text-white mt-8">
	<div class="grid md:grid-cols-3 text-center">
		<div class="order-1">
			<p>Den selvejende institution Tårs Havn</p>
			<p>Tårsvej 215 Tårs 4912 Harpelunde</p>
			<p>CVR- nr. 65823411</p>
		</div>
		<div class="order-4 md:order-2 mt-2 md:mt-0">Copyright © 2017-2023</div>
		<div class="order-3 mt-2 md:mt-0">
			<p>Tårs Havn Hjemmeside: www.taarshavn.dk</p>
			<p>Tlf. (Havnefoged) + 45 23 72 84 84</p>
			<p>Mail: havnefoged@taarshavn.dk</p>
			<p>Mail: taarshavn@taarshavn.dk</p>
			<p>Mail: webmaster@taarshavn.dk</p>
		</div>
	</div>
</footer>
