import axios from 'axios';
import type { User } from '$lib/types/user';
import Maybe from '$lib/types/maybe';
import {handleErrors} from "$lib/utils/requests";

export async function getCurrentUser(): Promise<Maybe<User, string[]>> {
	try {
		const user = await axios.get<User>('http://localhost:3000/auth/profile', {
			withCredentials: true
		});
		return Maybe.ok(user.data);
	} catch (e) {
		return handleErrors<User>(e)
	}
}