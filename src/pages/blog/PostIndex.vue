<template>
  <q-page padding>
    <div class="column items-center">
      <!-- <h1 class="post-list-title">Blog</h1> -->
      <img
        src="statics/blog.png"
        alt="Blog"
      >
      <div>
        <div class="post-list-items q-mx-sm">
          <q-card
            class="q-ma-md"
            v-for="post in posts"
            :key="post.filePath"
          >
            <q-card-section horizontal>
              <q-img
                :src="require(`src/` + post.headerImagePath)"
                :alt="post.headerImageAlt"
              />
            </q-card-section>

            <q-card-section>
              <router-link :to="post.filePath.slice(0,-3)">
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
import postList from 'src/posts/posts.json'

export default {
  name: 'PostIndex',
  data () {
    return {
      posts: postList.posts
    }
  },
  methods: {
  },
  computed: {
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
