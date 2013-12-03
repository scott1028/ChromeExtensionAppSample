/*
	Content Script 在一個很特殊的環境下執行，他可以存取當前頁面的 Dom 物件但是又不能存取當前頁面額外的 JavaScript 變數、函數
*/

// 如果你想寫翻譯外掛，相信這個會對你有用的！
document.addEventListener('mouseup',function(e){
	console.log( window.getSelection().toString() );

	// 似乎不用偵測 JQuery 是否準備好
	var thisPageAsText=$(document).find('body').text();
	console.log(thisPageAsText);
});