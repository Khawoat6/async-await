(() => {

    /* // 1. How Asynchronous code works in JavaScript
    function simulateAsyncAPI(text, timeout) {
        setTimeout(() => console.log(text), timeout);
    }

    simulateAsyncAPI('A', 1000);
    simulateAsyncAPI('B', 500);
    simulateAsyncAPI('C', 100); 
    
    OUTPUT
    C
    B
    A
    */
    
    
    /* // 2. Callback
    function simulateAsyncAPI(text, timeout, callback) {
        setTimeout(() => {
            console.log(text)

            if (callback) {
                callback();
            }
        }, timeout);
    }

    simulateAsyncAPI('A', 1000, () => {
        simulateAsyncAPI('B', 500, () => {
            simulateAsyncAPI('C', 100);
        }); 
    });
    OUTPUT
    C
    B
    A */


    /* // 3. Promise
    function simulateAsyncAPI(text, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (text === 'B') return reject('B got rejected');
                console.log(text);
                resolve();
            }, timeout)
        });
    }

    simulateAsyncAPI('A', 1000)
        .then(() => {
            simulateAsyncAPI('B', 500);
        })
        .then(() => {
            simulateAsyncAPI('C', 100);
        })
        .catch((error) => {
            console.error(error);
        }) 
        OUTPUT
        A
        B got rejected
        */
        

    // 4. Async/Await
    function simulateAsyncAPI(text, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (text === 'B') return reject('B got rejected');
                console.log(text);
                resolve();
            }, timeout)
        });
    }

    async function run() {
        try {
            await simulateAsyncAPI('A', 1000);
            await simulateAsyncAPI('B', 500);
            await simulateAsyncAPI('C', 100);
        } catch (error) {
            console.error(error);
        }
    }
    run();
    // OUTPUT
    // A
    // B
    // C

})();