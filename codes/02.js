// december 2nd: why are we focusing on websites

_=function(_0){return async function(..._1){_2=await Promise.resolve(_0(..._1));console.log(_2);return _2}}

_(function(a,b){return new Promise(function(__){a.createServer(function(_0,_1){_1.writeHead(2e2,{"content-type":"text/html"});_1.end(b.slice(1,-1))}).listen(process.env.PORT||55e2,function(){__("mini chrismun site launched!")})})})(require("http"),`
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf8">
		<title>mini chrismun site</title>
		<style>html,body{font:12px sans-serif;margin:0;height:100%;overflow:hidden}body>*{padding:8px;overflow:inherit}h1{font-style:italic}h1:not(header h1){color:ForestGreen}header{background-color:Crimson;color:White;flex-shrink:0}header>div,html,body{display:flex;flex-direction:column}header>div{margin:auto;display:flex;flex-direction:column;max-width:fit-content;max-height:fit-content;gap:8px}header>div *{margin:0}main{height:100%}</style>
	</head>
	<body>
		<header><div><h1>mini chrismun site</h1><p>made by rix</p></div></header>
		<main>
			<h1>welcome to a mini chrismun site</h1>
			<p>this site is practically pointless but i mean im doig this for advent of code which in turn is also kinda pointless and fun at the saem time</p>
			<p>merry chrismun guys</p>
			<p>anyways enough yapping ill be waiting for tmrw</p>
		</main>
		<!-- This Script is from www.htmlfreecodes.com, Provided by: Mahmood Bina -->
		<!-- snowflake plugin -->
		<script defer>
			// Set the number of snowflakes (more than 30 - 40 not recommended)
			var snowmax=35

			// Set the colors for the snow. Add as many colors as you like
			var snowcolor=new Array("inherit")

			// Set the fonts, that create the snowflakes. Add as many fonts as you like
			var snowtype=new Array("inherit")

			// Set the letter that creates your snowflake (recommended:*)
			var snowletter="❅"

			// Set the speed of sinking (recommended values range from 0.3 to 2)
			var sinkspeed=0.6

			// Set the maximal-size of your snowflaxes
			var snowmaxsize=22

			// Set the minimal-size of your snowflaxes
			var snowminsize=8

			// Set the snowing-zone
			// Set 1 for all-over-snowing, set 2 for left-side-snowing 
			// Set 3 for center-snowing, set 4 for right-side-snowing
			var snowingzone=1

			///////////////////////////////////////////////////////////////////////////
			// CONFIGURATION ENDS HERE
			///////////////////////////////////////////////////////////////////////////


			// Do not edit below this line
			var snow=new Array()
			var marginbottom
			var marginright
			var timer
			var i_snow=0
			var x_mv=new Array();
			var crds=new Array();
			var lftrght=new Array();
			var browserinfos=navigator.userAgent 
			var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
			var ns6=document.getElementById&&!document.all
			var opera=browserinfos.match(/Opera/)  
			var browserok=ie5||ns6||opera

			function randommaker(range) {		
				rand=Math.floor(range*Math.random())
				return rand
			}

			function initsnow() {
				if (ie5 || opera) {
					marginbottom = document.body.clientHeight
					marginright = document.body.clientWidth
				}
				else {
					marginbottom = window.innerHeight
					marginright = window.innerWidth
				}
				var snowsizerange=snowmaxsize-snowminsize
				for (i=0;i<=snowmax;i++) {
					crds[i] = 0;                      
					lftrght[i] = Math.random()*15;         
					x_mv[i] = 0.03 + Math.random()/10;
					snow[i]=document.getElementById("s"+i)
					snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
					snow[i].size=randommaker(snowsizerange)+snowminsize
					snow[i].style.fontSize=snow[i].size+"px"
					snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
					snow[i].sink=sinkspeed*snow[i].size/5
					if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
					if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
					if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
					if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
					snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
					snow[i].style.left=snow[i].posx+"px"
					snow[i].style.top=snow[i].posy+"px"
				}
				movesnow()
			}

			function movesnow() {
				for (i=0;i<=snowmax;i++) {
					crds[i] += x_mv[i];
					snow[i].posy+=snow[i].sink
					snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+"px";
					snow[i].style.top=snow[i].posy+"px"
					
					if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
						if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
						if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
						if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
						if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
						snow[i].posy=0
					}
				}
				var timer=setTimeout("movesnow()",50)
			}

			if (browserok) {
				for (i=0;i<=snowmax;i++) {
					document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"px;'>"+snowletter+"</span>")
				}
				initsnow()
			}
		</script>
	</body>
</html>
`)

/* ultra big explanation time!
 * 
 * check yesterdays code.
 * also i think i already styled it to my content so idk lol
 */