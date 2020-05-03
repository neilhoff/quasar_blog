<template>
  <q-page class="page-with-transparent-header">
    <q-parallax src="statics/tree-bg.jpg">
      <div class="header-image-content">
        <h1 class="text-white text-bold q-pa-md">Welcome to Hoff Design</h1>
      </div>

    </q-parallax>

  </q-page>
</template>

<script>
import { authorConfig } from 'src/config/authorConfig'

export default {
  name: 'PageIndex',
  components: {
    // ProfileCard
  },
  data () {
    return {
      author: authorConfig.author,
      social: authorConfig.socialProfiles
    }
  },
  methods: {

  },
  computed: {

  },
  mounted () {
    this.$store.commit('layout/updateHeaderTransparency', true)
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('layout/updateHeaderTransparency', false)
    next()
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }
}
</script>
<style lang="scss">
.post-list-items,
.show-post {
  flex-grow: 1;
}
.post-list-title {
  text-align: center;
}
.post-list-items {
  max-width: 600px;
}
.show-post {
  max-width: 1200px;
  h1 {
    margin-top: 0;
  }
}
</style>
