<template>
  <q-page class="flex flex-center">
    <q-list bordered>
      <q-item
        v-for="post in posts"
        :key="post.fileName"
        @click="getPost(post.fileName)"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-icon
            color="primary"
            name="bluetooth"
          />
        </q-item-section>
        <q-item-section>{{post.fileName}}</q-item-section>
      </q-item>
    </q-list>

    <div v-if="postVisable">
      <show-post
        :postBody="post.body"
        :post-attributes="post.attributes"
      />
    </div>

  </q-page>
</template>

<script>
import { postList } from 'src/posts/postList'
import ShowPost from 'components/Posts/ShowPost'

export default {
  name: 'PageIndex',
  components: {
    ShowPost
  },
  data () {
    return {
      title: null,
      markdown: null,
      posts: postList.posts,
      postVisable: false,
      post: {}
    }
  },
  methods: {
    getPost (fileName) {
      // this.$set(this.fileName,)
      this.postVisable = true
      this.post = require(`src/posts/${fileName}`)
      console.log(fileName)
      console.log(this.post)
    }
  },
  computed: {
    // attributes () {
    //   return this.fm.attributes
    // },
    // body () {
    //   return this.fm.body
    // }
  },
  async created () {
    // There is an error when loading the module if you don't copy it into a constant. Not sure why....
    // const p = postList
    // p.posts.forEach(post => {
    //   console.log(post.fileName)
    //   this.posts.push(require(`src/posts/${post.fileName}`))
    // })
  }
}
</script>
