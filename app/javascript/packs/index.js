import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import Library from '../components/Library';
import UserInfo from "../components/UserInfo";
import AddItemForm from "../components/AddItemForm";
import { Container, Divider}  from '@material-ui/core';
render(
  <Provider>
  	<Container maxWidth="lg">
  		<UserInfo />
  		<br/>
  		
  		<AddItemForm />
  	
    	<Library />
    </Container>
  </Provider>,
  document.querySelector('#root')
);

