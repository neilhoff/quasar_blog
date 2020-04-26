const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises
const yamlFront = require('yaml-front-matter')

// Params
const blogDir = 'src/posts'
const manifest = 'src/posts/posts.json'

// Returns all files that have a .md extension
const getAllMarkdownFiles = async (dirPath, arrayOfFiles) => {
  // Get all files in the current directory
  const files = await fsPromises.readdir(dirPath)
  return new Promise((resolve, reject) => {
    arrayOfFiles = arrayOfFiles || []
    files.forEach(function (file) {
      // If the file is a directory then run the function again on this directory
      if (fs.statSync(dirPath + '/' + file).isDirectory()) {
        resolve(getAllMarkdownFiles(dirPath + '/' + file, arrayOfFiles))
      } else {
        // If the file is a markdown file then add it to the array of files
        if (path.extname(file).toLowerCase() === '.md') {
          arrayOfFiles.push(path.join(dirPath, '/', file))
        }
      }
    })
    resolve(arrayOfFiles)
  })
}

(async () => {
  const files = await getAllMarkdownFiles(blogDir)
  const manifestList = { posts: [] }
  for (const file of files) {
    const data = await fsPromises.readFile(file, 'utf8')
    // Pull out all the front matter
    const fm = await yamlFront.loadFront(data)
    // Turn the file path into an array
    const fileArray = file.split('\\')
    // Remove the last item in the array
    fm.filename = fileArray.pop()
    // require doesn't work when you have 'src' the alias in the variable
    // you need to require the image like this: require(`src/${headerImagePath}`)
    fileArray.splice(0, 1)
    fm.folder = fileArray.join('/')
    fm.headerImagePath = fm.folder + '/' + fm.headerImage
    fm.filePath = fm.folder + '/' + fm.filename
    console.log(fm.filePath)
    console.log(fm.folder)
    // fm.file
    // remove the content because this will be loaded in the front-end
    delete fm.__content
    manifestList.posts.push(fm)
  }
  // Write the manifest to the file system
  fs.writeFileSync(manifest, JSON.stringify(manifestList, null, 2))
})()
