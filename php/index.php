<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<!-- ajax -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> ➊

<style>
    body {
      background: #fafafa;
    }

    .playon-instagarm {
      width: 800px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .instagram {
      width: 250px;
      margin-bottom: 30px;
    }

    .instagram-thum {
      width:250px;
      height:250px;
      background-size:cover;
    }
  </style>
</head>
<body>
<div class="playon-instagarm"></div>

<script>
  $(document).ready(function() {
    $.ajax({
      url: "instagram.php",
      success: function (response) {
        var list = '';
        var result = JSON.parse(response);
        $.each(result, function(key, val) {
          /* 
          val.username : 사용자 이름 ➌
          val.link : 인스타그램 게시물 링크 주소 ➌
          val.thum : 썸네일이미지 주소 ➌
          vak.text : 인스타그램 게시물 내용 ➌
          */
          list += '<div class="instagram">'+
          '<div class="instagram-thum" style="background:url('+val.thum+') no-repeat top center;"></div></a>'+
          '</div>';
        });
        $('.playon-instagarm').append(list);
      }
    });
  });
  </script>
</body>
</html>