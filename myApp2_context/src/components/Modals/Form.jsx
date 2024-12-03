// src/Form.jsx
import { useContext, createSignal } from 'solid-js';
import { NotesContext } from '../../NotesContext';

function Form({ editingNote, closeModal }) {
  const { addNote, updateNote } = useContext(NotesContext); // Access context methods directly
  const [title, setTitle] = createSignal(editingNote ? editingNote.title : '');
  const [content, setContent] = createSignal(editingNote ? editingNote.content : '');

  const handleSave = () => {
    if (editingNote) {
      // If editing, update the note
      updateNote(editingNote.id, { id: editingNote.id, title: title(), content: content() });
    } else {
      // If adding, create a new note
      const newNote = { id: Date.now(), title: title(), content: content() };
      addNote(newNote);
    }
    closeModal();
  };

  return (
    <div class="mt-4">
      <div class="mb-4">
        <label class="block">Title</label>
        <input
          type="text"
          value={title()}
          onInput={(e) => setTitle(e.target.value)}
          class="border p-2 rounded w-full"
        />
      </div>
      <div class="mb-4">
        <label class="block">Content</label>
        <textarea
          value={content()}
          onInput={(e) => setContent(e.target.value)}
          class="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleSave}
        class="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Save
      </button>
    </div>
  );
}

export default Form;
