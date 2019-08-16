<template>
  <div>
    <div v-for="card in cards" :key="card.name" class="my-4">
      <base-card v-if="hasExtraType(card)" :card-data="card"></base-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getCardList, CardListConfig } from '~/api/princess'
import BaseCard from '~/components/bases/BaseCard.vue'
export default Vue.extend({
  components: {
    BaseCard
  },
  data(): {
    cards: princess.Cards
  } {
    return {
      cards: []
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
    hasExtraType(card: princess.Card) {
      return card.extraType === 0 || 4
    }
  }
})
</script>
