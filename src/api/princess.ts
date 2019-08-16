import axiosBase, { AxiosRequestConfig } from 'axios'
const axios = axiosBase.create({
  baseURL: 'https://api.matsurihi.me/mltd/v1'
})

export interface CardListConfig extends AxiosRequestConfig {
  idolId?: number
  extraType?: number
  rarity?: number
}

export const getCardData = async (id: number) => {
  const response = await axios.get<princess.Cards>(`/cards/${id}`)
  const cards = response.data
  return cards
}

export const getCardList = async (config: CardListConfig) => {
  const response = await axios.get<princess.Cards>(`/cards`, { params: { ...config } })
  const cards = response.data
  return cards
}
