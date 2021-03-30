//Arrow function

const posts = {
    title: 'main',
    records: ['Bialogy','Engineering'],
    print: function () {
        this.records.forEach((value) =>{
            // using arrow function then it calls local variable
            // Without arrow function it calls global variable
            console.log(value, this.title);
        });
    }
}

posts.print();