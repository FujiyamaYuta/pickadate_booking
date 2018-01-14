$(function() {
    
    //datepicker表示イベント
    $('#date').pickadate();

    //予約時間表示イベント
    $('#time').pickatime({
        format: 'HH:i', //24時間表記
        interval: 30,   //表示間隔
        min: [10,00],   //
        max: [20,00]
    })

    //予約ボタンバインド
    $('#submit').click(onClickSubmit);

    //予約ボタン押下処理
    function onClickSubmit(){
        $('#submit_result').remove();
        var date = $('#date').val();
        var time = $('#time').val();
        
        if(date!='' && time !=''){
            //予約を送信する
            // $.post("php/workTime/registUserEdit.php",params,function(data){

            // });

            //予約完了メッセージ
            $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p><strong>'+date+time+'〜</strong><br>予約受け付けました。</p></div>');            
            console.log('予約受け付けました');
            console.log(date);
            console.log(time);
        }else{
            $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>予約日・予約時間を選択してください。</p></div>');            
            console.log('予約日・予約時間を選択してください。');
        }
    }

});