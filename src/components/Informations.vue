<template>
  <div class="hello">
    <div id="leftPane" class="leftPane">

    </div>
    <div id="rightPane" class="rightPane" >
      <h1>{{ msg }}</h1>
      <p>
        Please enter your informations (Name, Age)<br>
      </p>
      <h3>Informations</h3>

      <form id="form" @submit.prevent="checkForm" >
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Name</label><br>
          <input  id="name" v-model="name" type="text" name="name">
        </p>

        <p>
          <label for="age">Age</label><br>
          <!-- <input id="age" v-model="age" type="number" name="age" min="0" > -->
          <v-date-picker v-model="birthDate" :max-date="maxDate"/>
        </p>

        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
    </div>
</div>
</template>

<script>
import router from '../router'
const axios = require('axios')
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://207.180.224.107:1337'
})

export default {
  data: function () {
    return {
      errors: [],
      name: null,
      birthDate: new Date(),
      maxDate: new Date(),
      today: new Date()
    }
  },
  // name: 'Informations',
  props: {
    msg: String
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.birthDate) {
        instance.post('/process/age', {
          name: this.name,
          birthDate: this.birthDate
        })
          .then(function (response) {
            router.push({ name: 'welcome', params: { name: response.data.name, age: response.data.age } })
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        return true
      }
      this.errors = []

      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.birthDate) {
        this.errors.push('Birth Date required.')
      }
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  border: 2px solid gray;
  border-radius: 4px;
}
.hello{
  background-color: #FAFAFA;
  display: flex;
  height: 100%;
}
#leftPane{
  background: url('../assets/background_lite.jpg');
  width: 40%;
  background-size: cover;
  background-repeat: repeat;
  background-position: top;
}
#rightPane{
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
