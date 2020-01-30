import React from 'react';

function DemoModal(props) {
  return (
    <div className="modal-box d-flex">
      <div className="inner-modal bg-light">
        <h5 className="m-3">
          Welcome to <span className="shop-name">Simply Creative</span>
        </h5>
        <p className="ml-3 mr-3">
          Simply Creative is a Full-Stack content management app created for
          demonstration purposes.
        </p>
        <p className="ml-3 mr-3">
          Purchases and payment will not be made or processed during testing.
          Please use fake information when filling out the checkout form.
        </p>
        <button type="button" className="btn btn-info mb-3" onClick={() => props.close()}>I Accept</button>
      </div>
    </div>
  );
}

export default DemoModal;
