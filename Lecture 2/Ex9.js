// ==================================================
// Callback with Promise example
function getResult() {
    let value = 0;

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            value = Math.floor(Math.random() * 10);

            if (value % 2 === 0) {
                // Marks the successful completion of the async operation
                resolve(value);
                return;
            }

            // Marks the failure completion of the async operation
            return reject(new Error('Invalid Value'));

        }, 1000);
    })

}

getResult().then(value => {
    console.log(value);
}).catch(e => {
    // Catch the error if there have
    console.error(e);
}).finally(() => {
    console.log('Execution Finished');
});