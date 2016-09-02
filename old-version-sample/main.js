/*
	Content Script 在一個很特殊的環境下執行，他可以存取當前頁面的 Dom 物件但是又不能存取當前頁面額外的 JavaScript 變數、函數
*/

$(document).ready(function(e){
	// 紀錄框選座標
	var mouseDownPos={x:0,y:0};
	var mouseUpPos={x:0,y:0};

	// 顯示 infobox 的 Timer
	var infoBoxShowerTimer;

	// 驗證 JQuery
	console.log('JQuery is Finished!',$);

	// 如果你想寫翻譯外掛，相信這個會對你有用的！
	//document.addEventListener('mouseup',function(e){
	$('body').mouseup(function(e){
		// 設定好Ref
		var me=e;

		// 紀錄座標
		mouseUpPos.x=me.pageX;
		mouseUpPos.y=me.pageY;

		// 移除當前頁面上的翻譯視窗
		$('div.popInfoBox').remove();

		// 清除上次的 Timer 如果你點太快
		clearTimeout(infoBoxShowerTimer);

		// 要等待一下, 不然會發生 Click 事件直接位移
		infoBoxShowerTimer=setTimeout(function(e){
			// 得到目前框選文字的 Handle
			var selectText=window.getSelection().toString();	

			// 要選到有文字才執行
			if(selectText.trim().length>0){
				// 訊息方塊的顯示位置
				var infoboxPos={x:0,y:0};

				// 計算出適當的位置
				if(mouseUpPos.x>mouseDownPos.x){
					infoboxPos.x=mouseDownPos.x;
				}
				else{
					infoboxPos.x=mouseUpPos.x;	
				}

				if(mouseUpPos.y>mouseDownPos.y){
					infoboxPos.y=mouseUpPos.y;
				}
				else{
					infoboxPos.y=mouseDownPos.y;
				}

				// Debug
				console.log('=>');
				console.log('\tmouseDown:',mouseDownPos);
				console.log('\tmouseUp:',mouseUpPos);
				console.log('\tinfoboxSet:',infoboxPos);

				// 可以用此方法做出網路辭典
				var infobox=$('<div></div>').css({
					position:'absolute',
					left:infoboxPos.x,
					top:infoboxPos.y,
					backgroundColor:'silver',
					borderRadius:10,
					padding:10,
					marginTop:24,
					width:300
				}).addClass('popInfoBox');
				infobox.text(window.getSelection().toString()).hide();

				// 進入場景
				$('body').append(infobox);

				infobox.slideDown();
			}
		},150);

		// 開發除錯
		// debugger;
	});

	$('body').mousedown(function(e){
		// 設定好Ref
		var me=e;

		// 紀錄座標
		mouseDownPos.x=me.pageX;
		mouseDownPos.y=me.pageY;

		// 移除當前頁面上的翻譯視窗
		$('div.popInfoBox').remove();
	});
});