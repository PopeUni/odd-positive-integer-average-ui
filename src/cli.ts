#!/usr/bin/env npx ts-node

//make sure express is installed
// Main CLI file...

import express from "express";
import { averageOddPositiveIntegers } from "./util";
import axios from "axios";

//const app = express();
//app.use(express.json());

var port = 0;
let host = process.argv[2];
const data: number[] = JSON.parse(process.argv[3]);
const result: number = averageOddPositiveIntegers(data);

/*
app.post('/odd-positive-average-ui', (req, res) => {

    res.set({ 'content-type': 'application/json'});
    if(result === 0 )
    {
        res.status(400).send({message:"no odd positive integers is given array"}); 
    }
    else
    {   res.set({ 'content-type': 'application/json'});
        res.status(200).send({result});

        
    }
});
*/
let testString = "testing";

function sendPost() {
  axios({
    method: "post",
    url: "http://localhost:3003/odd-positive-average",
    data: {
      cliResult: result,
    },
  });
}

if (result == 0) {
  console.log("No odd positive numbers supplied in given array");
} else {
  console.log("Average of all odd positive integers " + result);
  sendPost();
}

//var testport = host.substr(host.length - 4);
//console.log(testport);
//app.listen(parseInt(testport));
