import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Inner = styled.div`
  flex-direction: column;
  flex: 1;
  margin-left: ${props => (props.open ? '0px' : '-150px')};
  width: 50px;
  transition: all 0.5s ease-in-out;
  background: lightgreen;  
`;

const Content = styled.div`
  flex-grow: 1;
  flex-direction: column;
  background: aqua;
  width: 100px;
  margin-left: ${props => (props.opened ? '0px' : '100px')};
  transition: all 0.5s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  width: 200px;       
`;

const Sidebar = styled.div`
  background: aliceblue;
  height: 100vh;
  width: 50px;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      opened: false,
    }
  }
  render() {
    return (
        <Container>
          <Sidebar>
            <button onClick={()=>{this.setState({ open: !this.state.open, opened: !this.state.opened })}}>open</button>
          </Sidebar>
          <Inner 
            open={this.state.open}
          >
            hello city
          </Inner>
          <Content opened={this.state.open}>
            content
          </Content>
        </Container>
    );
  }
}

export default App;
