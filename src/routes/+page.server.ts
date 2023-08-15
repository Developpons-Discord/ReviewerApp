import type { Cookies } from '@sveltejs/kit';

export function load({ cookies }: { cookies: Cookies }) {
	const access_token = cookies.get('access_token');

	return {
		access_token
	};
}
