/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category DeleteTweet
 * @category generated
 */
export const deleteTweetStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'DeleteTweetInstructionArgs'
)
/**
 * Accounts required by the _deleteTweet_ instruction
 *
 * @property [_writable_] tweet
 * @property [**signer**] author
 * @category Instructions
 * @category DeleteTweet
 * @category generated
 */
export type DeleteTweetInstructionAccounts = {
  tweet: web3.PublicKey
  author: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const deleteTweetInstructionDiscriminator = [
  58, 240, 206, 92, 160, 186, 211, 87,
]

/**
 * Creates a _DeleteTweet_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category DeleteTweet
 * @category generated
 */
export function createDeleteTweetInstruction(
  accounts: DeleteTweetInstructionAccounts,
  programId = new web3.PublicKey('BNDCEb5uXCuWDxJW9BGmbfvR1JBMAKckfhYrEKW2Bv1W')
) {
  const [data] = deleteTweetStruct.serialize({
    instructionDiscriminator: deleteTweetInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.tweet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.author,
      isWritable: false,
      isSigner: true,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
