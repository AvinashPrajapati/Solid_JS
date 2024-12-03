// src/store.js
import { createStore } from 'solid-js/store';

// Create a store to manage notes
export const [store, setStore] = createStore({
  notes: [
    { id: 1, title: 'First Note', content: 'This is the first note.' },
    { id: 2, title: 'Second Note', content: 'This is the second note.' }
  ]
});

// Function to add a new note
export const addNote = (newNote) => {
  setStore('notes', (notes) => [...notes, newNote]);
};

// Function to update a note
export const updateNote = (id, updatedNote) => {
  const noteIndex = store.notes.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    setStore('notes', noteIndex, updatedNote);
  }
};

export const deleteNote = (id, ) => {
    setStore("notes", store.notes.filter((note)=>note.id != id))
  };
