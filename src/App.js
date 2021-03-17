import React from 'react';
import './App.css';
import CreateSeries from './components/createSeries';
// Load the configuration file
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default class App extends React.Component {
  componentDidMount() {
    const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
    const todoDetails = {
      name: 'Todo 2',
      description: 'Learn More about AWS AppSync'
    };
    

    async function asyncCall() {
      console.log('calling');
      const newTodo = await API.graphql({ query: createTodo, variables: {input: todoDetails}});
      console.log(newTodo);
      // expected output: "resolved"
    }
    
    asyncCall();
    
  }

  render() {
    return (
      <div className="App">
        <CreateSeries />
      </div>
    );
  }
}
