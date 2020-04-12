<template>
  <q-page padding>
    <div>
      <div v-html="post.html"></div>
    </div>
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
    getPost (slug) {
      this.postVisable = true
      this.postListVisable = false
      this.post = require(`src/posts/${this.slugToFileName(slug)}`)
    },
    slugToFileName (slug) {
      return `${slug.replace(/-/g, '/')}.md`
    }
  },
  mounted () {
    console.log(this.$route.params)
    this.getPost(this.$route.params.slug)
  }
}
</script>
