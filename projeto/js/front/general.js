$(document).ready(function() {

    //alert('LOAD GENERAL');

    //Menu e Submenus
    var menuItem = $('.menu ul li');
    var menuToggle = $('.menu_toggle');
    var submenuToggle = $('.submenu_toggle');
    var menu = $('.menu');
    var btnSearch = $('.search_btn');
    var searchBox = $('#search_btn');
    var searchClose = 1;
    var menuClose = 1;
    var searchesTerm = $('#SearchsTerm');

    btnSearch.click(function() {

        searchBox.toggle();

        var src = $(this).find('img').attr('src');

        if(searchClose) {
            $(this).find('img').attr('src', src.replace('btn_search', 'btn_close_search'));
            searchesTerm.focus();
            searchClose = 0;
        } else {
            $(this).find('img').attr('src', src.replace('btn_close_search', 'btn_search'));
            searchClose = 1;
        }

        if($(window).width() < 768) {
            if(!menuClose) {
                menu.hide();
                menuClose = 1; 
            } else  {
                menuClose = 0;
            }
        }
    });

    menuItem.mouseover(function() {
        if($(window).width() > 768) {
            $(this).find('ul').show();
            $(this).find('.sub_container').show();
        }
    });

    menuItem.mouseleave(function() {
		if($(window).width() > 768) {
			$(this).find('ul').hide();
			$(this).find('.sub_container').hide();
		}
	});
	
	menuToggle.click(function() {
		
		menu.toggle();
		
		if (menuClose) {
			menuClose = 0;
		} else {
			menuClose = 1;
		}
		
		if (!searchClose) {
			var src = btnSearch.find('img').attr('src');
			btnSearch.find('img').attr('src', src.replace('btn_close_search', 'btn_search'));
			searchClose = 1;
			searchBox.hide();
		}
		
	});
	
	submenuToggle.click(function() {
		$(this).parent().find('.sub_container').toggle();
	});
	
	//Inicialização das galerias
	var gallery = $('.gallery');
	if (gallery.length > 0) {
		Galleria.loadTheme(full_url+'js/vendor/themes/twelve/galleria.twelve.min.js');
		Galleria.run('.gallery');
		Galleria.configure({
			imageCrop: false
		});
	}
});