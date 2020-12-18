function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

$(document).ready(function(){
	  	/*Инициализируем слайдер с отзывами*/
	  		$('.feedback-slider').slick({
	    	infinite: true,
	  			slidesToShow: 2,
	  			slidesToScroll: 1,
	  			responsive: [
	  			     
	  			    {
	  			      breakpoint: 1024,
	  			      settings: {
	  			        slidesToShow: 1,
	  			        prevArrow: '<button class="prev arrow"></button>',
	  			        nextArrow: '<button class="next arrow"></button>',
	  			        slidesToScroll: 1
	  			      }
	  			    }	  			    
	  			  ]
	  		});

	  			/*Инициализируем слайдер Work*/
	  				$('.work-slider').slick({
	  		  	infinite: true,
	  					slidesToShow: 4,
	  					slidesToScroll: 1,
	  					responsive: [
	  					     
	  					    {
	  					      breakpoint: 850,
	  					      settings: {
	  					        slidesToShow: 3,
	  					        prevArrow: '<button class="prev arrow"></button>',
	  					        nextArrow: '<button class="next arrow"></button>',
	  					        slidesToScroll: 1
	  					      }
	  					    },

	  					    {
	  					      breakpoint: 600,
	  					      settings: {
	  					        slidesToShow: 2,
	  					        prevArrow: '<button class="prev arrow"></button>',
	  					        nextArrow: '<button class="next arrow"></button>',
	  					        slidesToScroll: 2
	  					      }
	  					    },

	  					    {
	  					      breakpoint: 450,
	  					      settings: {
	  					        slidesToShow: 1,
	  					        prevArrow: '<button class="prev arrow"></button>',
	  					        nextArrow: '<button class="next arrow"></button>',
	  					        slidesToScroll: 1
	  					      }
	  					    }
	  					  ]
	  				});

	  					/*Инициализируем слайдер Travel*/
	  						$('.travel-slider').slick({
	  				  	infinite: true,
	  							slidesToShow: 5,
	  							slidesToScroll: 1,
	  							responsive: [
	  							     
	  							    {
	  							      breakpoint: 950,
	  							      settings: {
	  							        slidesToShow: 4,
	  							        prevArrow: '<button class="prev arrow"></button>',
	  							        nextArrow: '<button class="next arrow"></button>',
	  							        slidesToScroll: 1
	  							      }
	  							    },

	  							    {
	  							      breakpoint: 800,
	  							      settings: {
	  							        slidesToShow: 3,
	  							        prevArrow: '<button class="prev arrow"></button>',
	  							        nextArrow: '<button class="next arrow"></button>',
	  							        slidesToScroll: 3
	  							      }
	  							    },

	  							    {
	  							      breakpoint: 600,
	  							      settings: {
	  							        slidesToShow: 2,
	  							        prevArrow: '<button class="prev arrow"></button>',
	  							        nextArrow: '<button class="next arrow"></button>',
	  							        slidesToScroll: 2
	  							      }
	  							    },

	  							    {
	  							      breakpoint: 420,
	  							      settings: {
	  							        slidesToShow: 1,
	  							        prevArrow: '<button class="prev arrow"></button>',
	  							        nextArrow: '<button class="next arrow"></button>',
	  							        slidesToScroll: 1
	  							      }
	  							    }
	  							  ]
	  						});

				});