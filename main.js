/*
	Content Script 在一個很特殊的環境下執行，他可以存取當前頁面的 Dom 物件但是又不能存取當前頁面額外的 JavaScript 變數、函數
*/

$(document).ready(function(e){
	// 驗證 JQuery
	console.log('JQuery is Finished!',$);

	// 如果你想寫翻譯外掛，相信這個會對你有用的！
	//document.addEventListener('mouseup',function(e){
	$('body').mouseup(function(e){
		// 設定好Ref
		var me=e;
		
		// 得到目前框選文字的 Handle
		var selectText=window.getSelection().toString();

		// 移除當前頁面上的翻譯視窗
		$('div.popInfoBox').remove();

		// 要選到有文字才執行
		if(selectText.trim().length>0){

			// 可以用此方法做出網路辭典
			var infobox=$('<div></div>').css({
				position:'absolute',
				left:me.pageX,
				top:me.pageY,
				backgroundColor:'silver',
				borderRadius:10,
				padding:5,
				width:300
			}).addClass('popInfoBox');
			infobox.text(window.getSelection().toString());

			// 進入場景
			$('body').append(infobox);
		}

		// 開發除錯
		// debugger;
	});
});