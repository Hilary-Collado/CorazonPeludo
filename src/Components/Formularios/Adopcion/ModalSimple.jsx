import React from 'react';

const ModalSimple = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ( 
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Test de Personalidad</h3>
          <button onClick={onClose} className="text-red-500 font-bold text-xl">&times;</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalSimple;
