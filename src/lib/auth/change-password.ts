import axios from 'axios';
import Maybe from '$lib/types/maybe';
import {handleErrors} from "$lib/utils/requests";

export async function sendEmail(email: string): Promise<Maybe<void, string[]>> {
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
		return handleErrors<void>(e)
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
		return handleErrors<void>(e)
	}
}
