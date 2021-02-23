window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();
    const slides = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.slider__arrow_left'),
        next = document.querySelector('.slider__arrow_right'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.slider__wrapper'),
        slidesField = document.querySelector('.slider__inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    const tabs = document.querySelectorAll('.catolog__tab'),
        tabItems = document.querySelectorAll('.catolog__item'),
        run = document.querySelectorAll('.run'),
        tri = document.querySelectorAll('.tri');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (!tab.classList.contains('catolog__tab_active')) {
                tab.classList.add('catolog__tab_active');
                for (i = 0; i < tabs.length; i++) {
                    if (tabs[i] != tab) {
                        tabs[i].classList.remove('catolog__tab_active');
                    };
                };
                if (tabs[0] === tab) {
                    tabItems.forEach(item => {
                        item.style.display = 'block';
                    });
                };
                if (tabs[1] === tab) {
                    tabItems.forEach(item => {
                        if (!item.classList.contains('run')) {
                            item.style.display = 'none';
                        }
                        if (item.classList.contains('run')) {
                            item.style.display = 'block';
                        }
                    });
                };
                if (tabs[2] === tab) {
                    tabItems.forEach(item => {
                        if (!item.classList.contains('tri')) {
                            item.style.display = 'none';
                        }
                        if (item.classList.contains('tri')) {
                            item.style.display = 'block';
                        }
                    });
                };
            }
        });
    });

    const linkMain = document.querySelectorAll('.catolog__link_main'),
        linkAdd = document.querySelectorAll('.catolog__link_add'),
        mainCat = document.querySelectorAll('.catolog__main'),
        addCat = document.querySelectorAll('.catolog__add');

    linkMain.forEach(main => {
        main.addEventListener('click', () => {
            for (i = 0; i <= linkMain.length; i++) {
                if (linkMain[i] === main) {
                    mainCat[i].classList.remove('active');
                    addCat[i].classList.add('active');
                };
            };
        });
    });

    linkAdd.forEach(add => {
        add.addEventListener('click', () => {
            for (i = 0; i <= linkAdd.length; i++) {
                if (linkAdd[i] === add) {
                    addCat[i].classList.remove('active');
                    mainCat[i].classList.add('active');
                };
            };
        });
    });

    const modalBtns = document.querySelectorAll('.modal_btn'),
        modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.close');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.style.display = 'block';
            modal.style.display = 'block';
            window.onscroll = function () {
                window.scrollTo(0, 0);
            }
        });
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        window.onscroll = function () {
            return;
        }
    });

    function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }

    const scrollLink = document.querySelector('#link'),
        scrollTarget = document.querySelector('#catl');

    function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    }

    function smoothScroll(eID) {
        let startY = currentYPosition();
        let stopY = elmYPosition(eID);
        let distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        let speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        let step = Math.round(distance / 25);
        let leapY = stopY > startY ? startY + step : startY - step;
        let timer = 0;
        if (stopY > startY) {
            for (let i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (let i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }
    }

    scrollLink.addEventListener('click', () => smoothScroll('catl'));
});