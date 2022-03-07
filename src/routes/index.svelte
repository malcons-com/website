<script>
	import Services from '../components/services.svelte';
	import About from '../components/about.svelte';
	import Team from '../components/team.svelte';
	import Contact from '../components/contact.svelte';
	import Carousel from '../components/carousel.svelte';
</script>

<svelte:head>
	<title>Malcons</title>
</svelte:head>

<div>
	<Carousel />
	<section id="about">
		<About />
	</section>
	<section id="services">
		<Services />
	</section>
	<section id="team">
		<Team />
	</section>
	<section id="contact">
		<Contact />
	</section>
</div>
