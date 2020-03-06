# JavaScript

## Fetch

### Abort

```javascript
const controller = new AbortController();
const signal = controller.signal;
fetch(urlToFetch, {
  method: 'get',
  signal: signal
});
function abortFetching() {
  console.log('Now aborting');
  // Abort.
  controller.abort();
}
```

# React

## Presentations

mdx-deck - https://github.com/jxnblk/mdx-deck

## Next.json

Blog - https://github.com/kendallstrautman/nextjs-blog-starter

# Markdown

Markdown Cheatsheet - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

# Free Resources

## Images

https://unsplash.com/
