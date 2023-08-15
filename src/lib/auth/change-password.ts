import axios, { AxiosError } from 'axios';
import Maybe from '$lib/types/maybe';

export async function sendEmail(email: string): Promise<Maybe<void, string>> {
	try {
		await axios.post(
			'/auth/change-password',
			{
				email: email
			},
			undefined
		);
		return Maybe.empty();
	} catch (e) {
		const error: string = (e as AxiosError).response?.data?.message;
		return Maybe.error(error);
	}
}

export async function doChangePassword(
	userId: number,
	code: string,
	password: string,
	confirmPassword: string
): Promise<Maybe<void, string[]>> {
	if (password !== confirmPassword) {
		return Maybe.error(['Le mot de passe et sa confirmation doivent être identiques']);
	}

	try {
		await axios.post(
			`/auth/change-password-process?code=${code}&userId=${userId}`,
			{
				newPassword: password
			},
			undefined
		);
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
}
