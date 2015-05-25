Book = require('../models/Book.coffee')
require '../assets/form.styl'
alertPopup = require '../../../components/alert.coffee'

module.exports = [
  '$scope', '$route', '$location'

  ($scope, $route, $location) ->

    _id = Number($route.current.params.id)

    $scope.book = Book.find({id: _id})

    $scope.form_title = 'Редактирование книги "' + $scope.book.title + '"'

    $scope.save = ->
      if $scope.create_book_form.$valid
        Book.update($scope.book)
        $location.path('/books')
        alertPopup('Книга сохранена')
      else
        console.log 'error while saving'

]
