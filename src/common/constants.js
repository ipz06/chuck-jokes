const LOCAL_STORAGE_GET_DATA = JSON.parse(localStorage.getItem('favorites'))

const MESSAGE_FIRST = 'Welcome to'

const MESSAGE_SECOND = 'Chuck Norris Jokes Page'
const ADDITIONAL_TEXT =
  'Get jokes* - random or by category, add to your list of favorites, take a look of your\n' +
  '      selection and remove from it'

const URL_GET_JOKE = `https://api.chucknorris.io/jokes/random`

const URL_GET_CATEGORY = 'https://api.chucknorris.io/jokes/categories'

export {
  LOCAL_STORAGE_GET_DATA,
  MESSAGE_FIRST,
  MESSAGE_SECOND,
  URL_GET_CATEGORY,
  URL_GET_JOKE,
  ADDITIONAL_TEXT
}
