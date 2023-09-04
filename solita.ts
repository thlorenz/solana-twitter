import path from 'path'
import { Solita } from '@metaplex-foundation/solita'

const PROGRAM_NAME = 'solana_twitter'
const PROGRAM_ID = 'BNDCEb5uXCuWDxJW9BGmbfvR1JBMAKckfhYrEKW2Bv1W'

const generatedIdlDir = path.join(__dirname, 'idl')
const generatedSDKDir = path.join(__dirname, 'src', 'generated')

import { writeFile } from 'fs/promises'

async function main() {
  await generateTypeScriptSDK()
}

async function generateTypeScriptSDK() {
  console.error('Generating TypeScript SDK to %s', generatedSDKDir)
  const generatedIdlPath = path.join(generatedIdlDir, `${PROGRAM_NAME}.json`)

  const idl = require(generatedIdlPath)
  if (idl.metadata?.address == null) {
    idl.metadata = { ...idl.metadata, address: PROGRAM_ID }
    await writeFile(generatedIdlPath, JSON.stringify(idl, null, 2))
  }
  const gen = new Solita(idl, { formatCode: true })
  await gen.renderAndWriteTo(generatedSDKDir)

  console.error('Success!')

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
