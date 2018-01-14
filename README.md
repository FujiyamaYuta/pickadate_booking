## pickadate.jsのdatepickerとtimepickerを使って予約フォームを作る
前回datepickerのライブラリ**pickadate.js**を紹介しました。
[UIのイケているdatepickerライブラリpickadate.jsが最高だった（demo有）](https://qiita.com/Yuta_Fujiwara/items/e80fb931af623bd8e73e)

pickadate.jsのライブラリを使えば格好いいカレンダー(datepicker)と合わせて、時間選択(timepicker)のライブラリもあるので、日付と時間を指定する予約フォームなどの実装に使えたりします。

僕は勤怠管理のアプリケーションを作り、カレンダーで選択した時間の出勤時間と退勤時間を編集する機能でpickadate.jsのライブラリを使わせてもらっています...:bow_tone2:


## pickadate.jsの概要

### オフィシャルページ
[pickadate.js](http://amsul.ca/pickadate.js/)
### pickadate.jsリファレンス
[datepickerリファレンス](http://amsul.ca/pickadate.js/date/)
[timepickerリファレンス](http://amsul.ca/pickadate.js/time/)

使い方・概要は以下の記事にまとめてあります。
[UIのイケているdatepickerライブラリpickadate.jsが最高だった（demo有）](https://qiita.com/Yuta_Fujiwara/items/e80fb931af623bd8e73e)

オフィシャルページよりファイルをインストールして、以下のファイルを読み込みます。
![予約.jpg](https://qiita-image-store.s3.amazonaws.com/0/147291/04bba0c2-64c1-a139-f827-50d983e65cfb.jpeg)

【datepickerイメージ】
<img width="865" alt="スクリーンショット 2018-01-14 11.42.22.png" src="https://qiita-image-store.s3.amazonaws.com/0/147291/85b98d9b-1b43-eb24-97aa-898118f56d8d.png">

【timepickerイメージ】
<img width="1036" alt="スクリーンショット 2018-01-14 11.41.34.png" src="https://qiita-image-store.s3.amazonaws.com/0/147291/c5a6c966-de85-2c94-7134-0d1d8c0b584a.png">


## pickadate.jsを使った予約ページのデモ
【OK】
![予約_OK.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/8b63f182-4994-96ab-952e-cf2ca43f657b.gif)

【NG】
![予約_NG.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/83d27cc8-37bb-4ec7-ed76-b62df0ba2403.gif)

``` HTML:index.html 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>pickadate.js demo</title>
 
<!-- 最新 -->
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/default.css">
<link rel="stylesheet" href="assets/css/default.date.css">
<link rel="stylesheet" href="assets/css/default.time.css">
<!-- クラクシック版 -->
<!-- <link rel="stylesheet" href="assets/css/classic.css">
<link rel="stylesheet" href="assets/css/classic.date.css">
<link rel="stylesheet" href="assets/css/classic.time.css"> -->
 
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<script src="assets/pickadate/picker.js"></script>
<script src="assets/pickadate/picker.date.js"></script>
<script src="assets/pickadate/picker.time.js"></script>
<script src="assets/pickadate/legacy.js"></script>
<script src="assets/pickadate/lang-ja.js"></script>  <!-- 日本語化 -->
<script src="assets/js/main.js"></script>
 
</head>
<body>
  <section class="section">
    <div class="section__block section__block--scoped">
      <h3>pickadate.js 予約ページdemo</h3>                  
      <fieldset class="fieldset fieldset--demo">
        <div class="fieldset__wrapper">
          <label> ■予約日　 </label></br>              
          <input id='date' class="fieldset__input js__datepicker" type="text" placeholder="Try me&hellip;"></br></br>
          <label> ■予約時間　</label></br>            
          <input id='time' class="fieldset__input js__datepicker" type="text" placeholder="Try me&hellip;"></br></br>
          <button id="submit" class="fieldset__button button button--small">予約</button>
        </div>    
        <div id="result"></div>      <!-- ボタン押下の結果を表示する -->   
      </fieldset>
    </div>
  </section>
</body>
</html>

```

``` javascript:main.js
$(function() {
    
    // datepicker表示イベント
    $('#date').pickadate();

    // timepicker表示イベント
    $('#time').pickatime({
        format: 'HH:i', // 24時間表記
        interval: 30,   // 表示間隔
        min: [10,00],   // 予約開始時間
        max: [20,00]    // 予約終了時間 
    });

    // 予約ボタン押下イベント
    $('#submit').click(onClickSubmit);

    //予約ボタン押下処理
    function onClickSubmit(){
        $('#submit_result').remove();
        var date = $('#date').val();
        var time = $('#time').val();
        
        if(date!='' && time !=''){

            // TODO 予約をサーバに送信
            // params={};
            // prams.date=date;
            // params.time=time;
            // $.post("hoge.php",params,function(data){
                // ここにサーバ送信後の処理結果を書く
            // });

            //予約完了メッセージ
            $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p><strong>'+date+time+'〜</strong><br>予約受け付けました。</p></div>');            

        }else{
            //予約失敗メッセージ
            $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>予約日・予約時間を選択してください。</p></div>');            
        }
    }

});

```




## デモページ & Github
### デモページ
http://tech-portfolio.org/demo/pickadate

### Github
https://github.com/FujiyamaYuta/pickadate_booking
