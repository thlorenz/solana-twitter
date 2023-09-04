import { createSendTweetInstruction } from './generated'
import * as web3 from '@solana/web3.js'

export function sendTweetTx(
  author: web3.Keypair,
  tweet: web3.Keypair,
  topic: string,
  content: string
) {
  const accounts = {
    author: author.publicKey,
    tweet: tweet.publicKey,
  }
  const ix = createSendTweetInstruction(accounts, { topic, content })
  return new web3.Transaction().add(ix)
}
