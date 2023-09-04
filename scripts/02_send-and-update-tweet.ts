import { sendTweetTx, updateTweetTx } from '../src/'
import { amman, setupAuthor } from './amman'
import assert from 'assert/strict'

async function main() {
  const { author, authorPair, authorTxHandler } = await setupAuthor()
  const [tweet, tweetPair] = await amman.addr.genLabeledKeypair('first tweet')
  {
    const tx = sendTweetTx(author, tweet, '#first', 'Content of first tweet')
    await authorTxHandler
      .sendAndConfirmTransaction(tx, [authorPair, tweetPair], 'tx: send tweet')
      .assertSuccess(assert)
  }
  {
    const tx = updateTweetTx(
      author,
      tweet,
      '#first',
      'Updated content of first tweet, just cause we wanted to fix something that was wrong'
    )
    await authorTxHandler
      .sendAndConfirmTransaction(tx, [authorPair], 'tx: send tweet')
      .assertSuccess(assert)
  }
}

main()
  .then(() => process.exit(0))
  .catch((err: any) => {
    console.error(err)
    process.exit(1)
  })
