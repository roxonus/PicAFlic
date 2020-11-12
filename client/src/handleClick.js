import React, {useState} from 'react';

function RegistrationForm(props) {

const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }

return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          ...
          <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
          >
                    Register
          </button>
        </div>
  )
}
