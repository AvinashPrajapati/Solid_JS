// src/ParentPopup.jsx
// src/ParentForm.jsx
import { createSignal } from 'solid-js';
import Form from './Modals/Form';

function ParentForm({ editingNote, closeModal }) {
  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-96">
        <div class="flex justify-between">
          <h2 class="text-xl">{editingNote ? 'Edit Note' : 'Add Note'}</h2>
          <button class="text-gray-500" onClick={closeModal}>
            X
          </button>
        </div>

        <Form editingNote={editingNote} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default ParentForm;
