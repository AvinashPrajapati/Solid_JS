// src/App.jsx
import { createSignal } from 'solid-js';
import ParentForm from './components/ParentForm';
import { deleteNote, store } from './store';


function App() {
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [editingNote, setEditingNote] = createSignal(null); // To hold the note being edited

  const toggleModal = () => setIsModalOpen(!isModalOpen());

  // Function to handle editing an existing note
  const handleEdit = (note) => {
    setEditingNote(note);
    toggleModal();
  };

  return (
    <div class="p-6">
      <h1 class="text-2xl font-semibold">Notes</h1>
      <div class="my-4">
        {store.notes.map((note) => (
          <div key={note.id} class="border-b pb-4 mb-4">
            <h2 class="text-xl">{note.title}</h2>
            
            <p>{note.content}</p>
            <button
              class="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => deleteNote(note.id)}
            >
              Del
            </button>
            {" "}
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => handleEdit(note)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Add Note Button */}
      <button
        class="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => {
          setEditingNote(null); // Reset the editing note
          toggleModal();
        }}
      >
        Add Note
      </button>

      {/* Parent Form Modal */}
      {isModalOpen() && (
        <ParentForm
          editingNote={editingNote()}
          closeModal={toggleModal}
        />
      )}
    </div>
  );
}

export default App;
