import axios, { AxiosError } from 'axios';
import type { User } from '$lib/types/user';
import Maybe from '$lib/types/maybe';

export async function getCurrentUser(): Promise<Maybe<User, string>> {
	try {
		const user = await axios.get<User>('http://localhost:3000/auth/profile', {
			withCredentials: true
		});
		return Maybe.ok(user.data);
	} catch (e) {
		const error: string = (e as AxiosError).response?.data?.message;
		return Maybe.error(error);
	}
}