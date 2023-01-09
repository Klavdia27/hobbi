import axios from "axios";

export const cardApi = {
    getCards: async () => {
        const cards = await axios.get('http://localhost:5000/api/cards')

        return cards.data
    },

    getCardById: async (id) => {
        const card = await axios.get(`http://localhost:5000/api/card/${id}`)

        return card.data
    },

    getCardByFilter: async (str1, str2) => {
        const card = await axios.get(`http://localhost:5000/api/card/filter?section=${str1}&subsection=${str2}`)

        return card.data
    },

    createCard: async (data) => {
        await axios.post(`http://localhost:5000/api/create/card`, {data})

        return 'Создалось'
    }
}