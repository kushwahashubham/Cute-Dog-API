(function(){
  'use strict';

   $(document).ready(function(){

      $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        
        console.log(data);

        const dogUrl = data.message;

        $('#dogDisplayImage').attr('src', dogUrl);

      });
    })    
    
     $(document).ready(function(){

      $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        
        console.log(data);

        const dogUrl = data.message;

        $('#dogDisplayImage1').attr('src', dogUrl);

      });
    })
    
     $(document).ready(function(){

      $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        
        console.log(data);

        const dogUrl = data.message;

        $('#dogDisplayImage2').attr('src', dogUrl);

      });
    })
    
  $(document).ready(function(){

    $('#getDogButton').click(function(){
      $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        
        console.log(data);

        const dogUrl = data.message;

        $('#dogDisplayImage').attr('src', dogUrl);

      });
    });


  })
    
    
  $(document).ready(function(){

    $('#getDogButton').click(function(){
      $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        
        console.log(data);

        const dogUrl = data.message;

        $('#dogDisplayImage1').attr('src', dogUrl);

      });
    });


  })

    
    
  $(document).ready(function(){

    $('#getDogButton').click(function(){
      $.get("https://dog.ceo/api/breeds/image/random", function (data) {
        
        console.log(data);

        const dogUrl = data.message;

        $('#dogDisplayImage2').attr('src', dogUrl);

      });
    });


  })    
})();
