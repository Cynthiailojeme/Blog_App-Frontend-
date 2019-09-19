<template>
  <div class="home">
    <sliderpart/>
    <posts/>
    <bottom />
  </div>
</template>

<script>
// @ is an alias to /src
import sliderpart from '@/components/sliderpart.vue'
import posts from '@/components/posts.vue'
import bottom from '@/components/bottom.vue'

export default {
  name: 'home',
  components: {
    sliderpart,
    posts,
    bottom
  }
}
</script>
