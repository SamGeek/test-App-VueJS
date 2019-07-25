<template>
  <div class="home" style="height: 100vh">
    <Informations msg="Welcome to our test App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Informations from '@/components/Informations.vue'

export default {
  name: 'home',
  components: {
    Informations
  }
}
</script>
