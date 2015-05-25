require '../../components/index.coffee'
require 'oclazyload'
require './assets/main.styl'


app = angular.module('LibraryApp', [
  'ngRoute'
  'oc.lazyLoad'
])

app.config([
  '$routeProvider'

  ($routeProvider) ->

    $routeProvider
    .when('/books', {
        template: require('../books/views/index.jade')
        controller: 'BooksIndexCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'LibraryApp.Books'
                files: ['/assets/books.js']
              })
          ]
      })
    .when('/books/create', {
        template: require('../books/views/form.jade')
        controller: 'CreateBookCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'LibraryApp.CreateBook'
                files: ['/assets/books.js']
              })
          ]
      })
    .when('/books/:id', {
        template: require('../books/views/form.jade')
        controller: 'UpdateBookCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'LibraryApp.UpdateBook'
                files: ['/assets/books.js']
              })
          ]
      })
    .when('/authors', {
        template: require('../books/views/authors.jade')
        controller: 'AuthorsIndexCtrl'
        resolve:
          module: [
            '$ocLazyLoad'
            ($ocLazyLoad) ->
              return $ocLazyLoad.load({
                name: 'LibraryApp.Authors'
                files: ['/assets/books.js']
              })
          ]
      })
    .otherwise({
        redirectTo: '/books'
      })

])

angular.element(document).ready ->
  angular.bootstrap(document.body, ['LibraryApp'])