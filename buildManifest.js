const fs = require('fs').promises
const path = require('path')
const yamlFront = require('yaml-front-matter')

// Params
const blogDir = 'src/posts'
const manifest = 'src/posts/posts.json'

const getMarkdownFiles = async (dir, fileList = []) => {
  const files = await fs.readdir(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      fileList = await getMarkdownFiles(filePath, fileList)
    } else {
      // If the file is a markdown file then add it to the array of files
      if (path.extname(file).toLowerCase() === '.md') {
        fileList.push(path.join(filePath))
      }
    }
  }

  return fileList
}

(async () => {
  console.log('==== Building blog manifest =====')
  const files = await getMarkdownFiles(blogDir)
  const manifestList = { posts: [] }
  console.log(`There are ${files.length} blog posts`)
  for (const file of files) {
    process.stdout.write('.')
    const data = await fs.readFile(file, 'utf8')
    // Pull out all the front matter
    const fm = await yamlFront.loadFront(data)
    // Turn the file path into an array
    const fileArray = file.split('\\')
    // Remove the last item in the array
    fm.filename = fileArray.pop()
    // require doesn't work when you have 'src/' (the alias) in the variable
    // you need to require the image like this: require(`src/${headerImagePath}`)
    fileArray.splice(0, 1)
    fm.folder = fileArray.join('/')
    fm.headerImagePath = fm.folder + '/' + fm.headerImage
    fm.filePath = fm.folder + '/' + fm.filename
    // remove the content because this will be loaded in the front-end
    delete fm.__content
    manifestList.posts.push(fm)
  }
  // Write the manifest to the file system
  fs.writeFile(manifest, JSON.stringify(manifestList, null, 2))
  console.log('')
  console.log('==== Complete =====')
})()
