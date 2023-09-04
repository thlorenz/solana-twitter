import { sendTweetTx } from '../src/send-tweet'
import { amman, setupAuthor } from './amman'
import assert from 'assert/strict'

async function main() {
  const { authorPair, authorTxHandler } = await setupAuthor()
  const [_tweet, tweetPair] = await amman.addr.genLabeledKeypair('first tweet')
  const tx = sendTweetTx(
    authorPair,
    tweetPair,
    '#first',
    'Content of first tweet'
  )
  await authorTxHandler
    .sendAndConfirmTransaction(tx, [authorPair, tweetPair], 'tx: send tweet')
    .assertSuccess(assert)
}

main()
  .then(() => process.exit(0))
  .catch((err: any) => {
    console.error(err)
    process.exit(1)
  })
