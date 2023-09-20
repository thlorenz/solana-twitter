import anchor, { Program } from '@project-serum/anchor'
import { SolanaTwitter } from '../types/solana_twitter'
import path from 'path'

// `anchor run <script>` would set these from the Anchor.toml,
// but we want to avoid having to install the anchor CLI
process.env.ANCHOR_PROVIDER_URL = 'https://api.devnet.solana.com'
process.env.ANCHOR_WALLET = path.resolve('./scripts/tweeter.json')

export class TweetApi {
  readonly program: Program<SolanaTwitter>

  get wallet() {
    return this.program.provider.wallet
  }
  get author() {
    return this.wallet.publicKey.toBase58()
  }

  constructor() {
    anchor.setProvider(anchor.Provider.env())
    this.program = anchor.workspace.SolanaTwitter as Program<SolanaTwitter>
  }

  async sendTweet(topic: string, content: string) {
    const tweet = anchor.web3.Keypair.generate()
    const sig = await this.program.rpc.sendTweet(topic, content, {
      accounts: {
        tweet: tweet.publicKey,
        author: this.author,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [tweet],
    })
    return { sig, tweet: tweet.publicKey.toBase58() }
  }

  async updateTweet(tweet: string, topic: string, content: string) {
    const tweetPubkey = new anchor.web3.PublicKey(tweet)
    const sig = await this.program.rpc.updateTweet(topic, content, {
      accounts: {
        tweet: tweetPubkey,
        author: this.author,
      },
    })
    return { sig }
  }

  async deleteTweet(tweet: string) {
    const tweetPubkey = new anchor.web3.PublicKey(tweet)
    const sig = await this.program.rpc.deleteTweet({
      accounts: {
        tweet: tweetPubkey,
        author: this.author,
      },
    })
    return { sig }
  }
}
