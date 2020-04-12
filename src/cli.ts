#!/usr/bin/env npx ts-node

//make sure express is installed
// Main CLI file...

import express from 'express';
import { averageOddPositiveIntegers } from './util';


const app = express();
app.use(express.json());


//const data: number[] = [1,2,3,4,5];

var port = 0;
//console.log(process.argv);
let host = process.argv[2];
const data: number[] = JSON.parse(process.argv[3]);


const result: number = averageOddPositiveIntegers(data);

app.post('/odd-positive-average-ui', (req, res) => {
    
    //const result: number = averageOddPositiveIntegers(data);

    if(result == null)
    {
        res.status(400).send("result is null");
    }
    else
    {   res.set({ 'content-type': 'application/json'});
        res.status(200).send({result});
    }

});

//console.log('hello world!');
//console.log('test number 2');
//console.log(result);
console.log("Average of all odd positive integers " + result);

if(host == "http://localhost:3030")
{
    //console.log("port is 3030");
     port = 3030;
    app.listen(port);
}
else
{
    console.log("server chosen is not avaliable");
}



