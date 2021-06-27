var subMenu = document.getElementById('sub-menu');
        var hiddenMenu = document.getElementById('hidden-menu');
        subMenu.onclick = function () {
            if (hiddenMenu.style.display == 'none') {
                hiddenMenu.style.display = 'grid';
            } else {
                hiddenMenu.style.display = 'none';
            }
            window.addEventListener('mouseup', function (event) {
                if (event.target != subMenu && event.target != hiddenMenu) {
                    hiddenMenu.style.display = 'none';
                    return;
                }
            });
        }
        var searchIcon = document.getElementById('search-icon');
        var searchForm = document.getElementById('search-form');
        searchIcon.onclick = function () {
            if (searchForm.style.display == 'none') {
                searchForm.style.display = 'grid';
            } else {
                searchForm.style.display = 'none';
            }
            window.addEventListener('mouseup', function (event) {
                if (event.target != searchIcon && event.target.parentNode != searchForm) {
                    searchForm.style.display = 'none';
                    return;
                }
            });
        }