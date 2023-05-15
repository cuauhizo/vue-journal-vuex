/** 
 * Para traer informacion del state
 */
// export const myGetter = ( state ) => {
// return state
// }

export const currentState = (state) => {
    return state.status
}

export const username = (state) => {
    // return state.user?.name || ''
    return state.user ? state.user.name : null
}