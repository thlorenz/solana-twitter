import assert from 'assert/strict'
import { TweetApi } from './api'

async function main() {
  const tweet = process.argv[2]
  const topic = process.argv[3]
  const content = process.argv[4]

  assert(tweet != null, 'Tweet is required to be passes as first argument')
  assert(topic != null, 'Topic is required to be passes as first argument')
  assert(content != null, 'Content is required to be passes as second argument')

  const tweetApi = new TweetApi()
  const { sig } = await tweetApi.updateTweet(tweet, topic, content)
  console.error(`https://explorer.solana.com/tx/${sig}?cluster=devnet`)
}

main()
  .then(() => process.exit(0))
  .catch((err: any) => {
    console.error(err)
    process.exit(1)
  })
