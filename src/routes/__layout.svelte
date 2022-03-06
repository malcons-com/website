<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';
</script>

<div class="flex flex-col h-screen mx-auto">
	<Nav />
	<div class="p-8 flex-grow">
		<slot />
	</div>
    <Footer />
</div>
