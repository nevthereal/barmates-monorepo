<script>
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<Drawer />
<Nav />
<slot />
<Footer />
