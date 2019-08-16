<template>
  <div class="max-w-4xl rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="imgSrc" :alt="cardName" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ cardName }}</div>
      <p class="text-gray-700 text-base">
        {{ cardText }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span
        v-if="rarity"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{ rarity }}</span
      >
      <span
        v-if="idolType"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{ idolType }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    cardData: {
      type: Object as () => princess.Card,
      required: true
    }
  },
  computed: {
    cardName(): string {
      return this.cardData.name
    },
    imgSrc(): string | null {
      const url =
        this.cardData && this.cardData.resourceId
          ? `https://storage.matsurihi.me/mltd/card_bg/${this.cardData.resourceId}_1.png`
          : null
      return url
    },
    rarity(): string {
      switch (this.cardData.rarity) {
        case 1:
          return 'N'
        case 2:
          return 'R'
        case 3:
          return 'SR'
        default:
          return 'SSR'
      }
    },
    idolType(): string | null {
      switch (this.cardData.idolType) {
        case 1:
          return 'Princess'
        case 2:
          return 'Faily'
        default:
          return 'Angle'
      }
    },
    cardText(): string {
      return this.cardData.awakeningText
    }
  }
})
</script>
