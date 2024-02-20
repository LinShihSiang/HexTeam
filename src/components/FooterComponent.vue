<template>
    <footer>
      <div class="container bee-primary-color footer-full">
        <div class="row py-5">
          <div class="col">
            <router-link
              to="/"
              @click.prevent="clickRouter(0)">
              <img
                :src="logo.url"
                :alt="logo.title"
              />
            </router-link>
          </div>
          <div class="col">
            <p class="h5 fw-bolder">Company</p>
            <ul class="list-group">
              <li class="list-group-item border-0 ps-0 bee-primary-color"
                  v-for="item in companyGuides"
                  :key="item.id">
                <router-link
                  class="border-0 ps-0 btn-bee-link bee-primary-color fw-bold"
                  :to="item.router">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col">
            <p class="h5 fw-bolder">Customer</p>
            <ul class="list-group">
              <li class="list-group-item border-0 ps-0 bee-primary-color"
                  v-for="item in customerGuides"
                  :key="item.id">
                <button
                  type="button"
                  class="border-0 ps-0 btn-bee-link bee-primary-color fw-bold"
                  @click="item.action">
                  {{ item.title }}
                </button>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <p class="h5 fw-bolder">Contact Us</p>
            <p>{{ "地址: " + contactInfo.address }}</p>
            <p>{{ "電話: " + contactInfo.phone }}</p>
            <p>{{ "營業時間: " + contactInfo.workTime }}</p>
            <p>{{ "信箱: " + contactInfo.email }}</p>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item border-0 ps-0 bee-primary-color" v-for="item in communityGuides" :key="item.id">
                <button type="button"
                        class="border-0 btn-hex"
                        @click="item.action">
                  <i class="bi fs-4" :class="item.style"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="col">
            <img
              class="img-map"
              :src="contactInfo.mapUrl"
            />
          </div>
        </div>
      </div>
    </footer>
</template>
<script>
import { guideType } from '../enums/GuideTypeEnum.js'
import LogoUrl from '../imgs/Logo.png'
import MapUrl from '../imgs/GoogleMap.png'

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
        },
        {
          id: 3,
          type: guideType.customer,
          title: '購物需知',
          router: '/ShoppingNotice',
          action: this.clickShoppingNotice
        },
        {
          id: 4,
          type: guideType.community,
          title: 'Facebook',
          router: '/Facebook',
          action: this.clickFacebook,
          style: {
            'bi-facebook': true
          }
        },
        {
          id: 5,
          type: guideType.community,
          title: 'Instagram',
          router: '/IG',
          action: this.clickInstagram,
          style: {
            'bi-instagram': true
          }
        },
        {
          id: 6,
          type: guideType.community,
          title: 'Youtube',
          router: '/YouTube',
          action: this.clickYoutube,
          style: {
            'bi-youtube': true
          }
        }
      ],
      logo: {
        title: '愛蜂坊',
        url: LogoUrl
      },
      carts: {
        count: 0
      },
      contactInfo: {
        address: '326桃園市楊梅區永平路191號',
        phone: '0955-259-888',
        workTime: '每周一至周五 09:00 - 18:00',
        email: 'kennken0@gmail.com',
        fbUrl: '',
        igUrl: '',
        ytUrl: '',
        mapUrl: MapUrl
      }
    }
  },
  computed: {
    companyGuides () {
      return this.guideItems.filter((x) => x.type === guideType.company)
    },
    customerGuides () {
      return this.guideItems.filter((x) => x.type === guideType.customer)
    },
    communityGuides () {
      return this.guideItems.filter((x) => x.type === guideType.community)
    }
  },
  methods: {
    clickShoppingNotice () {
      console.log('click shopping hint')
    },
    clickFacebook () {
      console.log('click facebook')
    },
    clickInstagram () {
      console.log('click instagram')
    },
    clickYoutube () {
      console.log('click youtube')
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
.footer-full {
  height: 466px;
  box-shadow: 0 0 0 100vmax rgba(255, 181, 52, 1);
  clip-path: inset(0 -100vmax);
}

.img-map {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.btn-bee-link {
  color: black;
  text-decoration-line: none;
  cursor: pointer;
}

.btn-bee-link:hover {
  text-decoration-line: underline;
}
</style>
