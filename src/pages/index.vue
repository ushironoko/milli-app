<template>
  <div>
    <div class="w-full sticky top-0 shadow-md bg-gray-100 h-10">
      <div class="m-2 inline-block align-middle">
        <input id="sort" v-model="sort" type="checkbox" />
        <label class="text-xs text-grey-dark" for="sort">アイドル順</label>
      </div>
    </div>
    <div v-for="card in cards" :key="card.name" class="my-4">
      <base-card
        v-if="isNoneOrFes(card.extraType)"
        :card-data="card"
      ></base-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import cloneDeep from 'lodash.clonedeep'
import { getCardList, CardListConfig } from '~/api/princess'
import BaseCard from '~/components/bases/BaseCard.vue'
export default Vue.extend({
  components: {
    BaseCard
  },
  data(): {
    cards: princess.Cards
    sort: boolean
  } {
    return {
      cards: [],
      sort: false
    }
  },
  watch: {
    sort(sort) {
      const list: princess.Cards = cloneDeep(this.cards)
      sort
        ? (this.cards = list.sort((a, b) => {
            return a.idolId - b.idolId
          }))
        : (this.cards = list.sort((a, b) => {
            return a.id - b.id
          }))
    }
  },
  async asyncData() {
    const config: CardListConfig = {
      rarity: 4,
      extraType: 0
    }
    const cards = await getCardList(config)
    return {
      cards
    }
  },
  methods: {
    isNoneOrFes(extraType: number) {
      return extraType === 0 || extraType === 4
    }
  }
})
</script>
