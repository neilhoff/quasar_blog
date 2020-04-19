<template>
  <q-page class="page-with-transparent-header">
    <q-parallax src="statics/tree-bg.jpg">

    </q-parallax>

  </q-page>
</template>

<script>
import { postList } from 'src/posts/postList'
// import ProfileCard from 'components/ProfileCard'
import { authorConfig } from 'src/config/authorConfig'

export default {
  name: 'PageIndex',
  components: {
    // ProfileCard
  },
  data () {
    return {
      title: null,
      markdown: null,
      posts: postList.posts,
      postVisable: false,
      postListVisable: true,
      post: {},
      author: authorConfig.author,
      social: authorConfig.socialProfiles
    }
  },
  methods: {
    getPost (fileName) {
      this.postVisable = true
      this.postListVisable = false
      this.post = require(`src/posts/${fileName}`)
    },
    backToPosts () {
      this.postVisable = false
      this.postListVisable = true
    }
  },
  computed: {
    postImage (image) {
      console.log(image)
      return require(`src/posts/${image}`)
    }
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
