const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/example1',
    function(request,response){
        response.send('I am example');
        console.log('I am example test');
    }
);

app.use(
    function(request,response,next){
        console.log("Olen Middleware1");
        next();
});

app.get('/example2',
    function(request, response){
        console.log("endpoint example2");
        response.json("endpoint example2");

    }
);
app.use(
    function(request,response,next){
        console.log("Olen Middleware2");
        next();
});
app.get('/example3/:fn',
    function(request,response){
        let fname=request.params.fn;
        response.json("Terve "+fname);
        console.log("Terve "+fname);
    }
);

app.get('/example4/:fn?',
    function(request,response){
        if(request.params.fn){
            response.json("Nimi = "+request.params.fn);
        }
        else{
            response.json("Et antanut nimeä");
        }
    }
);

app.post('/example1',
    function(request, response){
        response.json(request.body.fname);
        console.log(request.body);
    }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports =app;