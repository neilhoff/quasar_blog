<template>
  <q-page padding>
    <div v-if="postListVisable">
      <h1 class="post-list-title">Blog Posts</h1>
      <div class="flex flex-center">
        <div class="post-list-items q-mx-sm">
          <q-card
            class="q-ma-md"
            v-for="post in posts"
            :key="post.fileName"
          >
            <q-card-section horizontal>

              <q-img
                :src="require(`src/posts/${post.image}`)"
                :alt="post.imageAlt"
              />

              <q-card-actions
                vertical
                class="justify-around q-px-md"
              >
                <q-btn
                  flat
                  round
                  color="red"
                  icon="favorite"
                />
                <q-btn
                  flat
                  round
                  color="accent"
                  icon="bookmark"
                />
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="share"
                />
              </q-card-actions>
            </q-card-section>

            <q-card-section>
              <router-link :to="`/posts/${slug(post.fileName)}`">
                <div class="text-h6">{{post.title}}</div>
              </router-link>
              <div class="text-subtitle">Published: {{post.publishDate}}</div>
            </q-card-section>
            <q-card-section>
              {{post.description}}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { postList } from 'src/posts/postList'

export default {
  name: 'PostIndex',
  data () {
    return {
      posts: postList.posts,
      postListVisable: true,
      post: {}
    }
  },
  methods: {
    getPost (fileName) {
      this.postVisable = true
      this.postListVisable = false
      this.post = require(`src/posts/${fileName}`)
    },
    slug (fileName) {
      console.log('blah')
      console.log(fileName.slice(0, -3).replace(/\//g, '-'))
      return fileName.slice(0, -3).replace(/\//g, '-')
    }
  },
  computed: {

  },
  mounted () {

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
