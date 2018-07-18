<template>
  <div class="hello">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" required v-model="name">
      <button @click="add">Add</button>
      <ul>
        <li v-for="name in names" v-bind:key="name['.key']">
          <p v-if="!name.edit">{{ name.name }} <span @click="removeIt(name['.key'])">delete</span>
            <span @click="update(name['.key'])">update</span>
          </p>
          <p v-if="name.edit">
            <input type="text" v-model="name.name">
            <button @click="cancelIt(name['.key'])">cancel</button>
            <button @click="saveIt(name)">save</button>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { namesRef } from "./myfirebase";
  import firebase from 'firebase'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'joha',
      email:'',
      password:'',
      mistake:''
    }
  },
  firebase:{
    names:namesRef
  },
  methods:{
    add(){
      namesRef.push({ edit:false,name:this.name });
    },
    removeIt(key){
      namesRef.child(key).remove()
    },
    update(key){
      namesRef.child(key).update({ edit:true });
    },
    cancelIt(key){
      namesRef.child(key).update({ edit:false });
    },
    saveIt(person){
      const key = person['.key'];
      namesRef.child(key).set({ name:person.name,edit:false })
    },
    user(e){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
        .then(
          user =>{
            alert("user created")
          },
          err => {
            this.mistake = err.message
          }
        );
    }
  }
}
</script>
<style scoped>

</style>
