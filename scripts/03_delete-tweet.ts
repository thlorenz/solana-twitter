import assert from 'assert/strict'
import { TweetApi } from './api'

async function main() {
  const tweet = process.argv[2]

  assert(tweet != null, 'Tweet is required to be passes as first argument')

  const tweetApi = new TweetApi()
  const { sig } = await tweetApi.deleteTweet(tweet)
  console.error(`https://explorer.solana.com/tx/${sig}?cluster=devnet`)
}

main()
  .then(() => process.exit(0))
  .catch((err: any) => {
    console.error(err)
    process.exit(1)
  })
