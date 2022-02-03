const express = require('express');
const app = express();
app.listen(5050, function(){
  console.log("server starte on 5500")
});

// app.get('/', function(req,res){
//   res.send("hello");
// })

const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get('https://www.modetour.com/pkg/?MLoc=01&Theme=THE88&id=LOC985&domestic=Y');
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then((html) => {
    // axios 응답 스키마 `data`는 서버가 제공한 응답(데이터)을 받는다.
    // load()는 인자로 html 문자열을 받아 cheerio 객체 반환
    const $ = cheerio.load(html.data);
    const data = {
      mainContents: $('#ctl00_ctl00_bodyContent_bodyContent_pnlDomestic').html(),
    };
    return data;
  })
   .then((res) => log(res));
  //.then((res) => document.getElementById('copyHere').innerHTML=res);


  
//C:\Users\nerai\OneDrive\작업파일\개인작업\teamProject
//#ctl00_ctl00_bodyContent_bodyContent_pnlDomestic
//https://www.modetour.com/pkg/?MLoc=01&Theme=THE88&id=LOC985&domestic=Y