import {getCurrentUser} from "$lib/auth/get-current-user";

export async function load() {
    let userData
    const user = await getCurrentUser()

    if(user != undefined){
        userData = user.value
    }

    return {
        userData
    }
}