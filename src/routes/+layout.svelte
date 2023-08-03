<script lang="ts">
	import '@picocss/pico';
	import '../app.css';
	import 'iconify-icon';
</script>

<header class="container">
	<nav>
		<ul>
			<li><img src="images\Logo.png" alt="" height="100" /></li>
			<li>Tårs Lystbådehavn</li>
		</ul>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/nyheder">Nyheder</a></li>
			<li><a href="/aktiviteter">Aktiviteter</a></li>
			<li><a href="/gæster">Gæster</a></li>
			<li><a href="/faciliteter">Faciliteter</a></li>
			<li><a href="/om-tårsHavn">Om TårsHavn</a></li>
			<li><a href="/billedgalleri">Billedgalleri</a></li>
		</ul>
	</nav>
</header>
<main class="container">
	<slot />
</main>
<footer class="container">
	<div class="grid">
		<div>
			<p>Den selvejende institution Tårs Havn</p>
			<p>Tårsvej 215 Tårs 4912 Harpelunde</p>
			<p>CVR- nr. 65823411</p>
		</div>
		<div>Copyright © 2017-2023</div>
		<div>
			<p>Tårs Havn Hjemmeside: www.taarshavn.dk</p>
			<p>Tlf. (Havnefoged) + 45 23 72 84 84</p>
			<p>Mail: havnefoged@taarshavn.dk</p>
			<p>Mail: taarshavn@taarshavn.dk</p>
			<p>Mail: webmaster@taarshavn.dk</p>
		</div>
	</div>
</footer>

<style>
</style>
