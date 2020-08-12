---
date: "2020-8-12"
name: "useSWR"
stars: 128
description: "Observe mouse enter and leave to element."
source: "https://github.com/vercel/swr"
---
# Getting Started

## Installation

Inside your React project directory, run the following:

```
yarn add swr
```

Or with npm:

```
npm install swr
```

## Quick Start

For normal RESTful APIs with JSON data, first you need to create a `fetcher` function, which is just a wrapper of the native `fetch`:

```jsx
const fetcher = (...args) => fetch(...args).then(res => res.json())
```

Then you can import `useSWR` and start using it inside any function components:

```jsx
import useSWR from 'swr'
function Profile () {
  const { data, error } = useSWR('/api/user/123', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // render data
  return <div>hello {data.name}!</div>
}
```

Normally, there're 3 possible states of a request: "loading", "ready", or "error". You can use the value of `data` and `error` to
determine the current state of the request, and return the corresponding UI.
