Book = require('../models/Book.coffee')
require '../assets/form.styl'
alertPopup = require '../../../components/alert.coffee'

module.exports = [
  '$scope', '$route', '$location'

  ($scope, $route, $location) ->

    $scope.form_title = 'Новая книга'

    $scope.save = ->
      if $scope.create_book_form.$valid
        if $scope.book.genre
          $scope.book.genre = $scope.book.genre.toLowerCase()
        Book.create($scope.book)
        alertPopup('Книга сохранена')
        $location.path('/books')
      else
        console.log 'error while saving'

]
