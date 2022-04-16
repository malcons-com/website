<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div
	class="flex flex-col h-[220vh] bg-gradient-to-bl from-navy-blue to-white"
>
	<Nav />
	<div class="flex-grow relative">
		<slot />
	</div>
	<Footer />
</div>
