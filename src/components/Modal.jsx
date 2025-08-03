export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-6 rounded-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
