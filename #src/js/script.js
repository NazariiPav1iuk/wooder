window.addEventListener('DOMContentLoaded', () => {
	// burger
	const burgerBtn = document.querySelector('.burger_wrapper');
	const burgerNav = document.querySelector('.burger__nav');
	const burgerPopup = document.querySelector('.burger__nav_popup');
	const burgerIcon = document.querySelectorAll('.burger__icon span');

	burgerBtn.addEventListener('click', () => {
		showBurgerMenu();
	});
	// ESC
	document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape'){
            hideBurgerMenu();
        }
    });	

	document.addEventListener('click', (e) => {
		if( e.target.classList.contains('burger__nav_popup')){
			hideBurgerMenu();
		}
	});

	function showBurgerMenu(){
		burgerNav.classList.add('active-burger');
		burgerBtn.classList.add('active-burger');
		burgerPopup.classList.add('active-popup');
		burgerIcon.forEach((el) => {
			el.classList.add('close-icon');
		});
	}

	function hideBurgerMenu(){
		burgerNav.classList.remove('active-burger');
		burgerBtn.classList.remove('active-burger');
		burgerPopup.classList.remove('active-popup');
		burgerIcon.forEach((el) => {
			el.classList.remove('close-icon');
		});
	}
	// smooth scroll
	const anchors = document.querySelectorAll('a[href*="#"]');

    for ( let anchor of anchors){
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = anchor.getAttribute('href');
            document.querySelector('' + blockId ).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
			hideBurgerMenu();
        });
    }

	// lang switcher
	const current = document.querySelector('.switcher__current');
	const langList = document.querySelector('.switcher_inner');
	const langBtn = document.querySelector('.lang__switcher');
	const switcherArrow = document.querySelector('.switcher__icon');
	const langItem = document.querySelectorAll('.switcher__item');

	langBtn.addEventListener('click', () => {
		langList.classList.toggle('switcher_inner-active');
		switcherArrow.classList.toggle('switcher__icon_transform');
		langItem.forEach((el) => {
			el.addEventListener('click', (e) => {
				let target = e.target;
				let lang = target.textContent;
				current.innerHTML = lang;
			});
		});
	});

	// Tabs
	const tabsOverlay = document.querySelectorAll('.videos-item_overlay'),
        tabsContent = document.querySelectorAll('.video-item'),
		tabs = document.querySelectorAll('.videos-item'),
        tabsParent = document.querySelector('.videos-bar');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(item => {
            item.classList.remove('videos-item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('videos-item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains('videos-item_overlay')){
            tabsOverlay.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i); 
					hideVideo();
                }
            });
        }
    });

	// watch button
	const videoBtn = document.querySelectorAll('.video-btn');
	const video = document.querySelectorAll('.video-watch');

	videoBtn.forEach(btn => {
		btn.addEventListener('click', () => {

			video.forEach(item => {
				item.classList.toggle('video-show');
			});
		});
	});

	function showVideo(){
		video.forEach(el => {
			el.classList.add('video-show');
		});	
	}
	
	function hideVideo(){
		video.forEach(el => {
			el.classList.remove('video-show');
		});	
	}

	// sidebar
	const introDot = document.querySelector('.controls__item-1');
	const servDot = document.querySelector('.controls__item-2');
	const videoDot = document.querySelector('.controls__item-3');
	const aboutDot = document.querySelector('.controls__item-4');
	const introSection = document.querySelector('.intro');
	const servicesSection = document.querySelector('.services');
	const videosSection = document.querySelector('.videos');
	const aboutSection = document.querySelector('.about');
	const currentSection = document.querySelector('.sidebar__current');

		introDot.classList.add('controls__item_active');

	document.addEventListener('scroll', () => {
		let curentPos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		let docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

		if (curentPos < introSection.offsetHeight){
			introDot.classList.add('controls__item_active');
			currentSection.innerHTML = '01';
		} else if (curentPos > introSection.offsetHeight) {
			introDot.classList.remove('controls__item_active');
		} else{ 
			introDot.classList.remove('controls__item_active');
		}

		if (curentPos < (videosSection.offsetTop - 2 ) && introSection.offsetHeight < curentPos){
			servDot.classList.add('controls__item_active');
			currentSection.innerHTML = '02';
		} else if (curentPos > (videosSection.offsetTop - 2)) {
			servDot.classList.remove('controls__item_active');
		} else {
			servDot.classList.remove('controls__item_active');
		}

		if (curentPos < (aboutSection.offsetTop - 730) && (videosSection.offsetTop - 2) < curentPos){
			videoDot.classList.add('controls__item_active');
			currentSection.innerHTML = '03';
		} else if (curentPos > (aboutSection.offsetTop - 730)) {
			videoDot.classList.remove('controls__item_active');
		} else {
			videoDot.classList.remove('controls__item_active');
		}

		if ( (docHeight - aboutSection.offsetHeight - 800) < curentPos){
			aboutDot.classList.add('controls__item_active');
			currentSection.innerHTML = '04';
		} else {
			aboutDot.classList.remove('controls__item_active');
		}
	});

	// scroll dots
	const dots = document.querySelectorAll('.controls__item');

	for (let dot of dots){
		dot.addEventListener('click', (e) => {
			e.preventDefault();
			const posID = dot.getAttribute('data-control-to');
			document.querySelector('.' + posID).scrollIntoView({
				behavior: 'smooth',
                block: 'start'
			});
		});
	}

});

