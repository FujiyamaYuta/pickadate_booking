## datepickerって何がいい？？

昨年末からWebアプリケーションを作成していて、dateapickerの機能が必要になり、どのライブラリを使おうかと、色々と調べていたところ、pickadate.jsのdatepickerが最高だったので、概要と簡単な使い方を共有したいと思います。

### datepickerライブラリのまとめ
[結局、どのdatepickerが一番使い勝手がよいのか]
(https://qiita.com/knt45/items/6d74f6785cd4547ae53b) - @knt45 さん
※参考にさせてもらいました:bow_tone2: 

## pickadate.jsの概要
<img width="926" alt="スクリーンショット 2018-01-12 7.53.16.png" src="https://qiita-image-store.s3.amazonaws.com/0/147291/e69f75d7-644a-d52d-1423-d2118c399463.png">
【実装できるdatepicker】
<img width="848" alt="スクリーンショット 2018-01-12 7.53.03.png" src="https://qiita-image-store.s3.amazonaws.com/0/147291/39ff180e-958e-1a33-30ad-c0e0c7f4801f.png">

### インストール
[pickadate.js](http://amsul.ca/pickadate.js/)

インストールを実行すると以下のファイル群がインストールされ、その中から以下のjsファイルと、cssファイルを読み込ませます。
![スクリーンショット-2018-01-12-8.03.09.jpg](https://qiita-image-store.s3.amazonaws.com/0/147291/7a51a16e-96ea-cbb9-e89e-88f03d1adf0e.jpeg)


## pickadate.jsデモ
### デフォルトdatepickerデモ
![ezgif-4-cd54cb2f48.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/9198111b-0c6f-8b75-a4d0-9a4be9b7af46.gif)

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
<!-- クラクシック版 -->
<!-- <link rel="stylesheet" href="assets/css/classic.css">
<link rel="stylesheet" href="assets/css/classic.date.css"> -->
 
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<script src="assets/pickadate/picker.js"></script>
<script src="assets/pickadate/picker.date.js"></script>
<script src="assets/pickadate/legacy.js"></script>
<script src="assets/pickadate/lang-ja.js"></script>  <!-- 日本語化 -->
<script src="assets/js/main.js"></script>
 
</head>
  <body>
    <section class="section">
      <div class="section__block section__block--scoped">
        <h3>demo</h3>                  
        <fieldset class="fieldset fieldset--demo">
          <div class="fieldset__wrapper">
            <input id="demo" class="fieldset__input js__datepicker" type="text" placeholder="Try me&hellip;">
          </div>
        </fieldset>
      </div>
    </section>
  </body>
</html>
```

``` javascript:main.js
$(function() {
    $('#demo').pickadate();
});
```
### 日本語対応datepicker
![ezgif-4-14c1ef3061.gif](https://qiita-image-store.s3.amazonaws.com/0/147291/ca2513ef-2897-05eb-42a1-f19ad0121770.gif)

日本語化したい方は以下のjsファイルを読み込ませれば、日本語のdatepickerが出力できます。フォーマット等もかなり自分ようにカスタマイズすることができます。

``` javascript:lamg-ja.js
jQuery.extend( jQuery.fn.pickadate.defaults, {
    monthsFull: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    monthsShort: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    weekdaysFull: [ '日曜' , '月曜', '火曜', '水曜', '木曜', '金曜', '土曜'],
    weekdaysShort: [ '日曜' ,  '月曜', '火曜', '水曜', '木曜', '金曜', '土曜'],
    today: '本日',
    clear: 'キャンセル',
    format: 'yyyy年mm月dd日'
});
```

ライブラリの詳しい使い方については、オフィシャルのHPにも記載されているので、参考にしてみください。


## デモページ & Github
### デモペーシ
[http://tech-portfolio.org/demo/pickadate](http://tech-portfolio.org/demo/pickadate)
### Github（ソース）
[https://github.com/FujiyamaYuta/pickadate_demo](https://github.com/FujiyamaYuta/pickadate_demo)


#### 参考
[JQueryプラグインまとめ](https://webkaru.net/jquery-plugin/pickadate-js/)
[【pickadate.js】シンプルだけど高機能な日付カレンダー編](https://dev.classmethod.jp/ria/html5/pickadate-jsdate-picker/)
