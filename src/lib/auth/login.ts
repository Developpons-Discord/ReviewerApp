import axios from 'axios';
import type { User } from '$lib/types/user';
import Maybe from '$lib/types/maybe';
import {handleErrors} from "$lib/utils/requests";

export declare interface LoginDto {
	username: string;
	password: string;
}

export async function login(loginDto: LoginDto): Promise<Maybe<User, string[]>> {
	try {
		const user = await axios.post<User>('/auth/login', loginDto, {
			withCredentials: true
		});
		return Maybe.ok(user.data);
	} catch (e) {
		return handleErrors<User>(e)
	}
}
