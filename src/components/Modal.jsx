import '../styles/modal.css';

export default function Modal({ isOpen, onClose, children, correctGuess }){
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className={`${correctGuess ? "correctGuess" : "incorrectGuess"}`}>
        {children}
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
