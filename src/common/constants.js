const LOCAL_STORAGE_GET_DATA = JSON.parse(localStorage.getItem('favorites'))

const MESSAGE_FIRST = 'Welcome to'

const MESSAGE_SECOND = 'Chuck Norris Jokes Page'

const URL_GET_JOKE = `https://api.chucknorris.io/jokes/random`

const URL_GET_CATEGORY = 'https://api.chucknorris.io/jokes/categories'

export { LOCAL_STORAGE_GET_DATA, MESSAGE_FIRST, MESSAGE_SECOND, URL_GET_CATEGORY, URL_GET_JOKE }
