$(function(){
    var audio=document.getElementsByTagName('audio')[0];
    
    // 音乐开关
    $('.music').click(function(){
        if(audio.paused){
            audio.play();
            $(this).attr('class','music muc')
        }else{
            audio.pause();
            $(this).attr('class','music')
        }
        
    });

    // 点击无限alert
    var btn=$('.page3 button');
    btn.click(function(){
        for(var i=5;i>=0;i--){
            if(i<=1){
                i=5;
                alert("骗你的嘿嘿嘿");
            };
            alert("还剩"+(i-1)+"下");
        }
       
    });
})

    