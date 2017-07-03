# async-await

> es7 async-await polyfill for es6 (browsers and nodejs)

## Install

```
$ npm install async--await
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
        throw new Error(ex);
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
let async = require('async--await');

let startTime = performance.now();

let getUser = async(function () {
    let pageContent;
    try {
        pageContent = await(fetch('http://jsonplaceholder.typicode.com/posts/1'));
    } catch (ex) {
        throw new Error(ex);
    }

    return  pageContent.json()
});

getUser()
    .then(x => {
        let endDate = performance.now();
        console.log(`getUser call from async take ${endDate - startTime} ms`);

        console.log(x);

    })
```


```js

    async function logFetch(url) {
        try {
            const response = await fetch(url);
            console.log(await response.text(), 'from 1');
        }
        catch (err) {
            console.log('fetch failed', err);
        }
    }
    
    let logFetch2 = async(function (url) {
            try {
                const response = await(fetch(url));
                console.log(await(response.text()), 'from 2');
            }
            catch (err) {
                console.log('fetch failed', err);
            }
        });


    logFetch('http://jsonplaceholder.typicode.com/posts/1');
    logFetch2('http://jsonplaceholder.typicode.com/posts/1');

```

## Api
###-async(fn*|fn) -> fn


