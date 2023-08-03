import React, { useState } from 'react';
import ReactModal from 'react-modal';
 
function Example({data}) {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        {console.log(data)}
      </ReactModal>
    </div>
  );
}
 
export default Example;