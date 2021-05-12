"use strict";
const buttonOpen = document.querySelector('.hamburher');
const hiddenMenu = document.querySelector('.menus');
const closeMenu = document.querySelector('.krest')

console.log(buttonOpen);
buttonOpen.addEventListener('click', function(){

hiddenMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', function(){
    hiddenMenu.classList.add('hidden');
});

$(document).ready(function (){

    $('.article').click(function (){

        let articleId = $(this).attr('data-article-id');
        let articleTitle = $(this).find('.news_title').html();

        if (articleId === 'undefined') {
            return;
        }

        $.get({
            url: '/glowbox/articles/articles.php',
            type: 'get',
            data: {
                articleId: articleId
            },
            success: function (html){
                let articlesModal = $('#articlesModal');
                articlesModal.find('.modal-body').html(html);
                articlesModal.find('.modal-title').html(articleTitle);
                articlesModal.modal();
            }
        });

    })
})