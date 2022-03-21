$(function(){
  $(window).scroll(function(){
    $(".myprogressBar:not(.fire)").each(function(){
      //eachで同一クラスmyprogressBarをそれぞれ取得
      var position = $(this).offset().top;
      //それぞれ要素の位置を取得
      var scroll = $(window).scrollTop();
      //スクロール値を取得
      var windowHeight = $(window).height();
      //画面サイズの高さを取得

        var element = $(this);
      //barの長さに反映するために用意
        var prorate = $(this).next();
      //指定要素の2番目の要素<div class="prorate"></div>をnext()で指定。
        var value = prorate.data("value");
      //barの値を取得
        var width = 1;
      //初期値を1に設定

      if(scroll > position - windowHeight){
      //可視領域設定。※高さを変えたい場合はwindowHeightの後ろを調整。+ 100 にすると画面下から100pxの高さで表示設定できる。
        var identity = setInterval(scene, 50);
      //setIntervalで関数を制御。バーの動きを遅くしたい場合は第２引数の数字を増やす。
        function scene() {
          if (width >= value) {
            clearInterval(identity);
          //value値まで数字が到達すればintervalをストップ。
          } else {
            $(element).addClass( 'fire' );
            //それぞれの要素にfireクラスを付与。「一度だけ」行う関数の制御にはaddClassが有効。
            width++;
            element.width(width + '%');
            //barの長さ。value値の分だけ伸びる設定
            prorate.html(width * 1  + '%');
            //value値のカウント※html()でindex.htmlのテキスト「1%」を上書き)
          }
        }
      }
    })
  })
})