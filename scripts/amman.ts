import { Amman, LOCALHOST } from '@metaplex-foundation/amman-client'
import { Connection, Keypair, PublicKey } from '@solana/web3.js'

import { PROGRAM_ADDRESS } from '../src/generated'

export const amman = Amman.instance({
  knownLabels: { [PROGRAM_ADDRESS]: 'Tweet Program' },
})

export async function setupAuthor() {
  const connection = new Connection(LOCALHOST, 'confirmed')

  const [author, authorPair]: [PublicKey, Keypair, string] =
    await amman.addr.genLabeledKeypair('author')
  await amman.airdrop(connection, author, 5)

  const authorTxHandler = amman.payerTransactionHandler(connection, authorPair)

  return { connection, author, authorPair, authorTxHandler }
}
