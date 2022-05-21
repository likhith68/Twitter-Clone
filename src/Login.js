import React, { useState } from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';



function Login() {
    const[state,dispatch]=useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
          console.log(result);
          dispatch({//pushing the data into the data layer
            type:actionTypes.SET_USER, //calling set user from the reducer
            user:result.user, //user data is there in the datalayer with this line of code
          })
        })
        .catch((error)=>{
          alert(error.message);
        });
      }

  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://uploads-ssl.webflow.com/60e482412f58de52d6b21bfd/6262a35347b051cae5e82fdc_logo-twitter.png" alt="" />
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login
