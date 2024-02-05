document.querySelector('.hamburger').addEventListener('click', function(){
    var topLine = document.querySelector(".top");
    var midLine = document.querySelector(".middle");
    var botLine = document.querySelector(".bottom");

    topLine.removeAttribute('d');
    midLine.removeAttribute('d');
    botLine.removeAttribute('d');

    topLine.classList.remove('v1', 'v2', 'v3', 'v4', 'v5');
    midLine.classList.remove('v1', 'v2', 'v3', 'v4', 'v5');
    botLine.classList.remove('v1', 'v2', 'v3', 'v4', 'v5');

    void topLine.offsetWidth;
    void midLine.offsetWidth;
    void botLine.offsetWidth;

    topLine.classList.toggle('active');
    midLine.classList.toggle('active');
    botLine.classList.toggle('active');

    var animationVersion = Math.floor(Math.random() * 5) + 1;

    switch(animationVersion){

        case 1:
            topLine.setAttribute('d','m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40');
            midLine.setAttribute('d', 'm 30,50 h 40');
            botLine.setAttribute('d', 'm 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40');
            topLine.classList.toggle('v1');
            midLine.classList.toggle('v1');
            botLine.classList.toggle('v1');
            break;

        case 2:
            topLine.setAttribute('d', 'm 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20');
            midLine.setAttribute('d', 'm 70,50 h -40');
            botLine.setAttribute('d', 'm 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20');
            topLine.classList.toggle('v2');
            midLine.classList.toggle('v2');
            botLine.classList.toggle('v2');
            break;

        case 3:
            topLine.setAttribute('d', 'm 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272');
            midLine.setAttribute('d', 'm 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272');
            botLine.setAttribute('d', 'm 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272');
            topLine.classList.toggle('v3');
            midLine.classList.toggle('v3');
            botLine.classList.toggle('v3');
            break;

        case 4:
            topLine.setAttribute('d', 'm 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013');
            midLine.setAttribute('d', 'm 70,50 h -40');
            botLine.setAttribute('d', 'm 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40');
            topLine.classList.toggle('v4');
            midLine.classList.toggle('v4');
            botLine.classList.toggle('v4');
            break;

        case 5:
            topLine.setAttribute('d', 'm 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20');
            midLine.setAttribute('d', 'm 30,50 h 40');
            botLine.setAttribute('d', 'm 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20');
            topLine.classList.toggle('v5');
            midLine.classList.toggle('v5');
            botLine.classList.toggle('v5');
            break;
    }

    void topLine.offsetWidth;
    void midLine.offsetWidth;
    void botLine.offsetWidth;
});
