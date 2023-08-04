import axios, { AxiosError } from 'axios';
import Maybe from '$lib/types/maybe';


export async function sendEmail(email: string): Promise<Maybe<void, string>> {
	try {
		await axios.post('/auth/change-password', {
            email: email
        }, undefined);
		return Maybe.empty();
	} catch (e) {
		const error: string = (e as AxiosError).response?.data?.message;
		return Maybe.error(error);
	}
}

export async function doChangePassword(userId: number, code: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
		return Maybe.error(['Le mot de passe et sa confirmation doivent être identiques']);
	}

    try {
		await axios.post(`/auth/change-password-process?code=${code}&userId=${userId}`, {
            new_password: password
        }, undefined);
		return Maybe.empty();
	} catch (e) {
		const error: string = (e as AxiosError).response?.data?.message;
		return Maybe.error(error);
	}
}
