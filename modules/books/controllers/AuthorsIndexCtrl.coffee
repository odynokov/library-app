Book = require '../models/Book.coffee'

module.exports = [
  '$scope', '$location'
  ($scope, $location) ->

    _getAllBooks = Book.findAll()

    $scope.authors = _.map(_.countBy(_getAllBooks, 'author'),
      (value, key) ->
        {
          name: key
          books: value
        }
    )

    $scope.authorOrder = 'name'

    $scope.isActive = (path) ->
      return $location.path() == path

]
