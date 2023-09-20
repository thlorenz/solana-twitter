export type SolanaTwitter = {
  version: '0.1.0'
  name: 'solana_twitter'
  instructions: [
    {
      name: 'sendTweet'
      accounts: [
        {
          name: 'tweet'
          isMut: true
          isSigner: true
        },
        {
          name: 'author'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'topic'
          type: 'string'
        },
        {
          name: 'content'
          type: 'string'
        },
      ]
    },
    {
      name: 'updateTweet'
      accounts: [
        {
          name: 'tweet'
          isMut: true
          isSigner: false
        },
        {
          name: 'author'
          isMut: false
          isSigner: true
        },
      ]
      args: [
        {
          name: 'topic'
          type: 'string'
        },
        {
          name: 'content'
          type: 'string'
        },
      ]
    },
    {
      name: 'deleteTweet'
      accounts: [
        {
          name: 'tweet'
          isMut: true
          isSigner: false
        },
        {
          name: 'author'
          isMut: false
          isSigner: true
        },
      ]
      args: []
    },
  ]
  accounts: [
    {
      name: 'tweet'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'author'
            type: 'publicKey'
          },
          {
            name: 'timestamp'
            type: 'i64'
          },
          {
            name: 'topic'
            type: 'string'
          },
          {
            name: 'content'
            type: 'string'
          },
        ]
      }
    },
  ]
  types: [
    {
      name: 'ErrorCode'
      type: {
        kind: 'enum'
        variants: [
          {
            name: 'TopicTooLong'
          },
          {
            name: 'ContentTooLong'
          },
        ]
      }
    },
  ]
}

export const IDL: SolanaTwitter = {
  version: '0.1.0',
  name: 'solana_twitter',
  instructions: [
    {
      name: 'sendTweet',
      accounts: [
        {
          name: 'tweet',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'author',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'topic',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
      ],
    },
    {
      name: 'updateTweet',
      accounts: [
        {
          name: 'tweet',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'author',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'topic',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
      ],
    },
    {
      name: 'deleteTweet',
      accounts: [
        {
          name: 'tweet',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'author',
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'tweet',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'author',
            type: 'publicKey',
          },
          {
            name: 'timestamp',
            type: 'i64',
          },
          {
            name: 'topic',
            type: 'string',
          },
          {
            name: 'content',
            type: 'string',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'ErrorCode',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'TopicTooLong',
          },
          {
            name: 'ContentTooLong',
          },
        ],
      },
    },
  ],
}
