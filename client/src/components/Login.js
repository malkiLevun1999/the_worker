import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebase'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import './Login.css';


import { connect } from 'react-redux';
import {  setWorkerId, setWorkerName, setWorkerEmail, setWorkerPassword } from '../redux/action';


const mapStateToProps = (state) => ({
    worker: state.workerReducer.worker,
})


const mapDispatchToProps = (dispatch) => (
  {
    setId: (val) => dispatch(setWorkerId(val)),
    setEmail: (val) => dispatch(setWorkerEmail(val)),
    setPassword: (val) => dispatch(setWorkerPassword(val)),
    setName: (val) => dispatch(setWorkerName(val)),

  }
)



export default connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
  const { worker } = props;
  const { setName, setId} = props;

  const [emailForm, setEmailForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");

  
  useEffect(() => {
    
    
},[])

  function check() {


    var requestOptions = {
      method: 'GET',

      redirect: 'follow'
    };

    fetch(`http://localhost:3000/login/${emailForm}/${passwordForm}`, requestOptions)
      .then(response => response.text())
      .then(result => {

       
        if (result === "The user is not defined") {
          alert('The user is not defined')
        }
        else {
          let result2 = JSON.parse(result)

          localStorage.setItem('token', result2.token)
          alert(`Hii hello ${result2.worker.name}`)

          setId(result2.worker._id)
          setName(result2.worker.name)

        }
      })

      .catch(error => {
        console.log('error', error)

      },

      );
  }


  


  function handleSubmit(event) {

    event.preventDefault();


    firebase.auth().signInWithEmailAndPassword(emailForm, passwordForm).then(
      (data) => {
        console.log(data)

        check()
      }

    ).catch(
      (err) => {
         alert(err) 

      })
  }

  function validateForm() {
    return emailForm.length > 0 && passwordForm.length > 0;
  }


  return (


    <div className="Login">



      <UserProvider value={user}>

      </UserProvider>
      <div >
        <h2 >Login</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordForm}
            onChange={(e) => setPasswordForm((e.target.value))}

          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>

        
      </Form>
    </div>


  )
})