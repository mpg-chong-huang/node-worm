# node-worm
nodejs server worm scraper

run install with npm 


/ for http request /

$ npm install superagent --save

/ for html format /

$ npm install cheerio --save

/ for Multithreading /

$ npm install async --save


node run with senting request and get request from web

try downloading images as the website formatted in the webpage

/ run this to down load  the images we request into img file /

adding data pool module for data management , controlled under 100 request limited pool

$ node pool.js 

testing database under mysql server, please intall it before u run the pool server

$ npm install mysql --save 

/ for testing data pool pressure /

$ npm install siege --save 

pressure request in (testSiege.js) please test in the right port and input the number of the request pressure

node testSiege.js

GET:/

done:10000

200 OK: 10000

rps: 1825

response: 0ms(min)      83ms(max)       8ms(avg)

小型网络爬虫+数据池+节点压力测试

npm安装齐全依赖项之后 运行 npm pool.js 监听所在抓取数据的服务器，并将数据分配存储到数据库

这里使用的数据库是mysql

节点测试使用siegejs的模拟器，请选择好监听端口，或者是相应的域名，并发请求数，这里我只并发10000请求

data.js 是正常情况下的数据操作

pool.js 是使用了数据池数据操作

安装完依赖项并启动其中之一，之后运行

$ node testSiege.js 
