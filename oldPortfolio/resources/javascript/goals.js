/*--------------------------------------------Index #0 ------------------------------------

#1 Light/Dark/Neon/Random buttons

/*--------------------------------------------Index #0 -------------------------------------*/


document.addEventListener('DOMContentLoaded', function () {

    /*-------------------------------Light/Dark/Neon/Random #1 --------------------------------*/

    //Change Styles

    function updateStyles(backgroundColor,backgroundBoxShadow, hColor, 
        hTextShadow, pColor, pTextShadow) {

        document.body.style.background = backgroundColor;
        document.body.style.boxShadow = backgroundBoxShadow;
        document.querySelectorAll('h1, h2, h3').forEach(function(element) {
            element.style.color = hColor;
            element.style.textShadow = hTextShadow;
        });

        document.querySelectorAll('p').forEach(function(element) {
            element.style.color = pColor;
            element.style.textShadow = pTextShadow;
        }); 
    }

    //Clear/remove previous styles-------------------------------------------

    function removeStyles() {
        updateStyles('none', 'none', 'none', 'none', 'none', 'none');
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
    //Starts random button icons color change----------
    randomColorChange();

    // Original button-----------------------------------------------------

    const originalButton = document.getElementById('original-button');

    originalButton.addEventListener('click', function () {
        removeStyles();
        updateStyles(
            /* backgroundColor */ 'linear-gradient(to bottom right, #b3ccc2, #73a9db)',
            /*boxShadow */'0 0 15px black, inset 0 0 8px black',
            /* h1Color */ 'black',
            /* h1TextShadow */ '0 0 2px #004b58',
            /* pColor */ 'black',
            /* pTextShadow */ 'none',
        );
    });

    // Light button--------------------------------------------------

    const lightButton = document.getElementById('light-button');


    lightButton.addEventListener('click', function () {
        removeStyles();
        updateStyles(
            /* backgroundColor */ 'linear-gradient(to top right, whitesmoke, beige)',
            /*boxShadow */'0 0 15px black, inset 0 0 10px black',
            /* hColor */ '#141414',
            /* hTextShadow */ '0 0 1px black',
            /* pColor */ 'black',
            /* pTextShadow */ 'none',
        );
    });

    //Dark button--------------------------------------------------

    const darkButton = document.getElementById('dark-button');

    darkButton.addEventListener('click', function () {
        removeStyles();

        updateStyles(
            /* backgroundColor */ 'linear-gradient(to top right, #161616, #2c2c27)',
            /*boxShadow */'0 0 5px white, inset 0 0 10px white',
            /* hColor */ 'aliceblue',
            /* hTextShadow */ '0 0 2px gray',
            /* pColor */ 'aliceblue',
            /* pTextShadow */ 'none',
        );
    });

    //Neon button-------------------------------------------------

    const neonButton = document.getElementById('neon-button');

    neonButton.addEventListener('click', function () {
        removeStyles();
        updateStyles(
            /* backgroundColor */ 'black',
            /*boxShadow */'0 0 18px #65FE08, inset 0 0 3px aliceblue, inset 0 0 18px #65FE08',
            /* hColor */ '#8af84577',
            /* hTextShadow */ '0 0 14px #65FE08, 0 0 1px aliceblue',
            /* pColor */ '#ffffffd7',
            /* pTextShadow */ '0 0 25px #05D9FF,0 0 1px #05D9FF,0 0 5px #05D9FF',
        );
    });

    //Random buttom

    const randomButton = document.getElementById('random-button');

    randomButton.addEventListener('click', function () {
        removeStyles(); // Remove existing styles
        const randomPxValue = getRandomPxValue();
        // Update styles for different elements with random colors
        updateStyles(
            /* backgroundColor */ `linear-gradient(to bottom right, 
                ${getRandomColor()}, ${getRandomColor()})`,
            /*boxShadow */`0 0 ${randomPxValue}px ${getRandomColor()}, inset 0 0 ${randomPxValue}px ${getRandomColor()}`,
            /* hColor */ getRandomColor(),
            /* hTextShadow */ `0 0 ${randomPxValue}px ${getRandomColor()}`,
            /* pColor */ getRandomColor(),
            /* pTextShadow */ '0 0 10px black, 0 0 10px white',

        );
    });
    /*-------------------------------Light/Dark/Neon/Random #1 --------------------------------*/

});
