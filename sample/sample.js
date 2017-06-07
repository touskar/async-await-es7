/**
 * Created by mac on 07/06/2017.
 */


async = require('../index');
fetch = require('node-fetch'); // fetch for nodejs
performance = {
    now: require("performance-now")
}; // performance.now


/**
 * module
 */
(function () {
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

})();

/**
 * Builtin-in
 */
(function () {
    let startTime = performance.now();
    async function getTrace () {

        let pageContent;
        try {
            pageContent = await fetch('http://jsonplaceholder.typicode.com/posts/1')
        } catch (ex) {
            Promise.reject(ex)
        }

        return  pageContent.json()
    }

    getTrace()
        .then(x => {
            let endDate = performance.now();
            console.log(`getTrace call from builtin async take ${endDate - startTime} ms`);

            console.log(x);

        })

})();

