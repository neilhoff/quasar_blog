# Quasar Blog (quasar_blog)

A simple blog system using the Quasar Framework

## Initial Setup

- Clone this repository
```
git clone ....
```
- Install dependencies
```bash
npm install
```

## Create a new post

- Create a new markdown file `name.md` in the posts folder 
  - You can setup the file structure however you want
  - Example: `posts/2020/03/new-post.md`
- Add the file location, title and publish date to `posts/postList.js`
- Start development mode (hot-code reloading, error reporting, etc.) to view live changes
```bash
quasar dev
```
- Build the app for produciton when finished
```bash
quasar build
```
- Commit the code to github (or copy the public folder to your web server )

## Create a page with a transparent header

- Setup the QPage component with a class of `page-with-transparent-header`
    - `<q-page class="page-with-transparent-header">`
- Add a mounted that sets the headerTransparency state to true and beforeRouteLeave that sets it to false

```  
  mounted () {
    this.$store.commit('layout/updateHeaderTransparency', true)
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('layout/updateHeaderTransparency', false)
    next()
  }

```