# async-await

> es7 async-await polyfill

## Install

```
$ npm install async-await-es7
```


## Usage

```js
/**
 * Builtin-in
 */
let startTime = performance.now();
async function getUser () {

    let pageContent;
    try {
        pageContent = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    } catch (ex) {
        Promise.reject(ex)
    }

    return  pageContent.json()
}

getUser()
    .then(x => {
        let endDate = performance.now();
        console.log(`getUser call from builtin async take ${endDate - startTime} ms`);

        console.log(x);

    })

```

```js
/**
 * module
 */
let async = require('async-await-es7');

let startTime = performance.now();

let getTrace = async(function () {
    let pageContent;
    try {
        pageContent = await(fetch('http://jsonplaceholder.typicode.com/posts/1'));
    } catch (ex) {
        Promise.reject(ex)
    }

    return  pageContent.json()
});

getTrace()
    .then(x => {
        let endDate = performance.now();
        console.log(`getTrace call from async take ${endDate - startTime} ms`);

        console.log(x);

    })
```

## Api
###-async(fn*|fn) -> fn


