/**
 * El state es reactivo y cuando cambia notifica a todos los componentes
 */

// export default() => ({

// })

export default () => ({
    status: 'authenticating', // 'authenticated','no-authenticated','authenticating',
    user: null,
    idToken: null,
    refreshToken: null
})