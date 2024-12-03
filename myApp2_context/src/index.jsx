/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import { NotesProvider } from './NotesContext.jsx'

const root = document.getElementById('root')

render(() => (
    <NotesProvider>
      <App />
    </NotesProvider>
  ), root)
