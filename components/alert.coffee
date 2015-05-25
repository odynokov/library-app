
module.exports = (msg) ->
  alertDiv = document.querySelector('.popup')
  alertDiv.textContent = msg
  alertDiv.classList.add('active')
  setTimeout(->
    alertDiv.classList.remove('active')
  , 2000)
