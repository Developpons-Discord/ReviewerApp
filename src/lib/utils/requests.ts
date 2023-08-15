import type { AxiosError } from 'axios';
import Maybe from "$lib/types/maybe";

export function handleErrors<T>(e: any): Maybe<T, string[]> {
    const error: string[] | string = (e as AxiosError).response?.data?.message;
    if (typeof error === 'string') {
        return Maybe.error([error]);
    } else if (typeof error === 'object') {
        return Maybe.error([...error]);
    } else {
        return Maybe.error(['Une erreur inconnue est survenue']);
    }
}

