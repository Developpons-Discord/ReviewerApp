import axios, { AxiosError } from 'axios';
import Maybe from '$lib/types/maybe';

export declare interface RegisterDto {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	eula: boolean;
}

export async function register({
	password,
	confirmPassword,
	...registerDto
}: RegisterDto): Promise<Maybe<void, string[]>> {
	if (password !== confirmPassword) {
		return Maybe.error(['Le mot de passe et sa confirmation doivent être identiques']);
	}

	try {
		await axios.post('/auth/register', {
			...registerDto,
			password
		});
		return Maybe.empty();
	} catch (e) {
		const error: string[] | string = (e as AxiosError).response?.data?.message;
		if (typeof error === 'string') {
			return Maybe.error([error]);
		} else if (typeof error === 'object') {
			return Maybe.error([...error]);
		} else {
			return Maybe.error(['Une erreur inconnue est survenue']);
		}
	}
