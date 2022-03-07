<script>
	import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';
	import MdPhone from 'svelte-icons/md/MdPhone.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
</script>

<div class="w-full flex flex-col sm:flex-row justify-between gap-4 py-14 px-8 lg:px-24 xl:px-48">
	<div class="flex-1 flex flex-col items-center shadow-2xl bg-white p-8 rounded-xl">
		<div class="w-8">
			<MdLocationOn />
		</div>
		<div class="text-center">Str. Dionisie cel Mic, nr. 26, c.p. 900363, Constanta, Romania</div>
	</div>
	<div class="flex-1 flex flex-col items-center shadow-2xl bg-white p-8 rounded-xl">
		<div class="w-8">
			<MdPhone />
		</div>
		<div class="text-center">
			<b>Tel: </b>+40 722 590 420
            <br />
			<b>Fax: </b>0341 807 905
		</div>
	</div>
	<div class="flex-1 flex flex-col items-center shadow-2xl bg-white p-8 rounded-xl">
		<div class="w-8">
			<MdEmail />
		</div>
		<div class="text-center">
			<a class="text-black" href="mailto:malconscom1994@gmail.com">
				malconscom1994@gmail.com
			</a>
		</div>
	</div>
</div>
