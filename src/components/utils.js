import store from '../stores';
import { login, logout } from '../stores/auth';
import { setLanguage } from '../stores/language';
import { openModal, closeModal } from '../stores/modal';
import { setTheme } from '../stores/theme';
import { addTodo, deleteTodo } from '../stores/todo'

export const addTodoHandle = todo => {
    store.dispatch(addTodo(todo))
}

export const deleteTodoHandle = id => {
    store.dispatch(deleteTodo(id))
}

export const loginHandle = user => {
    store.dispatch(login(user))
}

export const logoutHandle = () => {
    store.dispatch(logout())
}

export const modalOpen = (name, data = false) => {
    store.dispatch(openModal({
        name,
        data
    }))
}

export const modalClose = () => {
    store.dispatch(closeModal())
}

export const changeLanguage = () => {
    store.dispatch(setLanguage())
}

export const changeTheme = () => {
    store.dispatch(setTheme())
}


