<template>
  <div class="flex justify-center">
    <div class="container">
      <div>
        {{ data }}
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
import { princess } from '~/apis/index'
export default Vue.extend({
  name: 'Index',
  data() {
    return {
      data: {}
    }
  },
  methods: {
    async getCardData(id) {
      const data = await princess.getCardData(id)
      this.data = data
    },
    async getCardList() {
      const data = await princess.getCardList()
      this.data = data
    }
  }
})
</script>
