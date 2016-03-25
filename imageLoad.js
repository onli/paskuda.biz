function imageLoad() {
    loadVisisbleImages();
    window.onhashchange = function() {
        loadVisisbleImages();
    };
    
    function loadVisisbleImages() {
        imgs = document.querySelectorAll('img');
        for (var i=0;i<imgs.length;i++) {
            if (VISIBILITY.isVisible(imgs[i])) {
                if (imgs[i].dataset['src']) {
                    imgs[i].src = imgs[i].dataset['src'];
                }
            }
        }
    }
}