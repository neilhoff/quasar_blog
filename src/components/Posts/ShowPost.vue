<template>

  <div>
    <h3>{{postAttributes.title}}</h3>
    {{postBody}}
  </div>
</template>

<script>

export default {
  name: 'ShowPost',
  props: {
    postAttributes: {
      type: Object,
      default: null
    },
    postBody: {
      type: String,
      default: null
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
