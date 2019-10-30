# Communicating with Server, pt 1
---
## Communicating: as we have seen it
- Explore wikipedia
- Talk through what we see

## Communicating: Web 2.0
- Explore Google Maps
- Talk through what we see

## AJAX
- Async JavaScript and XML
  - https://en.wikipedia.org/wiki/Ajax_(programming)
- XML ??

## Async
- setTimeout
- addEventListener

### How do we handle async code?
- For example:
.addEventListener -> cb
.setTimeout -> cb

### Fetch
- Built in WebAPI
- Get JSON data
- Returns a promise object
- Practice with:  https://pokeapi.co/api/v2/pokemon

### Introducing ... Promises
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Practice with: http://localhost:300/hello/1
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise-=-=-=-=-=-Chaining
- `.then().then()`
- easy to read, easy to manage
