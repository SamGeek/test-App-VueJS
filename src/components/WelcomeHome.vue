<template>
  <div class="hello" v-bind:style="{ 'background-color': color}">
    <div class="content">
      <h1> Welcome {{ name }}</h1>
      <p>You are {{age}} years old and the appropriate color for you is {{colorName}} set in background</p><br/>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Informations',
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
