// This is a JavaScript file

$(document).ready(function(){
           $('.nav-search').hide();
            $('.sidenav').sidenav();
            $('.collapsible').collapsible();
            $('.fixed-action-btn').floatingActionButton();
            $('.modal').modal();

            $('.btn-delete').click(function(){
              $('#tr4').hide();
            });
            $('.btn-add').click(function(){
              $('#tr4').show();
            });

            $('.btn-search').click(function(){
              $('.nav-search').toggle();
            });
        });