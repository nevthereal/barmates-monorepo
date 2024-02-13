<script>
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<a href="/api/login/github">Sign in with GitHub</a>
<slot />
<Footer />
