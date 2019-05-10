(function (window, document, drawModule) {
    btn.addEventListener("click", function(){ drawModule.init();});

    document.onkeydown = function (event) {
        switch (event.code) {
            case 'ArrowLeft':
                if (direction !== 'right') {
                    direction = 'left';
                }
                break;

            case 'ArrowRight':
                if (direction !== 'left') {
                    direction = 'right';
                }
                break;

            case 'ArrowUp':
                if (direction !== 'down') {
                    direction = 'up';
                }
                break;

            case 'ArrowDown':
                if (direction !== 'up') {
                    direction = 'down';
                }
                break;
        }
    };
})(window, document, drawModule);