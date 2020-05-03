<template>
  <q-page class="row justify-center ">

    <div
      v-html="post.html"
      class="post-container q-px-md col-md-8 col-sm-10 col-xs-12 bg-white"
    ></div>

  </q-page>
</template>

<script>

export default {
  name: 'PostShow',
  data () {
    return {
      post: {}
    }
  },
  methods: {
  },
  created () {
    this.post = require(`src/statics/${this.$route.fullPath.substring(1)}.md`)
  }
}
</script>
<style lang="scss">
.body--dark {
  .post-container {
    background-color: $dark !important;
  }
}
.post-container {
  @media (max-width: $breakpoint-xs-max) {
    h1 {
      margin-bottom: 20px;
      margin-top: 15px;
    }
  }
}
</style>
