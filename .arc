@app
design-c44

@static

@http
get /posts
get /posts/:postId
get /admin
get /admin/posts
post /admin/post

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

posts
  postId *String
