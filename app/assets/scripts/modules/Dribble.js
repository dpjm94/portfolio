class Dribble {
    constructor(){

        var accessToken = '270dd2d4bcd992f5c12b227ddaf5346800441f923960dff1fd003d562af3c63b';

        // Call Dribble v2 API
        $.ajax({
            url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
            dataType: 'json',
            type: 'GET',
            success: function(data) {  
              if (data.length > 0) { 
                $.each(data.reverse(), function(i, val) {                
                  $('#shots').prepend(
                    '<div class="row__medium-6 row__large-2 row__large3-4">'+
                    '<div class="item">'+
                    '<img class="item__image" src="'+ val.images.hidpi +'">'+
                    '<div class="item__overlay">'+
                    '<h2 class="item__title">' + val.title + '</h2>'+
                    '</div></div></div>'
                    )

                  $('.lightbox').prepend(
                    '<div class="lightbox__content">'+
                    '<div class="lightbox__close">X</div>'+
                    '<img src="'+ val.images.hidpi +'" class="lightbox__img" alt="img">'+
                    '<div class="lightbox__caption">'+
                    '<p class="lightbox__title">' + val.title + '</p>'+
                    '<a target="_blank" href="'+ val.html_url +'" title="' + val.title + '" class="lightbox__view">view on Dribbble</a>'+
                    '</div></div>'
                  )
                })
              }
              else {
                $('#shots').append('<p>No shots yet!</p>');
              }
            }
        });

    }
}

export default Dribble;
