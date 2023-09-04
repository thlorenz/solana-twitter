import {
  createSendTweetInstruction,
  createUpdateTweetInstruction,
} from './generated'
import * as web3 from '@solana/web3.js'

export function sendTweetTx(
  author: web3.PublicKey,
  tweet: web3.PublicKey,
  topic: string,
  content: string
) {
  const accounts = {
    author,
    tweet,
  }
  const ix = createSendTweetInstruction(accounts, { topic, content })
  return new web3.Transaction().add(ix)
}

export function updateTweetTx(
  author: web3.PublicKey,
  tweet: web3.PublicKey,

  topic: string,
  content: string
) {
  const accounts = {
    author,
    tweet,
  }
  const ix = createUpdateTweetInstruction(accounts, { topic, content })
  return new web3.Transaction().add(ix)
}
