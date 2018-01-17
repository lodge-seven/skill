
// 计算根标签必须放在头部中，不然在Edge中会乱掉哦
// 根标签的dom对象
var html = document.querySelector('html');
changeRem();
window.addEventListener('resize',changeRem);

// 视窗可视宽
function changeRem() {
    var width = html.getBoundingClientRect().width;
    // 根标签html的字体大小为视口宽度1/10，即无论宽度如何变化，1rem总是宽度的1/10
    /* 
        当视口为640时，宽度为640像素，此时rem值64像素
        a 例子：
            相对与640屏幕宽30像素，在720屏幕下是33.75像素。
            其比例为0.046875，720屏幕rem值为72，则10rem*0.046875 = 0.46875rem
        b 设置其rem为宽度1/10，比例优化的计算：
            当前的参照物为64，30为对照对象，那么30/64 * y/10 = 30/64 * 1rem = 30rem/64rem = 0.46875rem = 0.046875y
    */
    if(width < 700) 
    html.style.fontSize = '70px';
    else if(width > 1710)
    html.style.fontSize = '171px';
    else
    html.style.fontSize = width/10 + 'px';
}

// 窗口缩小