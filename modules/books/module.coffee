require '../../components/index.coffee'

angular.module('LibraryApp.Books', [])

  .controller('BooksIndexCtrl', require('./controllers/BooksIndexCtrl.coffee'))
  .controller('CreateBookCtrl', require('./controllers/CreateBookCtrl.coffee'))
  .controller('UpdateBookCtrl', require('./controllers/UpdateBookCtrl.coffee'))
  .controller('AuthorsIndexCtrl', require('./controllers/AuthorsIndexCtrl.coffee'))

  .directive('whenScrolled', ->
    return (scope, elm, attr) ->
      raw = elm[0];

      funCheckBounds = ->
        rectObject = raw.getBoundingClientRect()
        if rectObject.bottom <= window.innerHeight
          scope.$apply(attr.whenScrolled)

      angular.element(window).bind('scroll load', funCheckBounds))