<template>
  <div class="flex justify-center">
    <div class="container">
      <div>
        <base-card h1="カード">
          <div>{{ data }}</div>
        </base-card>
      </div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="getCardData(250)"
        >
          カード取得
        </button>
      </div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="getCardList()"
        >
          全カード取得
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import princess from 'princess'
import { princess as princessApi } from '~/api/index'
import BaseCard from '~/components/bases/BaseCard.vue'
export default Vue.extend({
  components: {
    BaseCard
  },
  data() {
    return {
      data: null as princess.Cards | null
    }
  },
  methods: {
    async getCardData(id: number) {
      const data = await princessApi.getCardData(id)
      this.data = data
    },
    async getCardList() {
      const data = await princessApi.getCardList()
      this.data = data
    }
  }
})
</script>
