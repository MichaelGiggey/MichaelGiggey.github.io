/*--------------------------------------------Index #0 ------------------------------------
#1 Nav buttons
#2 Light/Dark/Neon/Random buttons
3# Brightness Slider
/*--------------------------------------------Index #0 -------------------------------------
/*------------------------------------------Comments #0 ------------------------------------

// create box shadow overlay for iframe to extend shadows onto iframe , replace iframe
box styles to iframe overlay element styles..
//remove body box shadow from pages js files.

--------------------------------------------Comments #0 ------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    /*-----------------------------------NAV buttons #1 ------------------------------------*/

    // Links Nav buttons to html files and displays them in main iframe box

    // Select Nav buttons
    const buttons = document.querySelectorAll('.nav-buttons');
    // Iterate over each button and attach a click event listener
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the data-src attribute value of the clicked button
            const src = button.getAttribute('data-src');
            // Set the src attribute of the iframe to the value of data-src
            const iframe = document.getElementById('iframe-box');
            iframe.src = src;
            iframe.style.display = 'block'; // Make sure the content is visible
            document.querySelector('.close').style.display = 'block';
            document.getElementById('iframe-controls').style.display = 'flex';
            document.getElementById('iframe-message').style.display = 'none';
        });

    });

    // Close/hide the iframe when the close button is clicked
    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('iframe-box').style.display = 'none';
        document.querySelector('.close').style.display = 'none';
        document.getElementById('iframe-controls').style.display = 'none';
        document.getElementById('iframe-message').style.display = 'none';

    });

    // Make iframe fullscreen
    const iframe = document.getElementById('iframe-box');
    const fullscreenButton = document.getElementById('fullscreen-button');

    fullscreenButton.addEventListener('click', () => {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox 
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera 
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge 
            iframe.msRequestFullscreen();
        }
    });

    /*--------------------------------------------NAV #1 ------------------------------------*/


    /*-------------------------------Light/Dark/Neon/Random #2 --------------------------------*/

    //Change Styles

    function updateStyles(backgroundColor, h1Color, h1TextShadow, iframeBackgroundColor,
        iframeBoxShadow, contentBackground, contentBoxShadow, fullscreenButtonShadow,
        closeButtonShadow, navButtonsBackgroundColor, navButtonsBoxShadow) {

        document.body.style.background = backgroundColor;
        document.querySelector('h1').style.color = h1Color;
        document.querySelector('h1').style.textShadow = h1TextShadow;
        document.getElementById('iframe-box').style.background = iframeBackgroundColor;
        document.getElementById('iframe-box').style.boxShadow = iframeBoxShadow;
        document.getElementById('content').style.background = contentBackground;
        document.getElementById('content').style.boxShadow = contentBoxShadow;
        document.getElementById('fullscreen-button').style.boxShadow = fullscreenButtonShadow;
        document.querySelector('.close').style.boxShadow = closeButtonShadow;
        document.querySelectorAll('.nav-buttons').forEach(button => {
            button.style.background = navButtonsBackgroundColor;
            button.style.boxShadow = navButtonsBoxShadow;
        });
    };

    //Clear/remove previous styles-------------------------------------------

    function removeStyles() {
        updateStyles('none', 'none', 'none', 'none', 'none', 'none',
            'none', 'none', 'none', 'none', 'none');

        // Reset button styles to default
        document.querySelectorAll('.nav-buttons').forEach(button => {
            button.style.backgroundColor = 'aliceblue';
            button.style.boxShadow = 'initial';
        });
    }

    // Random hexidecimal color------------------------------------------

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Random Pixel count ${randomPxValue()}px -------------------------
    // const randomPxValue = getRandomPxValue(); 

    function getRandomPxValue() {
        return Math.floor(Math.random() * 50) + 1;
    }

    // Function to continuously change the color of an element----------------

    function randomColorChange() {
        const item = document.getElementById('random-color-change');
        setInterval(function () {
            const randomColor = getRandomColor();
            item.style.color = randomColor;
        }, 1000); // Change color every 1000 milliseconds (1 second)
    }
    //Starts random button icon color change----------
    randomColorChange();

    // Original button-----------------------------------------------------

    const originalButton = document.getElementById('original-button');

    originalButton.addEventListener('click', function () {
        removeStyles();
        updateStyles(
            /* backgroundColor */ 'linear-gradient(to bottom right, #b3ccc2, #73a9db)',
            /* h1Color */ 'black',
            /* h1TextShadow */ '0 0 2px #004b58',
            /* iframeBackgroundColor */ '#c5d4e2',
            /* iframeBoxShadow */ '0 0 15px black, inset 0 0 10px black',
            /* contentBackground */ '#52a3e97e',
            /* contentBoxShadow */ '0 0 6px black,inset 0 0 10px black',
            /* fullscreenButtonShadow */ '0 0 2px black,inset 0 0 5px black,0 0 1px white',
            /* closeButtonShadow */ '0 0 2px black,inset 0 0 5px black,0 0 1px white',
            /* navButtonsBackgroundColor */ '#f0f8ffe8',
            /* navButtonsBoxShadow */ '0 0 2px black,inset 0 0 5px black'
        );
    });

    // Light button--------------------------------------------------

    const lightButton = document.getElementById('light-button');


    lightButton.addEventListener('click', function () {
        removeStyles();
        updateStyles(
            /* backgroundColor */ 'linear-gradient(to top right, whitesmoke, beige)',
            /* h1Color */ '#141414',
            /* h1TextShadow */ '0 0 1px black',
            /* iframeBackgroundColor */ 'linear-gradient(to top left, whitesmoke, beige)',
            /* iframeBoxShadow */ '0 0 15px black, inset 0 0 10px black',
            /* contentBackground */ 'aliceblue',
            /* contentBoxShadow */ '0 0 3px black,inset 0 0 10px black',
            /* fullscreenButtonShadow */ '0 0 2px black,inset 0 0 5px black,0 0 1px white',
            /* closeButtonShadow */ '0 0 2px black,inset 0 0 5px black,0 0 1px white',
            /* navButtonsBackgroundColor */ 'beige',
            /* navButtonsBoxShadow */ '0 0 2px black,inset 0 0 5px black'
        );
    });

    //Dark button--------------------------------------------------

    const darkButton = document.getElementById('dark-button');

    darkButton.addEventListener('click', function () {
        removeStyles();

        updateStyles(
            /* backgroundColor */ 'linear-gradient(to top right, #161616, #2c2c27)',
            /* h1Color */ 'aliceblue',
            /* h1TextShadow */ '0 0 2px gray',
            /* iframeBackgroundColor */ '#141414',
            /* iframeBoxShadow */ '0 0 5px white, inset 0 0 10px white',
            /* contentBackground */ '#141414',
            /* contentBoxShadow */ '0 0 10px white,inset 0 0 10px white',
            /* fullscreenButtonShadow */ '0 0 1px white,inset 0 0 1px white',
            /* closeButtonShadow */ '0 0 1px white,inset 0 0 1px white',
            /* navButtonsBackgroundColor */ 'slategray',
            /* navButtonsBoxShadow */ '0 0 3px aliceblue, inset 0 0 10px aliceblue'
        );
    });

    //Neon button-------------------------------------------------

    const neonButton = document.getElementById('neon-button');

    neonButton.addEventListener('click', function () {
        removeStyles();

        updateStyles(
            /* backgroundColor */ 'black',
            /* h1Color */ '#8af84577',
            /* h1TextShadow */ '0 0 4px #65FE08, 0 0 1px aliceblue',
            /* iframeBackgroundColor */ '#141414',
            /* iframeBoxShadow */ '0 0 18px #65FE08, inset 0 0 3px aliceblue, inset 0 0 18px #65FE08',
            /* contentBackground */ '#141414',
            /* contentBoxShadow */ '0 0 34px #F535AA, inset 0 0 4px #ffffff, 0 0 4px #ffffffd7, inset 0 0 24px #F535AA',
            /* fullscreenButtonShadow */ 'inset 0 0 5px #05D9FF, 0 0 8px #05D9FF, inset 0 0 3px aliceblue',
            /* closeButtonShadow */ 'inset 0 0 5px red, 0 0 8px red, inset 0 0 3px aliceblue',
            /* navButtonsBackgroundColor */ 'aliceblue',
            /* navButtonsBoxShadow */ '0 0 25px #05D9FF, inset 0 0 3px aliceblue, inset 0 0 25px #05D9FF'
        );
    });

    //Random buttom-------------------------------------------------

    const randomButton = document.getElementById('random-button');

    randomButton.addEventListener('click', function () {
        removeStyles(); // Remove existing styles
        const randomPxValue = getRandomPxValue();
        // Update styles for different elements with random colors
        updateStyles(
            /* backgroundColor */ `linear-gradient(to bottom right, 
                ${getRandomColor()}, ${getRandomColor()})`,
            /* h1Color */ getRandomColor(),
            /* h1TextShadow */ `0 0 ${randomPxValue}px ${getRandomColor()}`,
            /* iframeBackgroundColor */ `linear-gradient(to bottom right, 
                ${getRandomColor()}, ${getRandomColor()})`,
            /* iframeBoxShadow */ `0 0 ${randomPxValue}px ${getRandomColor()},
                inset 0 0 ${randomPxValue}px ${getRandomColor()}`,
            /* contentBackground */ `linear-gradient(to bottom right, 
                ${getRandomColor()}, ${getRandomColor()})`,
            /* contentBoxShadow */ `0 0 ${randomPxValue}px ${getRandomColor()}`,
            /* fullscreenButtonShadow */ `0 0 ${randomPxValue}px, 
                inset 0 0 ${randomPxValue}px ${getRandomColor()}`,
            /* closeButtonShadow */ `0 0 ${randomPxValue}px, 
                inset 0 0 ${randomPxValue}px ${getRandomColor()}`,
            /* navButtonsBackgroundColor */ `linear-gradient(to bottom right, 
                ${getRandomColor()}, ${getRandomColor()})`,
            /* navButtonsBoxShadow */ `0 0 ${randomPxValue}px ${getRandomColor()}, 
                inset 0 0 ${randomPxValue}px ${getRandomColor()}`
        );
    });

    /*-------------------------------Light/Dark/Neon/Random #2 --------------------------------*/

    /*-------------------------------Brightness Slider #3 --------------------------------*/

    // Page Brightness--------

    const brightnessSlider = document.getElementById('brightness-slider');

    brightnessSlider.addEventListener('input', () => {
        const brightnessValue = brightnessSlider.value;
        const brightnessFilter = `brightness(${brightnessValue}%)`;

        // Apply brightness to  webpage------------
        document.documentElement.style.filter = brightnessFilter;

    });

    /*-------------------------------Brightness Slider #3 --------------------------------*/

});




