<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
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
          {{author.name}}'s Blog
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
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
      author: authorConfig.author
    }
  },
  computed: {
    leftDrawerContentClass () {
      return this.$q.dark.mode ? '' : 'bg-grey-1'
    }
  }
}
</script>
