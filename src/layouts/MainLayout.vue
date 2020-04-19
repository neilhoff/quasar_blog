<template>
  <q-layout
    @scroll="updateHeaderColor"
    view="lHh Lpr lFf"
  >
    <q-header :class="transparency">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link to="/">
            <img
              src="statics/logo.png"
              alt="Hoff Technologies"
              class="q-pa-md flex flex-center"
            >
          </router-link>
        </q-toolbar-title>
        <div class="gt-xs">
          <q-btn
            color="secondary"
            label="Blog"
            to="/posts"
            rounded
            class="q-mr-md"
          />
          <q-btn
            color="accent"
            label="Resources"
            to="/resources"
            rounded
            class="q-mr-md"
          />
          <q-btn
            color="accent"
            label="About"
            to="/about"
            rounded
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :content-class="leftDrawerContentClass"
    >
      <left-drawer-content></left-drawer-content>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftDrawerContent from 'components/LeftDrawerContent'
import { authorConfig } from 'src/config/authorConfig'

export default {
  name: 'MainLayout',
  components: {
    LeftDrawerContent
  },
  data () {
    return {
      leftDrawerOpen: false,
      author: authorConfig.author,
      headerTransparencyPage: false
    }
  },
  methods: {
    updateHeaderColor (details) {
      // Only run if the page has set the header transparency
      if (this.$store.state.layout.headerTransparency || this.headerTransparencyPage) {
        if (details.position <= 200 && !this.$store.state.layout.headerTransparency) {
          this.$store.commit('layout/updateHeaderTransparency', true)
        } else if (details.position > 200 && this.$store.state.layout.headerTransparency) {
          // Needed so that the root "if" statment will keep running
          this.headerTransparencyPage = true
          this.$store.commit('layout/updateHeaderTransparency', false)
        }
      }
    }
  },
  computed: {
    leftDrawerContentClass () {
      return this.$q.dark.mode ? '' : 'bg-grey-1'
    },
    transparency () {
      if (this.$store.state.layout.headerTransparency) {
        console.log('transparent header')
        return 'transparent header'
      }
      if (this.$store.state.layout.headerTransparency || this.headerTransparencyPage) {
        console.log('header')
        return 'header'
      } else {
        return ''
      }
      // return this.$store.state.layout.headerTransparency ? 'transparent' : ''
    }
  }
}
</script>
<style lang="scss">
.header {
  transition: background-color 1000ms linear;
}
</style>
