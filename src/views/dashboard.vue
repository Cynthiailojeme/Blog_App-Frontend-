<template>
    <v-content>
        <div class="dash">
            <br>
            <br>

            <v-container fluid>
                <v-layout wrap>
                    <v-flex class="tophead" xl10 md8 offset-md2>
                        <v-list-item>
                            <p class="black--text">ADMIN DASHBOARD</p>
                            <v-spacer></v-spacer>
                            <p class="black--text" @click="newPostDialog = !newPostDialog">NEW POST</p>
                        </v-list-item>
                    </v-flex>

                    <!-- Add New Post Dailog -->

                    <v-dialog v-model="newPostDialog" persistent max-width="800">
                <v-card>
                    <v-card-title class="black white--text">
                        NEW POST
                    </v-card-title>

                    <v-card-text>
                        <v-container fluid grid-list-xl>
                            <v-layout wrap>
                                <v-flex xs12 md6>
                                    <v-text-field label="Title" v-model="newPost.title"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field label="Author" v-model="newPost.author"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field label="Image Url" v-model="newPost.image"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field label="Introduction" v-model="newPost.intro"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea label="Content" v-model="newPost.content"></v-textarea>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions class="black">
                        <v-btn class="black--text" @click="newPostDialog = !newPostDialog">CLOSE</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn @click="addPost" class="black--text">ADD</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
             <!-- Add New Post Dailog Ends -->

             <!-- Each Post Content -->
                    <v-flex xl10 md8 offset-md2>
                        <v-list three-line class="transparent">
                            <v-list-item
                            v-for="post in posts.slice((page - 1) * displayAmount, displayAmount * page)" :key="post._id" 
                            class="black mb-2">
                                <p class="title">{{ post.title }}</p>
                                <v-spacer></v-spacer>
                                <v-btn class="black--text" @click="updatePostDialog(post)">EDIT</v-btn>
                                <v-btn class="error--text" @click.prevent="del(post)">DELETE</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-flex>
             <!-- Each Post Content Ends -->

             <!-- Pagination -->
                    <v-flex xl10 md8 offset-md2>
                        <br>
                        <br>
                        <v-pagination v-model="page" :length="Math.ceil(posts.length / displayAmount)"></v-pagination>
                    </v-flex>
             <!-- Pagination Ends -->
                </v-layout>

             <!-- Update Post Dialog -->
                <v-dialog v-model="updateDialog" persistent max-width="800">
                <v-card>
                    <v-card-title class="black white--text">
                        UPDATE POST
                    </v-card-title>

                    <v-card-text>
                        <v-container fluid grid-list-xl>
                            <v-layout wrap>
                                <v-flex xs12 md6>
                                    <v-text-field label="Title" v-if="currentPost" v-model="currentPost.title"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field label="Author" v-if="currentPost" v-model="currentPost.author"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field label="Image Url" v-if="currentPost" v-model="currentPost.image"></v-text-field>
                                </v-flex>
                                <v-flex xs12> 
                                    <v-text-field label="Introduction" v-if="currentPost" v-model="currentPost.intro"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea label="Content" v-if="currentPost" v-model="currentPost.content"></v-textarea>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions class="black">
                        <v-btn class="black--text" @click="updateDialog = !updateDialog">CLOSE</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="black--text" @click="editPost">SAVE</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
             <!-- Update Post Dailog Ends-->

            </v-container>

            </div>

        <bottom/>
    </v-content>
</template>

<script>
import bottom from '@/components/bottom.vue'

export default {
    name: 'dashboard',
    data() {
      return {
        newPostDialog: false,
        updateDialog: false,
        currentPost: {},
        drawer: false,
         posts: [],
         post: {},
         apiResponse:{},
         newPost: { 
        	title:"",
        	author:"",
        	image:"",
        	intro:"",
        	content:""
        },
        error:{},
         page: 1,
         displayAmount: 10
       }
     },
components: {
        bottom
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
        return 1;
      }
      return 0;
    })
  })
},
methods: {
    addPost () {
        console.log(this.newPost)
       	 this.$http.post('http://localhost:5000/api/post/add',this.newPost)
      	.then(response =>{
	      console.log(response)
          this.newPost= response.data
          this.posts.push(response.data);
            this.posts.sort(function (a, b) {
                if (a.created_at < b.created_at) {
                return 1;
                }
                if (a.created_at > b.created_at) {
                return -1;
                }
                return 0;
            });
            this.newPostDialog = false;
            this.newPost = {};
        });
    },
    updatePostDialog (post) {
        this.currentPost = post;
        this.updateDialog = true;
    },
    editPost() {
        console.log(this.currentPost)
        let id = this.currentPost._id
        this.$http.put('http://localhost:5000/api/post/update/'+ id,this.currentPost)
        .then(response =>{
            console.log(response)
            this.currentPost = response.data
            this.posts.push(response.data);
        }),
        this.updateDialog = false;
        },
del: function(post) {
            if (confirm("Are you sure that you want to delete this post?")) {
                this.$http.delete('http://localhost:5000/api/post/'+ post._id)
                .then(response=>{
                 console.log(response)
                     alert("Post sucessfully deleted")
            });
         }
    }
},
}
</script>

<style scoped>
.dash {
    margin-top: 90px;
}
.tophead {
    font-family: Spectral;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
}
.title {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 0px;
}
button {
    width: 100px;
    height: 25px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-left: 10px;
}
</style>