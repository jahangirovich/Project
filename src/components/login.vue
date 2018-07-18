<template>
    <div id="login">
      <div class="left">
        <h3>Welcome to first app for today.</h3>
      </div>
      <div class="right">
        <div class="cover">
          <div class="mine">
            <router-link to="/register">
                <p class="regist">Registration
                <span class="comeup"></span>
               </p>
            </router-link>
            <router-link to="/login">
              <p class="regist2">Login
                <span class="comeup2"></span>
              </p>
            </router-link>
          </div>
          <form action="">
            <p>
              <input type="text" v-model="email" id="email" required>
              <span class="redirect"></span>
              <label for="email">Email</label>
            </p>
            <p>
              <input type="password" v-model="password" id="password" required>
              <span class="redirect"></span>
              <label for="password">Password</label>
            </p>
            <p>
              <button @click="register">Sign In</button>
              <span class="redirect2"></span>
            </p>
          </form>
          <p class="error" id="error">{{ error }}</p>
        </div>
      </div>
    </div>
</template>
<script>
    import firebase from 'firebase'
    export default {
        name: "register",
        data:function(){
            return{
              email:'',
              password:'',
              error:'',
            };
        },
        methods:{
            register:function(e) {
            firebase.auth().signInWithEmailAndPassword(this.email,this.password,)
              .then(
                user => {
                  this.$router.push('/')
                },
                err => {
                  this.error = err.message
                  document.getElementById('error').style.display = "block"
                },
              )
            e.preventDefault()
          }
        }
    }
</script>

<style scoped>
  body{
    margin:0 auto;
  }
  #login{
    position: relative;
    display: flex;
  }
  .left{
    width: 50%;
    text-align: center;
    background-color: #8c2443;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right{
    width: 50%;
    text-align: center;
    height: 100%;
    position: fixed;
    right: 0;
    top:0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a{
    text-decoration: none;
  }
  .mine{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  h3{
    font-family: 'Raleway', sans-serif;
    color:white;
    font-size: 30px;
    font-weight: normal;
    background-color: rgba(0,0,0,0.3);
    padding: 10px;
    box-sizing: border-box;
  }
  .cover{
    width: 100%;
    display: block;
    padding: 10px;
    box-sizing: border-box;
  }
  form{
    text-align: center;
    margin: 0 auto;
  }
  form p{
    width: 50%;
    margin: 0 auto;
    position: relative;
    padding: 10px;
  }
  form input{
    width: 100%;
    padding: 10px;
    border:none;
    border-bottom: 1px solid lightgrey;
    outline: none;
    transition: 0.3s all;
        font-family: 'Raleway', sans-serif;
  }
  form label{
    position: absolute;
    left:20px;
    top:20px;
    font-family: 'Raleway', sans-serif;
    transition: 0.3s all;
  }
  form input:focus{
    border-bottom:1px solid white;
  }
  form input:valid{
    border-bottom:1px solid white;
  }
  form input:focus ~ label {
    left: 10px;
    top: 0px;
    font-size: 12px;
    color: #8c2443;
  }
  form input:valid ~ label {
    left: 10px;
    top: 0px;
    font-size: 12px;
    color: #8c2443;
  }
  .redirect{
    width: 100%;
    display: block;
  }
  .redirect:after{
    display: block;
    content:'';
    border-bottom: 1px solid black;
    position:absolute;
    left:10px;
    width: 0;
    transition: 0.3s;
  }
  form input:focus ~ .redirect:after{
    width: 100%;
  }
  form input:valid ~ .redirect:after{
    width: 100%;
  }
  .regist{
    color:#8c2443;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    display: block;
    padding: 10px;
    cursor: pointer;
    position: relative;
  }
  .regist2{
    color:#8c2443;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    display: block;
    padding: 10px;
    background-color: white;
    position: relative;
    cursor: pointer;
  }
  .comeup2:after{
    position: absolute;
    left:0;
    bottom: 0;
    display: block;
    width: 100%;
    border-bottom: 2px solid #8c2443;
    animation: animate 0.5s ease-in-out;
    content: '';
  }
  @keyframes animate {
    from{
      width: 0;
    }
    to{
      width: 100%;
    }
  }
  button{
    width: 30%;
    margin: 0 auto;
    border:1px solid #8c2443;
    color:#8c2443;
    background: none;
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    transition: 0.3s all;
    outline: none;
  }
  button:hover{
    background-color: #8c2443;
    color:white;
  }
  .error{
        font-family: 'Raleway', sans-serif;
    font-size: 15px;
    position: absolute;
    text-align: center;
    background-color: rgba(150, 39, 70, 0.7);
    display: block;
    width: 100%;
    margin: 0 auto;
    bottom:0px;
    color:white;
    padding: 20px;
    box-sizing: border-box;
    left:0px;
    animation: hi 1s ;
    display: none;
  }
  @keyframes hi {
    from{
      bottom: -100px;
    }
    to{
      bottom: 0px;
    }
  }
</style>
