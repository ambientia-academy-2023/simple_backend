const express = require('express');
const app = express();
const port = 3000;

app.get('/example1',
    function(request,response){
        response.send('I am example');
        console.log('I am example test');
    }
);

app.get('/example2',
    function(request, response){
        console.log("endpoint example2");
        response.json("endpoint example2");

    }
);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports =app;