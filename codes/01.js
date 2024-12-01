// december 1st: the start!

_=function(_0){return async function(..._1){_2=await Promise.resolve(_0(..._1));console.log(_2);return _2}}

_(function(a, b){return new Promise(function(__){a.createServer(function(_0,_1){_1.writeHead(2e2,{"content-type":"text/html"});_1.end(b.slice(1,-1))}).listen(process.env.PORT||55e2,function(){__("mini chrismun site launched!")})})})(require("http"), `
<!DOCTYPE html>
<html>
	<head>
		<title>mini chrismun site</title>
		<style>html,body{font:12px sans-serif;margin:0;height:100%}body>*{padding:8px}h1{font-style:italic}header{background-color:Crimson;color:White;flex-shrink:0}header>div,html,body{display:flex;flex-direction:column}header>div{margin:auto;display:flex;flex-direction:column;max-width:fit-content;max-height:fit-content;gap:8px}header>div *{margin:0}main{height:100%}</style>
	</head>
	<body>
		<header><div><h1>mini chrismun site</h1><p>made by rix</p></div></header>
		<main>
			<h1>welcome to a mini chrismun site</h1>
			<p>this site is practically pointless but i mean im doig this for advent of code which in turn is also kinda pointless and fun at the saem time</p>
			<p>anyways enough yapping ill be waiting for tmrw</p>
		</main>
	</body>
</html>
`)