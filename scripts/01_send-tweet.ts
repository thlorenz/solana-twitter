import assert from 'assert/strict'
import { TweetApi } from './api'

async function main() {
  console.log(process.argv)
  const topic = process.argv[2]
  const content = process.argv[3]

  assert(topic != null, 'Topic is required to be passes as first argument')
  assert(content != null, 'Content is required to be passes as second argument')

  const tweetApi = new TweetApi()
  const res = await tweetApi.sendTweet(topic, content)
  console.error(res)
}

main()
  .then(() => process.exit(0))
  .catch((err: any) => {
    console.error(err)
    process.exit(1)
  })
