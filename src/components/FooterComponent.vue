<template>
    <footer>
      <div class="container-fluid bg-light">
        <div class="row">
          <div class="col">
            <a href="#" @click.prevent="clickHomePage">
              <img
                :src="logo.image.url"
                :width="logo.image.width*2"
                :height="logo.image.height*2"
                :alt="logo.title"
              />
            </a>
          </div>
          <div class="col">
            <p class="h5 fw-bolder">Company</p>
            <ul class="list-group">
              <li
                class="list-group-item border-0 bg-light ps-0"
                v-for="item in companyGuides"
                :key="item.id"
              >
                <button
                  type="button"
                  class="border-0 bg-light ps-0"
                  @click="item.action"
                >
                  {{ item.title }}
                </button>
              </li>
            </ul>
          </div>
          <div class="col">
            <p class="h5 fw-bolder">Customer</p>
            <ul class="list-group">
              <li
                class="list-group-item border-0 bg-light ps-0"
                v-for="item in customerGuides"
                :key="item.id"
              >
                <button
                  type="button"
                  class="border-0 bg-light ps-0"
                  @click="item.action"
                >
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
              <li class="list-group-item border-0 bg-light ps-0" v-for="item in communityGuides" :key="item.id">
                <button
                  type="button"
                  class="border-0 bg-light"
                  @click="item.action"
                >
                  <i class="bi fs-4" :class="item.style"></i>
                </button>
              </li>
            </ul>
          </div>
          <div class="col">
            <img
              :src="contactInfo.map.url"
              :width="contactInfo.map.width"
              :height="contactInfo.map.height"
            />
          </div>
        </div>
      </div>
    </footer>
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
        },
        {
          id: 3,
          type: guideType.customer,
          title: '購物需知',
          action: this.clickShoppingHint
        },
        {
          id: 4,
          type: guideType.community,
          title: 'Facebook',
          action: this.clickFacebook,
          style: {
            'bi-facebook': true,
            'text-primary': true
          }
        },
        {
          id: 5,
          type: guideType.community,
          title: 'Instagram',
          action: this.clickInstagram,
          style: {
            'bi-instagram': true,
            'color-ig': true
          }
        },
        {
          id: 6,
          type: guideType.community,
          title: 'Youtube',
          action: this.clickYoutube,
          style: {
            'bi-youtube': true,
            'text-danger': true
          }
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
      contactInfo: {
        address: '326桃園市楊梅區永平路191號',
        phone: '0955-259-888',
        workTime: '每周一至周五 09:00 - 18:00',
        email: 'kennken0@gmail.com',
        fbUrl: '',
        igUrl: '',
        ytUrl: '',
        map: {
          url: 'https://storage.googleapis.com/vue-course-api.appspot.com/mikelin-hexschool/1704820123187.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BHux%2BSpr3oIHC9ZTsjH07jpihdHRjYOBrmWi7Nk2TmBARa9VHjSWvRThUhEPFHYLjWjctPdRlx3ocgU4ZXnK9MywLxnqXhqBTuGwmJ4euWat7q8JBLmoEGdBmI7XqSYZ0tpKAz75xetrxFiLC2QA08GMmq7VpbWbcGk7j%2FuBWMuMMkCaGxxxTsLki4u9WZa64NNILTHibX7Gm3sbpASNzEWJSJ%2FZeBg564xjhZ6q4la4DDTHft%2BXvqT1ba1XXjQETFsB0Ef5SFRBbOuoOd%2B1zml%2BWQwQQt0tZH8ePD5XIy0X%2BJzNFjVDZ9dxXq9b1VLQkymaGn82HTYVnIWUfhzA7w%3D%3D',
          width: 250,
          height: 250
        }
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
    clickShoppingHint () {
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
    }
  }
}
</script>

<style>
.color-ig {
  background: linear-gradient(to bottom left, #9b37ba, #fed16e);
  background: -webkit-linear-gradient(to bottom left, #9b37ba, #fed16e);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
