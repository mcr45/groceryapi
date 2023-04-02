

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);

/* ---------------------------------------------------------------------- */

document.querySelector('#cercami').addEventListener('click', getFetch)
//4e35b7b843f549b4b8ba014950f4dbc7 apiKey
// per usarew apikey url = alla fine ?apiKey=4e35b7b843f549b4b8ba014950f4dbc7
//https://api.spoonacular.com/food/products/search?query=${choice}&number=7&apiKey=4e35b7b843f549b4b8ba014950f4dbc7
function getFetch(){
  const choice = document.querySelector('#groce').value
  //console.log(choice)
  const url = `https://api.spoonacular.com/food/products/search?apiKey=4e35b7b843f549b4b8ba014950f4dbc7&query=${choice}`
  //let url = 'https://api.spoonacular.com/food/products/search?query=pizza&number=7&apiKey=4e35b7b843f549b4b8ba014950f4dbc7' 
  let arr
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        arr=data.products
        arr.forEach((e,i) => {
        document.querySelector(`#img-${i}`).src=e.image
        document.querySelector(`.portamivia-${i} > h2`).innerHTML=e.title
        document.querySelector(`.portamivia-${i}`).id=e.id
        //posso mettere link alla pagina tipo generichtml parentesi id
        //aggiungo event listener che setta localstorstorage variable che usero in generichtml o wathever
        document.querySelector(`.portamivia-${i}`).addEventListener('click',getDetail)

          
        });
        
      })
      .catch(err => {
          console.log(`error `)
      });
}

 function getDetail(event){
/* localStorage.clear() */	
let ins=event.target.id
let urs=`https://api.spoonacular.com/food/products/${ins}` + '?apiKey=4e35b7b843f549b4b8ba014950f4dbc7'
console.log(urs)
let b = ins.toString()
sessionStorage.setItem(`link`,b)
console.log(sessionStorage.getItem('link'))




} 