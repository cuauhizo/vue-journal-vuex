/**
 * Pueden ser acciones asincronas que puede llamar a una mutacion
 */
// export const myAction = async ({ commit }) => {

// }

import journalApi from "@/api/journalApi"

export const loadEntries = async({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
        // console.log({ data })
        // si no hay data hacemos return y setEntries se manda como un arreglo vacio
    if (!data) {
        commit('setEntries', [])
        return
    }
    // si, si hay se ejecuta esta parte
    const entries = []
    for (let id of Object.keys(data)) {
        // console.log(id)
        entries.push({
            id,
            ...data[id]
        })
    }

    // console.log(entries)
    commit('setEntries', entries)
}

export const updateEntry = async({ commit }, entry) => { // entry debe de ser un parametro
    // console.log(entry, 'actions');
    // Extraer solo lo que necesitan // -id
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    // await journalApi.put ( PATH .json, dataToSave )
    const resp = await journalApi.put(`/entries/${ entry.id }.json`, dataToSave)
    console.log(resp)

    // Commit de una mutation -> updateEntry
    commit('updateEntry', {...entry })
}

export const createEntry = async({ commit }, entry) => {
    // paso 2
    // dataToSave
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    // const { data } = await journalApi.post(`PATH.json`, dataToSave)
    const { data } = await journalApi.post(`/entries.json`, dataToSave)


    // data = {  "name": "-NVAvUD9rYeVyBSSwJDc" }
    dataToSave.id = data.name

    // commit -> addEntry
    commit('addEntry', dataToSave)

    return data.name;
}

export const deleteEntry = async({ commit }, id) => {
    // await journalApi.delete(path)
    await journalApi.delete(`/entries/${ id }.json`)

    // commit => deleteEntry
    commit('deleteEntry', id)
    return id
}