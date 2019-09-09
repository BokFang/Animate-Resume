let cssCode = `/*
* Inspired by http://strml.net/

* 大家好，我是方博楷

* 九月了，好多公司都在秋招，我也在准备简历。

* 说做就做！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all 1s;
}
/* 添上一个背景色 */
html {
  background:#2C3E50;color: rgb(222,222,222); ;
}

/* 调节一下文本和边框的距离*/
.code {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}

/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 将代码区旋转一下 */
html{
  perspective:1000px;
}
.code {
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
  transform: rotateY(10deg) translateZ(-100px) ;
}

/* 加上一点阴影 */
.code {
  box-shadow: 0 0 4px 3px rgba(0,0,0,.3);
} 

/* 准备一张白纸进行自我介绍 */
.paper{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
  display:flex;
  justify-content:center;
  align-items:center;
}
`
  let mdCode = `
  # 自我介绍
  我叫方博楷，毕业于广东工业大学，从大二下学期开始自学前端，希望面试前端开发岗位。

# 掌握技能
- 熟悉HTML & CSS & JavaScript
- 熟悉HTTP知识
- 熟练使用Vue
- 掌握Scss Webpack Parcel
- 熟悉Node.js

# 项目介绍
1. Canvas画板
2. 动态简历
3. 原生JS 瀑布流
4. 原生JS轮播图
5. CSS3加载画面

# 联系方式
- 手机 1xxxxxxxx
- 邮箱 1092554430@qq.com
- QQ 1092554430
`

codeWriting(cssCode,()=>{
  whitePaper()
  markdownWriting(mdCode)
})
function codeWriting(cssCode,callback){
  let codeIndex = 0
  let timer = setInterval(()=>{
  codeIndex += 1
  code.innerHTML = Prism.highlight(cssCode.substring(0,codeIndex), Prism.languages.css)
  style.innerHTML = cssCode.substring(0,codeIndex)
  code.scrollTop = code.scrollHeight
  if(codeIndex >= cssCode.length){
    window.clearInterval(timer)
    callback()
  }
},10)
}
function whitePaper(){
  let paper = document.createElement('pre')  
  paper.id = 'paper'
  paper.className = 'paper'
  document.body.appendChild(paper)
} 
function markdownWriting(mdCode,){
  let codeIndex = 0
  let timer2 = setInterval(()=>{
  codeIndex += 1
  paper.innerHTML = mdCode.substring(0,codeIndex)
  paper.scrollTop = paper.scrollHeight
  if(codeIndex >= mdCode.length){
    window.clearInterval(timer2)
  }
},10)
}
