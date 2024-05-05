export function existsOrError(data: string | number | boolean, msg: string) {
    if(!data) throw msg
}