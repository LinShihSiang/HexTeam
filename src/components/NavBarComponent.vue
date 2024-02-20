<template>
  <div class="container bee-primary-color header-full">
    <div class="row h-100">
      <div class="col">
        <nav class="navbar navbar-expand-lg navbar-light h-100">
          <div>
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
                <li class="nav-item me-4"
                    :class="{'nav-focus': item.focus}"
                    v-for="item in companyGuides" :key="item.id">
                  <router-link
                    class="nav-link text-dark ms-0 fw-bold fs-4"
                    :to="item.router"
                    @click.prevent="clickRouter(item.id)">
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="col text-center align-self-center">
        <router-link to="/"  @click.prevent="clickRouter(0)">
          <img
            :src="logo.url"
            :alt="logo.title"
          />
        </router-link>
        <span class="h1 ms-4 fw-bold">{{ logo.title }}</span>
      </div>

      <div class="col">
        <ul class="list-group list-group-horizontal d-flex justify-content-end h-100 align-items-center">
          <li class="bee-primary-color list-group-item border-0 pe-0"
              :class="{ 'd-none': !enableSearch }">
            <input
              class="form-control mt-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </li>
          <li class="bee-primary-color list-group-item d-none d-lg-block border-0 pe-0">
            <button type="button" class="btn-hex" @click="clickSearch">
              <i class="bi bi-search fs-2"></i>
            </button>
          </li>
          <li class="bee-primary-color list-group-item border-0 pe-0">
            <div class="position-relative">
              <button
                type="button"
                class="btn-hex"
                @click="clickShoppingCart">
                <i class="bi fs-2"
                  :class="{ 'bi-cart': carts.count == 0, 'bi-cart-check-fill': carts.count > 0 }"></i>
            </button>
              <span class="cart-count"
                  :class="{ 'd-none': carts.count == 0 }">
                {{ cartDisplayQuantity }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { guideType } from '../enums/GuideTypeEnum.js'
import LogoUrl from '../imgs/Logo.png'

export default {
  data () {
    return {
      guideItems: [
        {
          id: 1,
          type: guideType.company,
          title: '蜂蜜產品',
          router: '/ProductList',
          focus: false
        },
        {
          id: 2,
          type: guideType.company,
          title: '蜂蜜知識+',
          router: '/KnowledgeList',
          focus: false
        }
      ],
      logo: {
        title: '愛蜂坊',
        url: LogoUrl
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
    clickSearch () {
      console.log('click search')
      this.enableSearch = !this.enableSearch
    },
    clickShoppingCart () {
      console.log('click shopping cart')
      this.carts.count++
    },
    clickRouter (id) {
      this.guideItems.forEach(element => {
        if (element.id === id) {
          element.focus = true
        } else {
          element.focus = false
        }
      })
    }
  }
}
</script>

<style>
.header-full {
  height: 100px;
  box-shadow: 0 0 0 100vmax rgba(255, 181, 52, 1);
  clip-path: inset(0 -100vmax);
}

.nav-focus {
  border-radius: 15px;
  background: white;
}

.cart-count {
  position: absolute;
  height: 25px;
  width: 25px;
  right: -10px;
  border-radius: 50%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
