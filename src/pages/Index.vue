<template>
  <q-page>

    <div class="absolute-center">
      <profile-card
        :author="author"
        :social="social"
        :size="4"
        :backgroundColor="'white'"
        :font-color="'black'"
      />

    </div>

  </q-page>
</template>

<script>
import { postList } from 'src/posts/postList'
import ProfileCard from 'components/ProfileCard'
import { authorConfig } from 'src/config/authorConfig'

export default {
  name: 'PageIndex',
  components: {
    ProfileCard
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
