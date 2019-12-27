import React from 'react';

function Modal(props) {
  return (
    <div className="modalBox d-flex">
      <div className="innerModal bg-light">
        <h2 className="mt-2 ml-2 mr-2">
          Welcome to <span className="shopName">Simply Creative</span>
        </h2>
        <p className="ml-2 mr-2">
          Simply Creative is a Full-Stack content management app created for
          demonstration purposes.
        </p>
        <p className="ml-2 mr-2">
          Purchases and payment will not be made or processed during testing.
          Please use fake information when filling out the checkout form.
        </p>
        <button onClick={() => props.close()}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
