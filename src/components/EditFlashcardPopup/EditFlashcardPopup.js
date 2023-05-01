import './EditFlashcardPopup.css';

function EditFlashcardPopup(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className="edit-flashcard-popup">
      <form
        className="edit-flashcard-popup__form"
        onSubmit={handleSubmit}
      ></form>
    </div>
  );
}

export default EditFlashcardPopup;
