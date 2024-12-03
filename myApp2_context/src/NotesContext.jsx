

// src/notesContext.js
import { createContext, createSignal } from 'solid-js';

// Create a context for the notes state
export const NotesContext = createContext();

// This will be used in the provider to manage the notes
export const NotesProvider = (props) => {
  const [notes, setNotes] = createSignal([
    { id: 1, title: 'First Note', content: 'This is the first note.' },
    { id: 2, title: 'Second Note', content: 'This is the second note.' }
  ]);

  // Function to add a new note
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Function to update a note
  const updateNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? updatedNote : note))
    );
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};
