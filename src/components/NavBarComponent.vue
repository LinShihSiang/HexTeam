<template>
  <div class="container-fluid bg-light">
      <div class="row align-middle">
        <div class="col">
          <nav class="navbar navbar-expand-lg navbar-light h-100">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item" v-for="item in companyGuides" :key="item.id">
                    <a class="nav-link mx-4" href="#" @click.prevent="item.action">
                      {{ item.title }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="col text-center">
          <a class="nav-link p-0" href="#" @click.prevent="logo.action">
            <img
              :src="logo.image.url"
              :alt="logo.title"
              class="nav-logo"
            />
          </a>
        </div>

        <div class="col">
          <ul
            class="list-group list-group-horizontal d-flex justify-content-end h-100"
          >
            <li
              class="list-group-item border-0 px-1 bg-light"
              :class="{ 'd-none': !enableSearch }"
            >
              <input
                class="form-control mt-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
            <li class="list-group-item border-0 d-none d-lg-block px-1 bg-light">
              <button type="button" class="border-0 bg-light" @click="clickSearch">
                    <i class="bi bi-search fs-2"></i>
              </button>
            </li>
            <li class="list-group-item border-0 px-1 bg-light">
              <button
                type="button"
                class="border-0 bg-light"
                @click="clickShoppingCart"
              >
                <div class="position-relative">
                  <i
                    class="bi fs-2"
                    :class="{ 'bi-cart': carts.count == 0, 'bi-cart-check-fill': carts.count > 0}"
                  ></i>
                  <span
                    class="cart-count"
                    :class="{ 'd-none': carts.count == 0 }"
                  >
                    {{ cartDisplayQuantity }}
                  </span>
                </div>
              </button>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { guideType } from '../enums/GuideTypeEnum.js'

export default {
  data () {
    return {
      guideItems: [
        {
          id: 1,
          type: guideType.company,
          title: '蜂蜜產品',
          action: this.clickProductList
        },
        {
          id: 2,
          type: guideType.company,
          title: '蜂蜜知識+',
          action: this.clickKnowledgeList
        }
      ],
      logo: {
        title: '愛蜂坊',
        image: {
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/mikelin-hexschool/1704824924154.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qwt9ckKeYpsRrZKuQS62FFVuBgRDkHREiNkLvIBkOp1V3yvo8IFsOPFeMJ%2FL97JS7%2FY2OBu8NmS9rpiIj5PVLFAdqj154vlX5yxAOoCG8hacfXOe6TuV7reiwkIUdqSh1wMmlwnVjPNgYyn0BmQl9Hz5mRDKqUyuL0Qvr%2FUeLyRMrXbVY3q3kYZSrNxWmH5JesK%2FCdW4XoxYjNgkrAWc84OGu1gk9D%2BAub4caRXH2yMh9oUh9QzeKzZzSSpB2bLKh4yD1eggSv%2FHw3DAwmJPwGjqA8DtQbnyjCvviMLi2i7%2FTr9fZUfB7xSwkEsO741ou5HVK%2FqGg8cNNXPdEbGenQ%3D%3D',
          width: 75,
          height: 75
        },
        action: this.clickHomePage
      },
      carts: {
        count: 0
      },
      enableSearch: false
    }
  },
  computed: {
    cartDisplayQuantity () {
      const result = this.carts.count

      if (this.carts.count < 10) {
        return result
      } else {
        return '9+'
      }
    },
    companyGuides () {
      return this.guideItems.filter((x) => x.type === guideType.company)
    }
  },
  methods: {
    clickProductList () {
      console.log('click product list')
    },
    clickKnowledgeList () {
      console.log('click knowledge list')
    },
    clickHomePage () {
      console.log('click home page')
    },
    clickSearch () {
      console.log('click search')
      this.enableSearch = !this.enableSearch
    },
    clickShoppingCart () {
      console.log('click shopping cart')
      this.carts.count++
    }
  }
}
</script>

<style>
.nav-logo {
  height: 75px;
  width: 100px;
  object-fit: cover;
}

.cart-count {
  position: absolute;
  height: 25px;
  width: 25px;
  top: -4px;
  right: -10px;
  border-radius: 50%;
  background-color: red;
  color: white;
}
</style>
