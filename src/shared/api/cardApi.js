import axios from "axios";

export const cardApi = {
    getCards: async () => {
        const cards = await axios.get('https://api.hobbi-nitki.ru/api/cards')

        return cards.data
    },

    getCardById: async (id) => {
        const card = await axios.get(`https://api.hobbi-nitki.ru/api/card/${id}`)

        return card.data
    },

    getCardByFilter: async (str1, str2) => {
        const card = await axios.get(`https://api.hobbi-nitki.ru/api/card/filter?section=${str1}&subsection=${str2}`)

        return card.data
    },

    createCard: async (data) => {
        const res = await axios.post(`https://api.hobbi-nitki.ru/api/admin-add-card`, data, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })

        if (res.data === 'ok')
            return 'Создалось'
    }
}