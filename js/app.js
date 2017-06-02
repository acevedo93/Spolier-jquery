// hide spoiler and reveal thew trough user interaction


//1.hide spoiler
  $('.spoiler span').hide();
var $button = $('<button>reveal spoiler</button>');
 var $escondeBoton = $('<button>Esconde el Spoiler</button>');

 function spoiler(){

$('.spoiler').append($button);
 $($button).on('click',function(){
   $(this).hide();
   $('.spoiler span').show();
   $('.spoiler').append($escondeBoton);

 });

 $($escondeBoton).on('click',function(){
   $('.spoiler span').hide();
   $(this).hide();
   $($button).show();

  });


};

spoiler();
