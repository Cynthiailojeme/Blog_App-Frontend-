<template>
    <div class="background">
        <div class="photo">
            <div class="board">
                <form @submit.prevent="login">
                    <h1>ADMIN</h1>
                    <input v-model="admin.username" type="text" placeholder="username"><br>
                    <input v-model="admin.password" type="password" placeholder="password"><br>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

        <bottom/>
    </div>
</template>

<script>
import bottom from '@/components/bottom.vue'

export default{
    name:'home',
    data() {
      return{
        apiResponse:{},
        admin:{
        	username: "",
        	password: ""
        },
        error:{}
      }
    },
    components:{bottom},
    mounted() {},
    methods:{
  	login:function() {
  		this.$http.post('http://localhost:5000/api/user/login', {
              username: this.admin.username,
              password: this.admin.password
          })
      .then(response =>{
        console.log(response)
        console.log(this.admin)
        this.$router.push("/dashboard")
      })
    }
  	}
  }

  
</script>

<style scoped>
.background {
    height: 708px;
    width: 100%;
    left: 0px;
    margin-top: 90px;
}
.photo {
    background-image: url("../assets/camshoot.png");
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.board {
    position: relative;
    width: 464px;
    height: 428px;
    margin: auto;
    top: 150px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 30px;
    display: flex;
    justify-content: center;
}
h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    margin-left: 120px;
    margin-top: 40px;
    margin-bottom: 20px; 
    color: #8F5640;   
}
input {
    width: 316px;
    height: 70px;
    padding: 30px;
    background: #FFFFFF;
    border-radius: 10px;
    border: none;
    margin-bottom: 40px;
    align-items: center;
}
::placeholder {
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #000000;
}
button {
    width: 150px;
    height: 40px;
    background: #8F5640;
    border: none;
    border-radius: 10px;
    color:#000000;
    margin-left: 80px;
}
</style>