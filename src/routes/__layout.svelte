<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div
	class="flex flex-col h-screen bg-gradient-to-b from-navy-blue to-azure-blue"
>
	<Nav />
	<div class="flex-grow relative">
		<slot />
	</div>
	<Footer />
</div>
