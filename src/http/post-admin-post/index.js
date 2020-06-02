// const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = async function post (req) {
  const post = await data.set({
    table: 'posts',
    key: 'This is a test! TESTING',
    description: 'This is a test description',
    body: '### This is Markdown'
  })

  return {
    statusCode: 200,
    body: JSON.stringify(post)
  }
}
