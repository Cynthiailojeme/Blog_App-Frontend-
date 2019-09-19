<template>
    <div class="blogposts">
      <h2>Latest Posts</h2>
        <div class="posts">
        <div class="row">
            <div class="column" v-for="post in posts" :key="post._id">
                <div class="card">
                    <p class="title">{{ post.title }}</p>
                    <p class="author"><span>By: </span>{{ post.author }}</p>
                    <div class="card-img-top">
                      <img :src="post.image" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <p class="intro">{{ post.intro }}</p>
                        <router-link :to="{name: 'singlepost', params:{id: post._id}}">
                          <button class="view">Read More</button>
                        </router-link>                  
                    </div>
                </div>
            </div>
        </div>

        <div class="dark" id="v-carousel" type="x/template">
            <div class="card-carousel-wrapper">
              <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"><i class="fas fa-chevron-left"></i></div>
              <div class="card-carousel">
                <div class="card-carousel--overflow-container">
                  <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
                    <div class="card-carousel--card" v-for="post in posts" :key="post._id">
                      <img :src="post.image" alt="image">
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"><i class="fas fa-chevron-right"></i></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'posts',
  data() {
      return {
        postCount: 6,
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
         posts: []
       }
     },
    mounted() {
    const url = "http://localhost:5000/api/post/"
    this.$http.get(url + "all")
    .then(response =>  {
    console.log(response.body)
    this.posts= response.body
    this.posts = this.posts.sort(function (a, b) {
      if (a.created_at < b.created_at) {
        return -1;
      }
      if (a.created_at > b.created_at) {
        return +1;
      }
      return 0;
    })
  })
},
computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.posts.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
    // sortedPosts: function() {
    //     this.posts.sort( ( a, b) => {
    //         return new Date(a.date) - new Date(b.date);
    //     });
    //     return this.posts;
    // }
  },
  methods: {
      moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
}
</script>

<style scoped>
.blogposts {
    padding: 30px;
    font-family: 'Spectral';
}
.card-img-top {
    height: 200px;
    width: 100%;
    border-radius: none;
    transition: transform 0.3s;
}
img {
    height: 100%;
    width: 100%;
    transition: transform 0.3s;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
}
/* img:hover {
  transition: transform 0.3s;
} */
h2 {
    font-weight: 500;
    font-size: 40px;
    color: #000000;
    margin-left: 20px;
}
.column{
  display: block;
  float: left;
  width: 33%;
  height: 550px;
  padding: 20px;
  margin-bottom: 30px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.card {
  margin: 0 15px;
  border: none;
  background: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
}
.title {
  margin-top: 20px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 17px;
  line-height: 23px;
  color: #000000;
}
.author {
  margin-left: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
}
.intro {
  font-weight: 500;
  font-size: 16px;
  margin-left: -20px;
  line-height: 21px;
  text-align: justify;
  color: #000000;
}
.view {
  width: 130px;
  height: 40px;
  border: none;
  background: #C4C4C4;
  border-radius: 30px;
  font-weight: bold;
  font-size: 12px;
  color: #000000;
  margin-left: -20px;
}
.view:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.load {
  width: 200px;
  height: 40px;
  border: none;
  background: #C4C4C4;
  border-radius: 30px;
  font-weight: bold;
  font-size: 12px;
  color: #000000;
  margin: auto;
}
.load:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.dark {
    width: 100%;
    height: 400px;
    padding: 30px;
    margin-top: 80px;
    margin-bottom: 50px;
}
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-carousel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-top: 100px;
  width: 1320px;
  margin-bottom: 50px;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  margin-right: 20px;
  transition: transform 150ms linear;
}
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 10px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
}
.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 15px;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  box-sizing: border-box;
  cursor: pointer;
}
.card-carousel--card img {
  width: 300px;
  height: 300px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
</style>