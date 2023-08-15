import {getCurrentUser} from "$lib/auth/get-current-user";

export async function load() {
    const user = await getCurrentUser()
    const userData = user.value

    return {
        userData
    }
}