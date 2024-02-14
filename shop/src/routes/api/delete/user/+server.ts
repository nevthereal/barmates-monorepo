import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const userId = url.searchParams.get('id');
	return new Response();
};
