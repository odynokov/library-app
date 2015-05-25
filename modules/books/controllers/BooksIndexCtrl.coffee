Book = require '../models/Book.coffee'
require '../assets/index.styl'
alertPopup = require '../../../components/alert.coffee'

module.exports = [
  '$scope', '$route', '$http', '$location'
  ($scope, $route, $http, $location) ->

    getBooks = ->
      $scope.books = Book.findAll()

    $scope.getStarsRange = (num) ->
      return _.range(1, num+1)

    $scope.getRating = (num) ->
      return Math.abs(5 - num)

    $scope.saveRating = (book) ->
      Book.update(book)
      alertPopup('Рейтинг сохранен')

    $scope.attrs = $route.current.params

    $scope.getTitle = ->
      genre = $route.current.params.genre
      author = $route.current.params.author
      rating = $route.current.params.rating
      if genre
        return 'Книги жанра ' + genre
      if author
        return 'Книги писателя ' + author
      if rating
        return 'Книги с рейтингом ' + rating
      return 'Моя библиотека'

    $scope.loadDemo = ->
      demo = $http.get('../demo.json')
        .success (data) ->
          Book.save(data)
          getBooks()
      alertPopup('Демонстрационные данные загружены')

    $scope.delete = (id) ->
      Book.delete({id: id})
      getBooks()
      alertPopup('Книга удалена')

    $scope.exportBooks = ->
      Book.export()
      alertPopup('Экспорт данных завершен')

    $scope.import = ->
      input = document.querySelector('#files')

      input.addEventListener(
        'change'
        ->
          files = input.files

          file = files[0];

          reader = new FileReader()

          reader.onloadend = (evt) ->
            if evt.target.readyState == FileReader.DONE
              Book.import(evt.target.result)
              getBooks()
              $scope.$apply()
              alertPopup('Импорт данных завершен')

          reader.readAsText(file)
        false)

    $scope.bookOrder = 'title'

    getBooks()

    $scope.isActive = (path) ->
      return $location.path() == path

    $scope.getProps = (prop) ->
      return Book.getProps(prop)


    $scope.booksQuantity = 3

    $scope.loadMoreBooks = ->
      $scope.booksQuantity += 3

]
