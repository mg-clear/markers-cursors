(function(){
    window.addEventListener('DOMContentLoaded', function(){
        const cursor = document.getElementById('cursor');

        if(cursor) {

            let cursorX = -100;
            let cursorY = -100;
            let hoveredElementsExpand = [];
            let iconElementsExpand = [];

            const cursorSizeOffset = 0.5 * cursor.clientWidth;

            const initializeCursor = function() {
                document.addEventListener('mousemove', event => {
                    cursorX = event.clientX - cursorSizeOffset;
                    cursorY = event.clientY - cursorSizeOffset;
                });

                document.documentElement.addEventListener('mousedown', () => {
                    cursor.classList.add('click');
                });

                document.documentElement.addEventListener('mouseup', () => {
                    cursor.classList.remove('click');
                });

                document.documentElement.addEventListener('mouseleave', () => {
                    cursor.classList.add('hidden');
                });

                document.documentElement.addEventListener('mouseenter', () => {
                    cursor.classList.remove('hidden');
                });

                const moveCursor = function() {
                    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
                    hoveredElementsExpand = document.querySelectorAll('[data-cursor-expand]:hover');
                    iconElementsExpand = document.querySelectorAll('[data-cursor-icon]:hover');
                    cursor.dataset.circleExpand = (0 < hoveredElementsExpand.length) ? 'true' : 'false';
                    cursor.dataset.icon = (0 < iconElementsExpand.length) ? iconElementsExpand[0].dataset.cursorIcon : '';
    
                    requestAnimationFrame(moveCursor);
                }
    
                requestAnimationFrame(moveCursor);
            }

            initializeCursor();
        }

    });
})();