import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const membersList =[
  { name: 'John', role: 'Handyman', email: 'john@handy.com'},
  { name: 'Cassie', role: 'Data Scientist', email: 'cassie@science.com'},
  { name: 'Bob', role: 'Web Developer', email: 'bob@website.com'},
];

const initialFormValues = { name: '', role:'',email:'' }

function SimpleForm(){
  const [formValues, setFormValues] = useState(initialFormValues)

const change = (evt) => {
  const { name, value } = evt.target;
  setFormValues({...formValues, [name]:value });
}

  return(
    <div className ='container'>
      <h1>New Member Form</h1>
      {membersList.map((member, idx) => (

        <div key={idx}>
          {member.name} is a {member.role} and can be reached at {member.email}
        </div>
      ))}
      <form>
        <input
        type ='text'
        value={formValues.name}
        name='name'
        onChange={change}
        />
        <input
        type ='text'
        value={formValues.role}
        name='role'
        onChange={change}
        />
        <input
        type ='text'
        value={formValues.email}
        name='email'
        onChange={change}
        />
        <input type='submit' value='submit'/>
      </form>
    </div>
  )
}


render(
  <>
  <SimpleForm />
  </>
)


// ReactDOM.render(
//   <><SimpleForm />
//   <React.StrictMode>

//     <App />
//   </React.StrictMode></>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
