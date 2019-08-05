import { Cards } from 'princess'
import axiosBase from 'axios'
const axios = axiosBase.create({
  baseURL: 'https://api.matsurihi.me/mltd/v1/'
})

const getCardData = async (id: number) => {
  const response = await axios.get(`/cards/${id}`)
  const cards: Cards = response.data
  return cards
}

const getCardList = async () => {
  const response = await axios.get('/cards/')
  const cards: Cards = response.data
  return cards
}

export default {
  getCardData,
  getCardList
}
