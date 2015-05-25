module.exports = class WebStorage

  constructor: (@collection) ->

  _storage = window.localStorage

  findAll: ->
    return angular.fromJson(_storage[@collection]) || []

  find: (criteria) ->
    return _.findWhere(@findAll(), criteria)

  getProps: (property) ->
    return _.uniq(_.pluck(@findAll(), property))

  save: (data) ->
    _storage[@collection] = angular.toJson(data)

  delete: (criteria) ->
    model = @findAll()
    dataToDelete = _.findWhere(model, criteria)
    data = _.without(model, dataToDelete)
    @save(data)

  getNewId: ->
    model = @findAll()
    if !_.isEmpty(model)
      return _.max(_.pluck(model, 'id')) + 1
    return 1

  create: (item) ->
    if not item.id
      item.id = @getNewId()
    data = @findAll().concat(item)
    @save(data)

  update: (item) ->
    @delete({id: item.id})
    @create(item)

  import: (file) ->
    _storage[@collection] = file

  export: ->
    data = _storage[@collection]
    dataURI = 'data:text/json;charset=utf8,' + encodeURIComponent(data)
    hyperlink = document.createElement('a')
    hyperlink.href = dataURI
    hyperlink.download = 'books.json'

    mouseEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    })

    hyperlink.dispatchEvent(mouseEvent)
    (window.URL || window.webkitURL).revokeObjectURL(hyperlink.href);