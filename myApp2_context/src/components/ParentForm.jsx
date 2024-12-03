// src/ParentPopup.jsx
// src/ParentForm.jsx
import { NotesContext } from '../NotesContext';
import Form from './Modals/Form';// src/ParentForm.jsx

// src/ParentForm.jsx
import { useContext } from 'solid-js';

function ParentForm({ editingNote, closeModal }) {
  const { addNote, updateNote } = useContext(NotesContext); // Access context methods directly

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-96">
        <div class="flex justify-between">
          <h2 class="text-xl">{editingNote ? 'Edit Note' : 'Add Note'}</h2>
          <button class="text-gray-500" onClick={closeModal}>
            X
          </button>
        </div>

        <Form
          editingNote={editingNote}
          closeModal={closeModal}
          addNote={addNote}   // Directly pass methods via context
          updateNote={updateNote}
        />
      </div>
    </div>
  );
}

export default ParentForm;

