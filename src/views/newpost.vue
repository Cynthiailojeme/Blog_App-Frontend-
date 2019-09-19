<template>
  <div>
      <section class="single">
      <main class="details">
          <div class="head">
              <p class="title">{{ post.title }}</p>
              <p class="author"><span>By: </span>{{ post.author }}</p>
              <p class="time">{{ post.created_at }}</p>
          </div>
          <br>
          <div class="blogpostimage">
              <img :src="post.image" alt="postimage">
          </div>
          <br>
          <br>
          <div class="blogpostbody">
              <p class="content">{{ post.content }}</p>
          </div>
      </main>

      <aside>
          <h3>Popular Posts</h3>
          <div class="row" :count="postCount">
            <div class="column" v-for="post in posts.slice(10, count)" :key="post._id">
                <div class="card">
                    <div class="card-img-top">
                      <img :src="post.image" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <p class="title2">{{ post.title }}</p>
                        <router-link :to="{name: 'singlepost', params:{id: post._id}}">
                          <button class="view">Read More</button>
                        </router-link>                  
                    </div>
                </div>
            </div>
            </div>
      </aside>
   
          <div class="wordpic">
            <div class="circleimg">
                <img class="authorimage" src="../assets/girl.jpg">
            </div>
            <div class="wordings">
                 <h4>About the author</h4>
                <p class="p2">Cynthia Ilojeme is an intern at Enyata Software Limited. Aside her love for programming, she loves photography and appreciates good pictures with wonderful quality. She is a microbiology graduate from the Federal University of Agriculture, Abeokuta. She loves pets such as dogs, doves etc. She is also a fashion designer.
                </p>
            </div>
        </div>

  </section>

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
  <bottom />
  </div>
</template>

<script>
import bottom from '@/components/bottom.vue'

export default{
    name:'newpost',
    props: ['id'],
    data() {
        return {
            currentOffset: 0,
            windowSize: 3,
            paginationFactor: 220,
            post: [],
            posts: [],
            postCount: 3
        }
    },
components:{
    bottom
},
    mounted() {
        var id = this.$route.params.id
        var url = "http://localhost:5000/api/post/"
        this.$http.get(url + "all")
        .then(response =>  {
            console.log(response.body)
            this.posts= response.body
  });
        this.$http.get(url + "single/" + id)
        .then(response =>{
            console.log(response.body)
            this.post = response.body
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
section {
    padding: 30px;
}
main {
    margin-top: 80px;
    margin-left: 20px;
    float: left;
    width: 65%;
}
img {
    width: 100%;
    height: 100%;
}
.title {
    font-family: Spectral;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
}
.time {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
}
.author {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #000000;
}
.blogpostbody {
    width: 100%;
}
.content {
    font-weight: normal;
    font-size: 17px;
    text-align: justify;
    line-break: auto;
    letter-spacing: 0.1px;
    color: #000000;
}
aside {
    display: block;
    width: 25%;
    float: right;
    padding: 30px;
    margin-top: 100px;
}
h3 {
    margin-bottom: 10px;
}
.column{
  display: block;
  float: left;
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.card {
  border: none;
  background: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
}
.title2 {
  font-weight: 500;
  font-size: 17px;
  margin-left: -20px;
  line-height: 23px;
  color: #000000;
}
button {
  width: 100px;
  height: 30px;
  border: none;
  background: #C4C4C4;
  border-radius: 30px;
  font-weight: bold;
  font-size: 11px;
  color: #000000;
  margin-left: -20px;
}
button:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.wordpic {
    display: flex;
    width: 80%;
    height: 200px;
    flex-direction: row;
    padding-top: 100px;
    margin-bottom: 100px;
}
.wordings {
    margin-left: 20px;
    margin-top: 20px;
}
h4 {
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
}
.p2 {
    font-size: 17px;
    line-height: 23px;
    color: #000000;
    text-align: justify;
}
.authorimage {
    border-radius: 100px;
    width: 150px;
    height: 150px;
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