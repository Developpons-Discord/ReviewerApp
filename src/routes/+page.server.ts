// @ts-ignore
export function load({cookies}) {
    const access_token = cookies.get('access_token')

    return {
        access_token
    }
}