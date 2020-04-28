$(function () {
    //Add shopping list item to the List
    $('[type=submit]').on('click', function (event) {
      event.preventDefault();
      //append new item to list
      $('li:first-child').clone().appendTo('.shopping-list');

      //capture input and set the span's text to the user input
      let shoppingListItemName = $('li').last().find('.shopping-item');
      shoppingListItemName.text($('#shopping-list-entry').val());

      //remove shopping-item__checked class if it is there
      shoppingListItemName.removeClass('shopping-item__checked');
    });

    //Check off shopping item from list
    $('div').on('click', '.shopping-item-toggle', function (event) {
      event.stopPropagation();
      $(this).closest('div').prev().toggleClass('shopping-item__checked');
    });

    //Delete Shopping list item from list
    $('div').on('click', '.shopping-item-delete', function () { //.on Method works without the eveent parameter added. Is it best practice to put it there anyway?
      this.closest('li').remove();
    });
  });