import { createStore } from 'redux'

export default () => {
const store = createStore((state = {counter:0}) => {
return state
})

return store }