<template>
  <div class="hello" v-bind:style="{ 'background-color': computeColor.color}">
    <div class="content">
      <h1> Welcome {{ name }}</h1>
      <p v-if="age<=0">You are less than a year old and the appropriate color for you is {{computeColor.colorName}} set in background</p>
      <p v-else-if="age==1">You are {{age}} year old and the appropriate color for you is {{computeColor.colorName}} set in background</p>
      <p v-else>You are {{age}} years old and the appropriate color for you is {{computeColor.colorName}} set in background</p>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Informations',
  data: function () {
    return {
    }
  },
  computed: {
    // un accesseur (getter) calculé
    computeColor: function () {
      var colorObject = {}
      if (this.age >= 1 && this.age <= 20) {
        colorObject.color = '#03A9F4'
        colorObject.colorName = 'LightBlue'
      } else if (this.age <= 50 && this.age > 20) {
        colorObject.color = '#ef5350'
        colorObject.colorName = 'LightRed'
      } else {
        colorObject.color = '#9E9E9E'
        colorObject.colorName = 'Gray'
      }
      return colorObject
    }
  },
  props: {
    name: String,
    age: String,
    color: String,
    colorName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
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
