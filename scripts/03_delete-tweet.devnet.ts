import { sendTweetTx } from '../src/'
import { DEVNET, setupAuthor } from './amman'
import assert from 'assert/strict'

async function main() {
  const { amman, author, authorPair, authorTxHandler } =
    await setupAuthor(DEVNET)
  // TODO: we first need to save a keypair to reuse for our tweets
  const [tweet, tweetPair] = await amman.addr.genLabeledKeypair('first tweet')
  const tx = sendTweetTx(author, tweet, '#first', 'Content of first tweet')
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
