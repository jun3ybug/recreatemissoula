$(document).ready(function(){
	$('#activity').change(function(){
		if ($('#activity').val() == 'flyfish') {
				$('.activitygroup .help-block').text('Fly fishing is perfect in early spring and summer.');
			} else if ($('#activity').val() == 'hangglide') 
			{
				$('.activitygroup .help-block').text('Hang Gliding weather is optimal in the summer and early fall.');
			} else if ($('#activity').val() == 'hiking') 
			{
				$('.activitygroup .help-block').text('Hiking is all year round. Snow shoes required in the winter.');
			} else {
				$('.activitygroup .help-block').text('Mountain Biking is perfect in the Spring, Summer and Fall.');
			}

	}); //end change

	$('#name').focusout(function(){
		if($('#name').val().length == 0) {
			$('.name .help-block').text('Please enter your name.');
			$('.name').attr({
				class: 'form-group name has-error'
			}); // end attr
		} else {
			$('.name .help-block').text('');
			$('.name').attr({
				class: 'form-group name'
			}); //end attr
		}
	}); //end focus out

	$('#email').focusout(function(){
		if($('#email').val().length == 0) {
			$('.email .help-block').text('Please enter your email address.');
			$('.email').attr({
				class: 'form-group email has-error'
			}); // end attr
		} else {
			$('.email .help-block').text('');
			$('.email').attr({
				class: 'form-group email'
			}); //end attr
		}
	}); //end focus out

	$(document).ready(function(){
      $(".flyfish").hover(function() {
        $(this).attr("src","images/flyfishing2.jpg");
          }, function() {
        $(this).attr("src","images/flyfishing.jpg");
      });
      $(".hangglide").hover(function() {
        $(this).attr("src","images/hanggliding2.jpg");
          }, function() {
        $(this).attr("src","images/hangglide.jpg");
      });
      $(".hike").hover(function() {
        $(this).attr("src","images/hiking2.jpg");
          }, function() {
        $(this).attr("src","images/hiking.jpg");
      });
    });

    $('#jumbotron-btn').click(function(){
    	$('.jumbotron p').prepend('<p style="color:#5cb85c;">Nice work!!! Click on the button below to complete the process. Make sure to select which activity you would like to try. And leave me a message for any additional request(s) you may have.</p>'); 
    	$('#jumbotron-btn').replaceWith('<button type="button" class="btn btn-success btn-lg"><a href="contact.html" style="color:#fff; text-decoration: none;">Well done! Complete the process.</a></button>');
    }); //end jumbotron click

    $('#hike4-btn-off').click(function(){
    $('#hike4').hide(1000);
    }); //end hike4-off

    $('#hike4-btn-on').click(function(){
    	$('#hike4').show(1000);
    }); //end hike4-on

    $('#hike5-btn-off').click(function(){
    $('#hike5').hide(1000);
    }); //end hike4-off

    $('#hike5-btn-on').click(function(){
    	$('#hike5').show(1000);
    }); //end hike4-on

    console.log("Document loaded!");
    $('ul.flies li:even').css({
      color: "#3A9B97",
      backgroundColor: "#eeeeee",
      padding: "3px 8px"
    }); 
    $('ul.flies li:odd').css({
      color: "#eeeeee",
      backgroundColor: "#3A9B97",
      padding: "3px 8px"
    }); //end filter fly fish

    console.log("Document loaded!");
    $('ul.race li:odd').css({
      color: "#3A9B97",
      backgroundColor: "#eeeeee",
      padding: "3px 8px"
    }); 
    $('ul.race li:even').css({
      color: "#eeeeee",
      backgroundColor: "#3A9B97",
      padding: "3px 8px"
    }); //end filter race

    $('#calendar-btn').click(function(){
	console.log('All races have been added to your calendar!');
	alert('All races have been added to your calendar!');
	}); //end apple click


}); //end ready







