## 0. Create Account

- explained elsewhere, not part of this tutorial

## 1. Create Program

- address: `BNDCEb5uXCuWDxJW9BGmbfvR1JBMAKckfhYrEKW2Bv1W`
- https://www.ironforge.cloud/ -> `Sign In` (or `Dashboard`)
- `Programs` tab (https://www.ironforge.cloud/programs) -> `New Program`

- Program Address: paste address
- Cluster: Devnet
- -> Search

- Program Name: solana_twitter
- -> Create Program
- -> Program Created

## 2. Observe

### Find by Address
- `findOne` allows to search by address (we don't have one yet)

### Query using MongoDB
- `mongodb/find` allows querying accounts and helps us with intellisense
- `mongodb/aggregate` allows to run aggregation pipelines, more powerful (advanced query),
  we'll just use a simple one to get an overview later

### Query using memcmp

- `memcmp` will not be used in this tutorial, allows querying binary data of accounts
- `find

### Find by Type

- `/find/Tweet` quick way to return accounts of a specific `account_type`
- the twitter program only has one account type (_Tweet_s)

## 3. Get Overview

### 3.1. How many tweets are there?

- `mongodb/aggregate`

```json
{
  "pipeline": [
    {
      "$count": "tweets"
    }
  ]
}
```

```json
{
    "error": null,
    "data": [
        {
            "tweets": 572
        }
    ]
}
```

### 3.2. Find by Type

- just hitting `Execute` returns us all `Tweet` accounts sorted by Slot _descending_
- notice the result is already parsed for you (not a given in Solana)
- hit _Next_ to get the next 10
- play with offset and limit to manually paginate (limit has a max of 100)

### 3.3 Querying by Account Type via Find

- reproduce with `find` what `/find/Tweet` does
- the `mongo/find` will give you intellisense
- delete existing example and type `{}` and then `"` which allows to select `query`
- use `<Tab>` to autocomplete or type manually to get this query
- note that the editor knows that there is only one account type

```json
{
  "query": {
    "account_type": "Tweet"
  }
}
```

- -> Execute
- notice that we're getting 20 results and that they match the first 20 results of `/find/Tweet`


### 3.3 Find Pagination

- use `options` to control how many and which results you get

#### First Page

```json
{
  "query": {
    "account_type": "Tweet"
  },
  "options": {
    "limit": 10
  }
}
```

#### Second Page

```json
{
  "query": {
    "account_type": "Tweet"
  },
  "options": {
    "skip": 10,
    "limit": 10
  }
}
```

### 3.4. Find Sorting

- let's do something that's not possible with `/find/Tweet`
- instead of using the default sorting (by slot _descending_) we'll sort by topic

```json
{
  "query": {
    "account_type": "Tweet"
  },
  "options": {
    "sort": [
      [
        "data.topic",
        "asc"
      ]
    ]
  }
}
```

- that returns the tweets with empty topics first, let's exclude them

```json
{
  "query": {
    "account_type": "Tweet",
    "data.topic": {
      "$ne": ""
    }
  },
  "options": {
    "sort": [
      [
        "data.topic",
        "asc"
      ]
    ]
  }
}
```

### 3.5. Find Advanced

- we can use any _find_ mongodb feature (even though for the most advanced ones we might not
  get intellisense)
- let's find the tweets that exceed the original tweet length limit

```json
{
  "query": {
    "account_type": "Tweet",
    "$expr": {
      "$gt": [
        {
          "$strLenCP": "$data.content"
        },
        140
      ]
    }
  }
}
```

- at the time of writing this tutorial we got 15 accounts back
- you don't have to understand the above query, it is merly to show you that the entire power
  of mongodb queries is at your disposal to inqire about on-chain data

## 4. Saving/Exporting Requests

- show with that last request how to export it
- how to save it
- and how one would share it

## 5. Transactions

### 5.1. IDL tab seguay

- show IDL tab which confirms only one account
- we can also see the instructions that this program supports

NOTE: in its current state it supports two more, but the IDL was never updated on devnet
- either we don't mention those other instructions
- or we deploy another version of the program with the IDL updated

### 5.2 Sending a Tweet

- using `sendTweet` instruction
- somehow send a tweet (I was able to use it via the modified dev script)
