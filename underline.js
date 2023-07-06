(function(){
    window.addEventListener('DOMContentLoaded', function(){
        const textUnderlineSelector = '.graphic-effect-underline';
        const textCrossoutSelector = '.graphic-effect-crossout';

        const underlineElements = document.querySelectorAll(textUnderlineSelector);
        const crossoutElements = document.querySelectorAll(textCrossoutSelector);
        
        if(
            0 < underlineElements.length ||
            0 < crossoutElements.length
        ) {

            if(0 < underlineElements.length) {
                for(const e of underlineElements) {
                    const underlineImage = e.dataset.underlineImage;
                    if(underlineImage) {
                        const img = document.createElement('img');
                        img.src = `underlines/${underlineImage}.svg`;
                        e.appendChild(img);
                    }
                }
            }

            if(0 < crossoutElements.length) {
                for(const e of crossoutElements) {
                    const crossoutImage = e.dataset.crossoutImage;
                    if(crossoutImage) {
                        const img = document.createElement('img');
                        img.src = `crossouts/${crossoutImage}.svg`;
                        e.appendChild(img);
                    }
                }
            }

            const options = {
                rootMargin: '300px 0px -200px 0px',
                threshold: 0.5,
            };
    
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('draw');
                    }else{
                        entry.target.classList.remove('draw');
                    }
                });
            }, options);
    
            [...underlineElements, ...crossoutElements].forEach((i)=>{
                if(i){
                    observer.observe(i);
                }
            });
        }

    });
})();