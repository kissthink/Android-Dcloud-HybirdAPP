webpackJsonp([5],{136:function(t,r){},174:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"app"}},[n("p",[t._v("\n      DEMI INDEX\n  ")]),t._v(" "),n("img",{ref:"demo",attrs:{src:t.testImgURL}})])},staticRenderFns:[]}},176:function(t,r){Array.prototype.del=function(t){t.sort();for(var r=this.concat([]),n=t.length-1;n>=0;n--)r=r.slice(0,t[n]).concat(r.slice(t[n]+1));return r};try{HTMLImageElement.prototype.loadOnce=function(t){var r=0;this.onload=function(){r||t.call(this,null),r++}}}catch(t){window={}}(function(t){function r(){this.readyState&&(this.readyState=0,this.dorsyWorker.startWorker())}var n={lib:[],init:function(){this.require("config")},module:function(t,r){function n(t){a++;var o=e[a];return a==e.length-1?void(t[o]=r.call(null,i)):void n(t[o]?t[o]:t[o]={})}var e=[t];/\./g.test(t)&&(e=t.split("."));var a=-1,i=this;n(this.lib)},require:function(t){var r=this,n=document.createElement("script");document.body.appendChild(n),n.src="./js/module/"+t+".js",n.onload=n.onerror=function(t){r.handlerror(t)}},handlerror:function(t){},destroySelf:function(r){throw delete window[t],new Error(r)},reflect:function(t,r,n){var e=this.lib.config.getModuleName(t),a=e.spaceName,i=e.actName;switch(a){case"Filter":case"Alteration":return this.lib[a][i].process(r,n);case"ComEffect":return this.lib[i].process(r,n);default:this.destroySelf("AI_ERROR: ")}},reflectEasy:function(t){var r=this.lib.config.getEasyFun(t).actName;return this.lib.easy.getFun(r)},add:function(t,r,n,e,a,i,o,s){return this.lib.addLayer.add(t,r,n,e,a,i,o,s)},worker:function(t,r){},applyMatrix:function(t,r){},tools:function(t,r){var n=Array.prototype.shift.call(r);if(this.lib.Tools[n])return this.lib.Tools[n].process(t,r);throw new Error("AI_ERROR: 不存在的工具方法_"+n)}};window[t]=function(r,e,a){var i=this;if(!(this instanceof window[t]))return new window[t](r,e,a);this.startTime=+new Date;var o=document.createElement("canvas"),s=o.getContext("2d");if(isNaN(r)){o.width=parseInt(r.width),o.height=parseInt(r.height);var h=getComputedStyle(r),c=parseInt(h.getPropertyValue("width")),u=parseInt(h.getPropertyValue("height"));isNaN(c)?s.drawImage(r,0,0):s.drawImage(r,0,0,c,u)}else o.width=r,o.height=e,a=a||"#fff",s.fillStyle=a,s.fillRect(0,0,r,e);this.canvas=o,this.context=s,this.imgData=s.getImageData(0,0,o.width,o.height),this.name=t+"_"+Math.random(),this.canvas.id=this.name,this.layers=[];var f=document.createElement("canvas");if(f.width=o.width,f.height=o.height,this.ctxCanvas=f,this.ctxContext=o.getContext("2d"),this.useWorker=n.useWorker,this.readyState=1,this.useWorker&&(this.dorsyWorker=n.lib.dorsyWorker(this)),n.lib.Tools)for(var d in n.lib.Tools)this.Tools[d]=function(t){return i.Tools(d,t)}},window[t].module=function(t,r){n.module(t,r)},window[t].dorsyMath=function(){return n.lib.dorsyMath},window[t].setName=function(t){n.name=t||"alloyimage.js"},window[t].getConfig=function(){return n.lib.config.getConfig()},window[t].useWorker=function(t){if(!window.Worker)return this.useWorker=0,void console.log("AI_WARNING: 浏览器不支持web worker, 自动切换为单线程\nAI_WARNING: the brower doesn't support Web Worker");var t=t||"";/[\/\\]$/.test(t)&&(t+=n.name),""==t&&(t="alloyimage.js"),n.useWorker=1,n.path=t;var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&"404"==r.status&&n.destroySelf("AI_ERROR：使用worker时，ai文件路径指定错误\nAI_ERROR: error occured while using web worker since indicate the wrong path of file ai")},r.open("GET",t,!1),r.send()},onmessage=function(t){var r,e=t.data;"act"==e[0]?r=n.reflect(e[1],e[2],e[3]):"add"==e[0]&&(r=n.add.apply(n,e[1])),r&&postMessage(r)},window[t].prototype={act:function(t,e){var a=[];return a=Array.prototype.slice.call(arguments,1),this.useWorker?(this.dorsyWorker.queue.push(["act",t,a]),r.call(this)):n.reflect(t,this.imgData,a),this},view:function(t,r,n,e,a){var i=this.clone();return i.type=1,this.addLayer(i,"正常",0,0),i.act(t,r,n,e,a),this},excute:function(){var t=this.layers,r=t.length;return t[r-1]&&1==t[r-1][0].type&&(this.imgData=t[r-1][0].imgData,t.pop()),this},cancel:function(){var t=this.layers,r=t.length;return t[r-1]&&1==t[r-1][0].type&&t.pop(),this},show:function(r,n,e){if(e);else if(this.useWorker)return this.dorsyWorker.queue.push(["show",r,n]),this;if(0==this.layers.length)this.tempPsLib={imgData:this.imgData};else{var a=new window[t](this.canvas.width,this.canvas.height);a.add(this,"正常",0,0,n),this.tempPsLib=a;for(var i=0;i<this.layers.length;i++){var o=this.layers[i],s=o[0].layers,h=o[0];s[s.length-1]&&1==s[s.length-1][0].type&&(h=s[s.length-1][0]),a.add(h,o[1],o[2],o[3],n)}this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}return this.context.putImageData(this.tempPsLib.imgData,0,0),r?document.querySelector(r).appendChild(this.canvas):document.body.appendChild(this.canvas),this},replace:function(t,n){if(n);else if(this.useWorker)return this.dorsyWorker.queue.push(["replace",t]),r.call(this),this;return t&&(t.onload=function(){},t.src=this.save("png",n)),this},add:function(){for(var t,e,a,i,o,s,h,c=[],u=0;u<arguments.length;u++)if(u)switch(typeof arguments[u]){case"string":/\d+%/.test(arguments[u])?a=arguments[u].replace("%",""):/[RGB]+/.test(arguments[u])?h=arguments[u]:e=arguments[u];break;case"number":c.push(arguments[u]);break;case"boolean":s=arguments[u]}return i=c[0]||0,o=c[1]||0,e=e||"正常",a=a/100||1,s=s||!1,h=h||"RGB",t=arguments[0],this.useWorker?(this.dorsyWorker.queue.push(["add",t,e,a,i,o,s,h]),r.call(this)):this.imgData=n.add(this.imgData,t.imgData,e,a,i,o,s,h),this},addLayer:function(t,r,n,e){return this.layers.push([t,r,n,e]),this},clone:function(r){var n=new window[t](this.canvas.width,this.canvas.height);return n.context.putImageData(this.imgData,0,0),n.imgData=n.context.getImageData(0,0,this.canvas.width,this.canvas.height),n},swap:function(t,r){var n=this.layers[t];return this.layers[t]=this.layers[r],this.layers[r]=n,this},deleteLayers:function(t){this.layers=this.layers.del(t)},save:function(n,e){n=n||"png",n=n.toLowerCase();"jpg"==n&&(n="jpeg");var a="image/"+n;if(e);else if(this.useWorker)return this.dorsyWorker.queue.push(["save"]),r.call(this),this;if(!this.layers.length)return this.context.putImageData(this.imgData,0,0),this.canvas.toDataURL(a);var i=new window[t](this.canvas.width,this.canvas.height);i.add(this,"正常",0,0,0),this.tempPsLib=i;for(var o=0;o<this.layers.length;o++){var s=this.layers[o],h=s[0].layers,c=s[0];h[h.length-1]&&1==h[h.length-1][0].type&&(c=h[h.length-1][0]),i.add(c,s[1],s[2],s[3],0)}return this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.putImageData(i.imgData,0,0),this.canvas.toDataURL()},saveFile:function(){var t=this.save();t=t.replace(/^data:image\/(?:(?:jpeg)|(?:png))/,"data:image/octet-stream"),window.location.href=t},drawRect:function(t){var r;(r=document.getElementById("imgRect"))||(r=document.createElement("canvas"),r.id="imgRect",document.body.appendChild(r),r.width=parseInt(this.canvas.width),r.height=parseInt(this.canvas.height));var n=r.getContext("2d");n.clearRect(0,0,r.width,r.height);for(var e=[],a=this.tempPsLib.imgData.data,i=0,o=a.length;i<o;i++)e[a[i]]?e[a[i]]++:e[a[i]]=1;n.beginPath(),n.moveTo(0,r.height);for(var s=0,h=0;h<255;h++)e[h]>s&&(s=e[h]);for(var c=0;c<255;c++){var u=e[c]||0;u=r.height-u/s*.8*r.height,n.lineTo(c/256*r.width,u,1,1)}n.lineTo(r.width+10,r.height),n.fill()},ps:function(t){var r=n.reflectEasy(t),e=this;return e=r.call(e),this.logTime("组合效果"+t),e},logTime:function(t){console.log(t+": "+(+new Date-this.startTime)/1e3+"s")},ctx:function(t){var r=this.ctxContext;return r.putImageData(this.imgData,0,0),t.call(r),this.imgData=r.getImageData(0,0,this.canvas.width,this.canvas.height),this},notify:function(t){"readyStateOK"==t&&(this.readyState=1)},complete:function(t){this.useWorker?this.dorsyWorker.queue.push(["complete",t]):t()},transform:function(t){var r=this.ctxContext;r.putImageData(this.imgData,0,0);var n=document.createElement("canvas").getContext("2d");return n.canvas.width=this.canvas.width,n.canvas.height=this.canvas.height,n.transform.apply(n,t),n.drawImage(r.canvas,0,0),this.imgData=n.getImageData(0,0,this.canvas.width,this.canvas.height),this},scale:function(t,r){return r=r||t,this.transform([t,0,0,r,0,0])},rotate:function(t){var r=t/180*Math.PI,n=[Math.cos(r),Math.sin(r),-Math.sin(r),Math.cos(r),0,0];return this.transform(n)},moveTo:function(t,r){return t=t||0,r=r||0,this.transform([1,0,0,1,t,r])},clip:function(t,r,n,e){return this.ctxContext.putImageData(this.imgData,0,0),this.imgData=this.ctxContext.getImageData(t,r,n,e),this.context.canvas.width=n,this.context.canvas.height=e,this},Tools:function(t){return n.tools(this.imgData,arguments)}}})("psLib"),window.AlloyImage=$AI=window.psLib,function(t){window.psLib.module("addLayer",function(t){return{add:function(t,r,n,e,a,i,o,s){var h=t.data,c=r.data,a=a||0,i=i||0,e=e||1,s=s||"RGB";/[RGB]+/.test(s)||(s="RGB");for(var u,f,d,l,v,p,g,w,m=s.replace("R","0").replace("G","1").replace("B","2"),y=t.width,I=(t.height,c.length),b=r.width,M=[m.indexOf("0")>-1,m.indexOf("1")>-1,m.indexOf("2")>-1],A=0,k=h.length;A<k;A+=4)if(f=A/4,d=parseInt(f/y),l=f%y,v=d-i,p=l-a,g=v*b+p,(w=4*g)>=0&&w<I-4&&p<b&&p>=0)for(var x=0;x<3&&0!=c[w+3];x++)switch(h[A+3]=c[w+3],n){case"颜色减淡":M[x]&&(u=h[A+x]+h[A+x]*c[w+x]/(255-c[w+x]),h[A+x]=(1-e)*h[A+x]+e*u);break;case"变暗":M[x]&&(u=h[A+x]<c[w+x]?h[A+x]:c[w+x],h[A+x]=(1-e)*h[A+x]+e*u);break;case"变亮":M[x]&&(u=h[A+x]>c[w+x]?h[A+x]:c[w+x],h[A+x]=(1-e)*h[A+x]+e*u);break;case"正片叠底":M[x]&&(u=parseInt(h[A+x]*c[w+x]/255),h[A+x]=(1-e)*h[A+x]+e*u);break;case"滤色":M[x]&&(u=parseInt(255-(255-h[A+x])*(255-c[w+x])/255),h[A+x]=(1-e)*h[A+x]+e*u);break;case"叠加":M[x]&&(u=h[A+x]<=127.5?h[A+x]*c[w+x]/127.5:255-(255-h[A+x])*(255-c[w+x])/127.5,h[A+x]=(1-e)*h[A+x]+e*u);break;case"强光":M[x]&&(u=c[w+x]<=127.5?h[A+x]*c[w+x]/127.5:h[A+x]+(255-h[A+x])*(c[w+x]-127.5)/127.5,h[A+x]=(1-e)*h[A+x]+e*u);break;case"差值":M[x]&&(u=h[A+x]>c[w+x]?h[A+x]-c[w+x]:c[w+x]-h[A+x],h[A+x]=(1-e)*h[A+x]+e*u);break;case"排除":M[x]&&(u=h[A+x]+c[w+x]-h[A+x]*c[w+x]/127.5,h[A+x]=(1-e)*h[A+x]+e*u);break;case"点光":M[x]&&(u=h[A+x]<2*c[w+x]-255?2*c[w+x]-255:h[A+x]<2*c[w+x]?h[A+x]:2*c[w+x],h[A+x]=(1-e)*h[A+x]+e*u);break;case"颜色加深":M[x]&&(u=255-255*(255-h[A+x])/c[w+x],h[A+x]=(1-e)*h[A+x]+e*u);break;case"线性加深":if(M[x]){var C=h[A+x]+c[w+x];u=C>255?C-255:0,h[A+x]=(1-e)*h[A+x]+e*u}break;case"线性减淡":if(M[x]){var C=h[A+x]+c[w+x];u=C>255?255:C,h[A+x]=(1-e)*h[A+x]+e*u}break;case"柔光":M[x]&&(u=c[w+x]<127.5?((2*c[w+x]-255)*(255-h[A+x])/65025+1)*h[A+x]:(2*c[w+x]-255)*(Math.sqrt(h[A+x]/255)-h[A+x]/255)+h[A+x],h[A+x]=(1-e)*h[A+x]+e*u);break;case"亮光":M[x]&&(u=c[w+x]<127.5?255*(1-(255-h[A+x])/(2*c[w+x])):h[A+x]/(2*(1-c[w+x]/255)),h[A+x]=(1-e)*h[A+x]+e*u);break;case"线性光":if(M[x]){var C=h[A+x]+2*c[w+x]-255;u=C>255?255:C,h[A+x]=(1-e)*h[A+x]+e*u}break;case"实色混合":M[x]&&(u=c[w+x]<255-h[A+x]?0:255,h[A+x]=(1-e)*h[A+x]+e*u);break;default:M[x]&&(u=c[w+x],h[A+x]=(1-e)*h[A+x]+e*u)}return t}}})}(),function(t){window.psLib.module("applyMatrix",function(t){return{process:function(r,n){for(var e=r.data,a=r.width,i=(r.height,new t.lib.dorsyMath.Matrix([-2,-4,-4,-4,-2,-4,0,8,0,-4,-4,8,24,8,-4,-4,0,8,0,-4,-2,-4,-4,-4,-2],25,1)),o=[],s=0,h=e.length;s<h;s+=4){var c=s/4,u=parseInt(c/a),f=c%a;if(0!=u&&0!=f){for(var d=[[],[],[]],l=-2;l<3;l++)for(var v=u+l,p=-2;p<3;p++)for(var g=f+p,w=4*(v*a+g),m=0;m<3;m++){var y=w+m;d[m].push(e[y])}for(var I=new t.lib.dorsyMath.Matrix(d,3,matrixSize),b=I.mutiply(i),m=0;m<3;m++)o[s+m]=b.data[m];o[s+4]=e[s+4]}}for(var s=0,h=e.length;s<h;s++)e[s]=o[s]||e[s];return r}}})}(),function(t){window.psLib.module("config",function(t){var r={Alteration:{"亮度":"brightness","色相/饱和度调节":"setHSI","曲线":"curve","gamma调节":"gamma"},Filter:{"灰度处理":"toGray","反色":"toReverse","灰度阈值":"toThresh","高斯模糊":"gaussBlur","浮雕效果":"embossment","查找边缘":"borderline","马赛克":"mosaic","油画":"oilPainting","腐蚀":"corrode","锐化":"sharp","添加杂色":"noise","暗角":"darkCorner","喷点":"dotted","降噪":"denoise","棕褐色":"sepia","色调分离":"posterize"},ComEffect:{"美肤":"softenFace","素描":"sketch","自然增强":"softEnhancement","紫调":"purpleStyle","柔焦":"soften","复古":"vintage","黑白":"gray","仿lomo":"lomo","亮白增强":"strongEnhancement","灰白":"strongGray","灰色":"lightGray","暖秋":"warmAutumn","木雕":"carveStyle","粗糙":"rough"}},n=function(){var t={};for(var n in r)if("ComEffect"!=n)for(var e in r[n])t[e]=n,t[r[n][e]]=n;return t}();return{getModuleName:function(e){var a;if(a=n[e]){return{spaceName:a,actName:r[a][e]||e}}t.destroySelf("AI_ERROR:调用AI不存在的方法"+e)},getEasyFun:function(t){return{spaceName:"ComEffect",actName:r.ComEffect[t]||t}},getConfig:function(){return r}}})}(),function(t){window.psLib.module("dorsyMath",function(t){var r={FFT1:function(t){function n(){i++;for(var t=a/Math.pow(2,i),r=a/t,o=0;o<t;o++)e(o*r,(o+1)*r-1,i);t>1&&n()}function e(n,e,i){for(var s=Math.pow(2,i-1),h=n,c=0;h<=e-s;h++){var u=h+s,f=c*a/Math.pow(2,i),d=f+a/4;t[h]instanceof r.C||(t[h]=new r.C(t[h])),t[u]instanceof r.C||(t[u]=new r.C(t[u]));var l=t[h].plus(t[u].mutiply(o[f])),v=t[h].plus(t[u].mutiply(o[d]));t[h]=l,t[u]=v,c++}}for(var a=t.length,i=0,o=[],s=0;s<a;s++)o[s]=this.exp(-2*Math.PI*s/a);return n(),t},DFT:function(){},Matrix:function(t,r,n){var e=[];if(r){if(isNaN(r))var a=/(\d+)\*/.exec(r)[1],i=/\*(\d+)/.exec(r)[1];else a=r,i=n;if(t[0]&&t[0][0])for(var o=0;o<a;o++){e[o]=[];for(var s=0;s<i;s++)e[o][s]=t[o][s]||0}else for(var o=0;o<a;o++){e[o]=[];for(var s=0;s<i;s++)e[o][s]=t[o*i+s]||0}this.m=a,this.n=i}else this.m=t.length,this.n=t[0].length;this.data=e},C:function(t,r){this.r=t||0,this.i=r||0},exp:function(t,n){t=t||0,n=n||1;var e=new r.C;return e.r=n*Math.cos(t),e.i=n*Math.sin(t),e},lagrange:function(t,r){function n(r,n){for(var a=1,i=1,o=0;o<e;o++)o!=n&&(a*=t[n]-t[o],i*=r-t[o]);return i/a}var e=t.length;return function(t){for(var a=0,i=0;i<e;i++){var o=n(t,i);a+=r[i]*o}return a}},applyMatrix:function(n,e,a){a=a||0;for(var i=n.data,o=n.width,s=(n.height,e.length),h=new r.Matrix(e,s,1),c=[],u=-(Math.sqrt(s)-1)/2,f=0,d=i.length;f<d;f+=4){var l=f/4,v=parseInt(l/o),p=l%o;if(0!=v&&0!=p){for(var g=[[],[],[]],w=u;w<=-u;w++)for(var m=v+w,y=u;y<=-u;y++)for(var I=p+y,b=4*(m*o+I),M=0;M<3;M++){var A=b+M;g[M].push(i[A])}for(var k=new t.lib.dorsyMath.Matrix(g,3,s),x=k.mutiply(h),M=0;M<3;M++)c[f+M]=x.data[M];c[f+4]=i[f+4]}}for(var f=0,d=i.length;f<d;f++)c[f]&&(i[f]=c[f]<a?c[f]:i[f]);return n},RGBToHSI:function(t,r,n){var e=(t-r+t-n)/2/Math.sqrt((t-r)*(t-r)+(t-n)*(r-n))||0;e=Math.acos(e);var a=n>r?2*Math.PI-e:e,i=1-3*Math.min(t,r,n)/(t+r+n),o=(t+r+n)/3;return a>2*Math.PI&&(a=2*Math.PI),a<0&&(a=0),{H:a,S:i,I:o}},HSIToRGB:function(t,r,n){if(t<0?(t%=2*Math.PI,t+=2*Math.PI):t%=2*Math.PI,t<=2*Math.PI/3)var e=n*(1-r),a=n*(1+r*Math.cos(t)/Math.cos(Math.PI/3-t)),i=3*n-(a+e);else if(t<=4*Math.PI/3){t-=2*Math.PI/3;var a=n*(1-r),i=n*(1+r*Math.cos(t)/Math.cos(Math.PI/3-t)),e=3*n-(i+a)}else{t-=4*Math.PI/3;var i=n*(1-r),e=n*(1+r*Math.cos(t)/Math.cos(Math.PI/3-t)),a=3*n-(i+e)}return{R:a,G:i,B:e}},applyInHSI:function(t,r){for(var n=t.data,e=0,a=n.length;e<a;e+=4){var i=this.RGBToHSI(n[e],n[e+1],n[e+2]);r(i),i.S>1&&(i.S=1),i.S<0&&(i.S=0);var o=this.HSIToRGB(i.H,i.S,i.I);n[e]=o.R,n[e+1]=o.G,n[e+2]=o.B}},applyInCoordinate:function(t,r){},distance:function(t,n){return n=n||[0,0],t=new r.C(t[0],t[1]),n=new r.C(n[0],n[1]),t.minus(n).distance()},xyToIFun:function(t){return function(r,n,e){return e=e||0,4*(n*t+r)+e}},xyCal:function(t,r,n,e,a){var i=this.xyToIFun(t.width),o=i(r,n,0),s=t.data,h=e(s[o],s[o+1],s[o+2]);s[o]=h[0],s[o+1]=h[1],s[o+2]=h[2],a&&(s[o+3]=a(s[o+3]))}};return r.Matrix.prototype={plus:function(t){if(this.m!=t.m||this.n!=t.n)throw new Error("矩阵加法行列不匹配");for(var n=new r.Matrix([],this.m,this.n),e=0;e<this.m;e++)for(var a=0;a<this.n;a++)n.data[e][a]=this.data[e][a]+t.data[e][a];return n},minus:function(t){if(this.m!=t.m||this.n!=t.n)throw new Error("矩阵减法法行列不匹配");for(var n=new r.Matrix([],this.m,this.n),e=0;e<this.m;e++)for(var a=0;a<this.n;a++)n.data[e][a]=this.data[e][a]-t.data[e][a];return n},mutiply:function(t){if(this.n!=t.m)throw new Error("矩阵乘法行列不匹配");for(var n=new r.Matrix([],this.m,t.n),e=0;e<this.m;e++)for(var a=0;a<t.n;a++){for(var i=0,o=0;o<this.n;o++)i+=this.data[e][o]*t.data[o][a];n.data[e][a]=i}return n}},r.C.prototype={plus:function(t){var n=new r.C;return n.r=this.r+t.r,n.i=this.i+t.i,n},minus:function(t){var n=new r.C;return n.r=this.r-t.r,n.i=this.i-t.i,n},mutiply:function(t){var n=new r.C;return n.r=this.r*t.r-this.i*t.i,n.i=this.r*t.i+this.i*t.r,n},divide:function(t){var n=new r.C,e=t.mutiply(t.conjugated()),a=this.mutiply(t.conjugated());return n.r=a.r/e.r,n.i=a.i/e.r,n},conjugated:function(){return new r.C(this.r,-this.i)},distance:function(){return Math.sqrt(this.r*this.r+this.i*this.i)}},r})}(),function(t){window.psLib.module("dorsyWorker",function(t){var r=200;return function(n){var e=new Worker(t.path);if(!e)throw new Error("使用worker时，alloyimage文件目录指定出错");var a={queue:[],startWorker:function(){this.shiftAction()},shiftAction:function(){function t(){if(a[1].readyState){var i=[n.imgData,a[1].imgData].concat(a.slice(2));e.postMessage(["add",i])}else setTimeout(function(){t()},r)}var a=this.queue.shift(),i=this;if(!a)return void setTimeout(function(){(a=i.queue.shift())||n.notify("readyStateOK")},r);var o=a[0];"act"==o?e.postMessage(["act",a[1],n.imgData,a[2]]):"add"==o?t():"show"==o?(n.show(a[1],a[2],1),this.shiftAction()):"complete"==o?(a[1]&&a[1](),this.shiftAction()):"clone"==o?(n.clone(1),this.shiftAction()):"save"==o?(n.save(0,1),this.shiftAction()):"replace"==o&&(n.replace(a[1],1),this.shiftAction())},callback:function(t){n.imgData=t,this.shiftAction()}};return e.onmessage=function(t){a.callback(t.data)},a}})}(),function(t){window[t].module("easy",function(r){return{getFun:function(r){return{softenFace:function(){return this.clone().add(this.act("高斯模糊",10),"滤色").act("亮度",-10,5)},sketch:function(){var t=this.clone();return this.add(t.act("反色").act("高斯模糊",8),"颜色减淡").act("toGray").act("锐化",1)},softEnhancement:function(){return this.act("曲线",[0,190,255],[0,229,255])},purpleStyle:function(){var t=this.clone();return this.add(t.act("高斯模糊",3),"正片叠底","RG")},soften:function(){var t=this.clone();return this.add(t.act("高斯模糊",6),"变暗")},vintage:function(){return this.clone(),this.act("灰度处理").add(window[t](this.canvas.width,this.canvas.height,"#808080").act("添加杂色").act("高斯模糊",4).act("色相/饱和度调节",32,19,0,!0),"叠加")},gray:function(){return this.act("灰度处理")},lomo:function(){return this.clone().add(this.clone(),"滤色").add(this.clone(),"柔光").add(this.clone().act("反色"),"正常","20%","B").act("暗角",6,200)},strongEnhancement:function(){return this.clone().add(this.clone().act("曲线",[0,50,255],[0,234,255]),"柔光")},strongGray:function(){return this.act("灰度处理").act("曲线",[0,61,69,212,255],[0,111,176,237,255])},lightGray:function(){return this.act("灰度处理").act("曲线",[0,60,142,194,255],[0,194,240,247,255])},warmAutumn:function(){var t=this.clone().act("色相/饱和度调节",36,47,8,!0).act("暗角",6,150);return this.add(t,"叠加")},carveStyle:function(){var t=this.clone().act("马赛克").act("查找边缘").act("浮雕效果");return this.add(t,"线性光")},rough:function(){return this.add(window[t](this.canvas.width,this.canvas.height,"#000").act("喷点").act("反色").act("浮雕效果"),"叠加")}}[r]}}})}("psLib"),function(t){window.psLib.module("Tools",function(t){return{getColor:{process:function(r,n){var e,a,i=t.lib.dorsyMath,o=(i.xyToIFun(r.width),50),s=2*Math.PI/o,h=[];i.applyInHSI(r,function(t){a=parseInt(t.H/s),h[a]||(h[a]=[]),h[a].push([t.S,t.I])});for(var c=0,u=0,e=0;e<o;e++)h[e]&&h[e].length>c&&(c=h[e].length,u=e);for(var f,d,l=0,v=0,e=0;e<h[u].length;e++)l+=h[u][e][0],v+=h[u][e][1];f=l/h[u].length,d=v/h[u].length;var p=u*s,g=i.HSIToRGB(p,f,d);return"rgb("+parseInt(g.R)+","+parseInt(g.G)+","+parseInt(g.B)+")"}},toText:{process:function(r,n){var e,a=r.data,i=r.width,o=r.height,s=n[0]||".:;!#@",h="";console.log(s);for(var c,u,f=t.lib.dorsyMath,d=f.xyToIFun(r.width),l=255/s.length,v=0;v<i;v+=1){for(var p=0;p<o;p+=1)c=d(v,p,0),e=(a[c]+a[c+1]+a[c+2])/3,u=parseInt(e/l),h+=s[u];h+="<br />"}return h}}}})}(),function(t){window.psLib.module("Alteration.brightness",function(t){return{process:function(t,r){for(var n=t.data,e=r[0]/50,a=r[1]||0,i=a/50,o=Math.tan((45+44*i)*Math.PI/180),s=0,h=n.length;s<h;s+=4)for(var c=0;c<3;c++)n[s+c]=(n[s+c]-127.5*(1-e))*o+127.5*(1+e);return t}}})}(),function(t){window.psLib.module("Alteration.curve",function(t){return{process:function(r,n){for(var e=t.lib.dorsyMath.lagrange(n[0],n[1]),a=r.data,i=r.width,o=r.height,s=0;s<i;s++)for(var h=0;h<o;h++)for(var c=h*i+s,u=0;u<3;u++)a[4*c+u]=e(a[4*c+u]);return r}}})}(),function(t){window.psLib.module("Alteration.gamma",function(t){return{process:function(r,n){var e,a=t.lib.dorsyMath,i=(r.data,r.width),o=r.height;e=void 0==n[0]?10:n[0];for(var s=(e+100)/200*2,h=0;h<i;h++)for(var c=0;c<o;c++)a.xyCal(r,h,c,function(t,r,n){return[Math.pow(t,s),Math.pow(r,s),Math.pow(n,s)]});return r}}})}(),function(t){window.psLib.module("Alteration.setHSI",function(t){return{process:function(r,n){return n[0]=n[0]/180*Math.PI,n[1]=n[1]/100||0,n[2]=n[2]/100*255||0,n[3]=n[3]||!1,t.lib.dorsyMath.applyInHSI(r,function(t){n[3]?(t.H=n[0],t.S=n[1],t.I+=n[2]):(t.H+=n[0],t.S+=n[1],t.I+=n[2])}),r}}})}(),function(t){window.psLib.module("Filter.corrode",function(t){return{process:function(t,r){for(var n=parseInt(r[0])||3,e=t.data,a=t.width,i=t.height,o=0;o<a;o++)for(var s=0;s<i;s++)for(var h=parseInt(Math.random()*n*2)-n,c=parseInt(Math.random()*n*2)-n,u=s*a+o,f=(s+h)*a+o+c,d=0;d<3;d++)e[4*u+d]=e[4*f+d];return t}}})}(),function(t){window.psLib.module("Filter.darkCorner",function(t){return{process:function(r,n){for(var e=parseInt(n[0])||3,a=(n[2],n[1]||30),i=r.data,o=r.width,s=r.height,h=2*o/3,c=1*s/2,u=t.lib.dorsyMath.distance([h,c]),f=u*(1-e/10),d=function(t,r,n,e,a){return r*Math.pow(1-t,3)+3*n*t*Math.pow(1-t,2)+3*e*t*t*(1-t)+a*Math.pow(t,3)},l=0;l<o;l++)for(var v=0;v<s;v++)for(var p=v*o+l,g=0;g<3;g++){var w=function(r,n,e){var i=t.lib.dorsyMath.distance([r,n],[h,c]),o=(i-f)/(u-f);return o<0&&(o=0),d(o,0,.02,.3,1)*e*a/255}(l,v,i[4*p+g]);i[4*p+g]-=w}return r}}})}(),function(t){window.psLib.module("Filter.denoise",function(t){return{process:function(r,n){for(var e=t.lib.dorsyMath,a=(r.data,r.width),i=r.height,o=0;o<a;o++)for(var s=0;s<i;s++)e.xyCal(r,o,s,function(t,r,n){return[.393*t+.769*r+.189*n,.349*t+.686*r+.168*n,.272*t+.534*r+.131*n]});return r}}})}(),function(t){window.psLib.module("Filter.dotted",function(t){return{process:function(r,n){for(var e=parseInt(n[0])||1,a=parseInt(n[1])||1,i=r.data,o=r.width,s=r.height,h=2*e+1,c=[],u=a*a,f=-e;f<e;f++)for(var d=-e;d<e;d++)f*f+d*d>u&&c.push([f,d]);for(var l=t.lib.dorsyMath.xyToIFun(o),f=0,v=parseInt(o/h);f<v;f++)for(var d=0,p=parseInt(s/h);d<p;d++)for(var g=parseInt((f+.5)*h),w=parseInt((d+.5)*h),m=0;m<c.length;m++){var y=g+c[m][0],I=w+c[m][1];i[l(y,I,3)]=225,i[l(y,I,2)]=225,i[l(y,I,0)]=225,i[l(y,I,1)]=225}return r}}})}(),function(t){window.psLib.module("Filter.embossment",function(t){return{process:function(t,r){for(var n=t.data,e=t.width,a=(t.height,[]),i=0,o=n.length;i<o;i+=4){var s=i/4,h=parseInt(s/e),c=s%e,u=4*((h-1)*e+(c-1)),f=(h+1)*e*4+4*(c+1);if(0!=h&&0!=c){for(var d=0;d<3;d++)a[i+d]=n[u+d]-n[f+d]+127.5;a[i+4]=n[i+4]}}for(var i=0,o=n.length;i<o;i++)n[i]=a[i]||n[i];return t}}})}(),function(t){window.psLib.module("Filter.gaussBlur",function(t){return{process:function(t,r,n){var e,a,i,o,s,h,c,u,f,d,l=t.data,v=t.width,p=t.height,g=[],w=0;for(r=Math.floor(r)||3,n=n||r/3,h=1/(Math.sqrt(2*Math.PI)*n),s=-1/(2*n*n),c=0,e=-r;e<=r;e++,c++)o=h*Math.exp(s*e*e),g[c]=o,w+=o;for(c=0,d=g.length;c<d;c++)g[c]/=w;for(a=0;a<p;a++)for(e=0;e<v;e++){for(i=o=s=h=0,w=0,u=-r;u<=r;u++)(f=e+u)>=0&&f<v&&(c=4*(a*v+f),i+=l[c]*g[u+r],o+=l[c+1]*g[u+r],s+=l[c+2]*g[u+r],w+=g[u+r]);c=4*(a*v+e),l[c]=i/w,l[c+1]=o/w,l[c+2]=s/w}for(e=0;e<v;e++)for(a=0;a<p;a++){for(i=o=s=h=0,w=0,u=-r;u<=r;u++)(f=a+u)>=0&&f<p&&(c=4*(f*v+e),i+=l[c]*g[u+r],o+=l[c+1]*g[u+r],s+=l[c+2]*g[u+r],w+=g[u+r]);c=4*(a*v+e),l[c]=i/w,l[c+1]=o/w,l[c+2]=s/w}return t.data=l,t}}})}(),function(t){window.psLib.module("Filter.ImageEnhance",function(t){return{process:function(t,r,n){for(var e=(arg,t.data),a=(t.width,t.height,0),i=e.length;a<i;a+=4);return t.data=e,t}}})}(),function(t){window.psLib.module("Filter.borderline",function(t){return{process:function(r,n){var e=[0,1,0,1,-4,1,0,1,0];return t.lib.dorsyMath.applyMatrix(r,e,250)}}})}(),function(t){window.psLib.module("Filter.mosaic",function(t){return{process:function(t,r){for(var n=parseInt(r[0])||3,e=t.data,a=t.width,i=t.height,o=2*n+1,s=0,h=parseInt(a/o);s<h;s++)for(var c=0,u=parseInt(i/o);c<u;c++){for(var f=[],d=[0,0,0],l=0;l<o;l++)for(var v=0;v<o;v++){var p=(c*o+l)*a+s*o+v;d[0]+=e[4*p],d[1]+=e[4*p+1],d[2]+=e[4*p+2]}f[0]=d[0]/(o*o),f[1]=d[1]/(o*o),f[2]=d[2]/(o*o);for(var l=0;l<o;l++)for(var v=0;v<o;v++){var p=(c*o+l)*a+s*o+v;e[4*p]=f[0],e[4*p+1]=f[1],e[4*p+2]=f[2]}}return t}}})}(),function(t){window.psLib.module("Filter.noise",function(t){return{process:function(t,r){for(var n=parseInt(r[0])||100,e=t.data,a=t.width,i=t.height,o=0;o<a;o++)for(var s=0;s<i;s++)for(var h=s*a+o,c=0;c<3;c++){var u=parseInt(Math.random()*n*2)-n;e[4*h+c]+=u}return t}}})}(),function(t){window.psLib.module("Filter.oilPainting",function(t){return{process:function(t,r){for(var n=parseInt(r[0])||16,e=t.data,a=t.width,i=t.height,o=0;o<a;o++)for(var s=0;s<i;s++){for(var h=s*a+o,c=0,u=0;u<3;u++)c+=e[4*h+u];c/=3;for(var f=parseInt(c/n)*n,d=0;d<3;d++)e[4*h+d]=f}return t}}})}(),function(t){window.psLib.module("Filter.posterize",function(t){return{process:function(r,n){var e=t.lib.dorsyMath,a=(r.data,r.width),i=r.height,o=n[0]||20;o=o<1?1:o>255?255:o;for(var s=Math.floor(255/o),h=0;h<a;h++)for(var c=0;c<i;c++)e.xyCal(r,h,c,function(t,r,n){return[Math.floor(t/s)*s,Math.floor(r/s)*s,Math.floor(n/s)*s]});return r}}})}(),function(t){window.psLib.module("Filter.sepia",function(t){return{process:function(r){for(var n=t.lib.dorsyMath,e=(r.data,r.width),a=r.height,i=0;i<e;i++)for(var o=0;o<a;o++)n.xyCal(r,i,o,function(t,r,n){return[.393*t+.769*r+.189*n,.349*t+.686*r+.168*n,.272*t+.534*r+.131*n]});return r}}})}(),function(t){window.psLib.module("Filter.sharp",function(t){return{process:function(t,r){for(var n=r[0]||.6,e=t.data,a=t.width,i=(t.height,0),o=e.length;i<o;i+=4){var s=i/4,h=parseInt(s/a),c=s%a;if(0!=h&&0!=c)for(var u=4*((h-1)*a+(c-1)),f=4*((h-1)*a+c),d=4*(s-1),l=0;l<3;l++){var v=e[i+l]-(e[f+l]+e[d+l]+e[u+l])/3;e[i+l]+=v*n}}return t}}})}(),function(t){window.psLib.module("Filter.toGray",function(t){return{process:function(t){for(var r=t.data,n=0,e=r.length;n<e;n+=4){var a=parseInt(.299*r[n]+.578*r[n+1]+.114*r[n+2]);r[n+2]=r[n+1]=r[n]=a}return t.data=r,t}}})}(),function(t){window.psLib.module("Filter.toReverse",function(t){return{process:function(t){for(var r=t.data,n=0,e=r.length;n<e;n+=4)r[n]=255-r[n],r[n+1]=255-r[n+1],r[n+2]=255-r[n+2];return t.data=r,t}}})}(),function(t){window.psLib.module("Filter.toThresh",function(t){return{process:function(r,n){r=t.reflect("toGray",r);var e=r.data;n=n[0]||128;for(var a=0,i=e.length;a<i;a++)(a+1)%4&&(e[a]=e[a]>n?255:0);return r.data=e,r}}})}()},19:function(t,r){t.exports="data:image/png;base64,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"},39:function(t,r,n){function e(t){n(136)}var a=n(0)(n(74),n(174),e,null,null);t.exports=a.exports},67:function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n(1),a=n(39),i=n.n(a),o=n(11),s=n.n(o);e.default.config.productionTip=!1,window.vConsole=new s.a,new e.default({el:"#app",template:"<App/>",components:{App:i.a}})},74:function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n(19),a=n.n(e),i=n(176);n.n(i);r.default={name:"app",data:function(){return{testImgURL:a.a}},mounted:function(){var t=this.$refs.demo;t.loadOnce(function(){window.$AI(t).ps("素描").replace(t)})},components:{},methods:{}}}},[67]);