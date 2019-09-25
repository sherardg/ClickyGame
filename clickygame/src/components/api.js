var marvel = {
  render: function(){
    var url ="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2158c896b1921d6cbe6798a758695bce&hash=912f844dc5c44bb2cb2aadaec894d4f3";
    var message = document.getElementById ("message");

    $ajax({
      url: url,
      type: "GET",
      beforeSend: function() {
        message.innerHTML = "Loading...";
      },
      complete: function() {
          message:innerHTML = "Images loaded! Let's Play"
      }

    });
    console.log(url);
  }

};

  
    // var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
    // $.getJSON( marvelAPI, {
    //     apikey: '2158c896b1921d6cbe6798a758695bce'
    // // //   })
    // //     .done(function( response ) {
    // //       var results = response.data.results;
    // //       var resultsLen = results.length;
    // //       var output = '<ul>'; 
          
    // //       for(var i=0; i<resultsLen; i++){
    // //         if(results[i].images.length > 0) {
    // //           var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
    // //           output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
    // //         }
    // //       }  
    // //       output += '</ul>'
    // //       $('#results').append(output);
    //   });
       
    // });

   marvel.render(); 