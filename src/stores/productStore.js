import { defineStore } from 'pinia'
import { categoryEnum } from '../enums/CategoryEnum.js'
import axios from 'axios'

export default defineStore('productStore', {
  state: () => ({
    products: [],
    productLoadingState: false
  }),
  getters: {
    getBeeProducts: ({ products }) => {
      const beeProducts = products.filter(x => {
        return parseInt(x.category) === categoryEnum.beeProduct
      })

      return beeProducts.sort((x, y) => {
        return x.price - y.price
      })
    },
    getBanners: ({ products }) => {
      return products.filter(x => {
        return parseInt(x.category) === categoryEnum.banner
      })
    }
  },
  actions: {
    getProducts () {
      this.productLoadingState = true

      axios
        .get(`${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/products/all`)
        .then((response) => {
          this.productLoadingState = false

          if (response.data.products == null) {
            this.products = []
            return
          }

          this.products = Object.values(response.data.products)
        })
        .catch((error) => {
          this.productLoadingState = false

          alert(error.response.data.message)
        })
    }
  }
})
