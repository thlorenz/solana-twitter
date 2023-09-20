## Steps to procuce IDL and Types

```diff
@@ -55,6 +59,7 @@ pub struct SendTweet<'info> {
     pub tweet: Account<'info, Tweet>,
     #[account(mut)]
     pub author: Signer<'info>,
+    /// CHECK: not necessary since it is the system program I guess
     #[account(address = system_program::ID)]
     pub system_program: AccountInfo<'info>,
```

```sh
anchor build
```

```sh
mkdir -p types && cp target/types/solana_twitter.ts types
mkdir -p idl && cp target/idl/solana_twitter.json idl
```

## Generate Keypair

```sh
mkdir -p scripts
solana-keygen new -o scripts/tweeter.json
```

_just press enter when asked for BIP39 Passphrase_

In our case the public key is: `BFxQzF3jTEYtB9SN8gdyyiAiP7x8vLVTfovZQoVM6mKa`

Airdrop us some SOL:

```
solana airdrop 5 BFxQzF3jTEYtB9SN8gdyyiAiP7x8vLVTfovZQoVM6mKa --url devnet
```
