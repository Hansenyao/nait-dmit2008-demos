import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'

test('todo list title renders correctly', ()=> {
  render(<TodoList />)
  const titleElement = screen.getByText("Our Todo List")
  expect(titleElement).toBeInTheDocument()
})

test('todo is added successfully', ()=> {
  render(<TodoList />)
  const inputElement = screen.getByLabelText("New Todo")
  const buttonElement = screen.getByText("Add Todo")
  const listElement = screen.getByTestId("todo-item-list")
  const EXPECTED_STRING = "Learn Testing in Javascript"
  // let's add the the string to our input element
  fireEvent.change(inputElement, {
    target: { value: EXPECTED_STRING}
  })
  // let's 
  expect(inputElement.value).toBe(EXPECTED_STRING) 

  // act needs to be called when you update the state of the application.
  // this is going to change the state of the allTodos in the component.
  act(()=>{
    buttonElement.click()
  })
  // the vlaue 
  expect(inputElement.value).toBe('')
  expect(listElement).toHaveTextContent(EXPECTED_STRING)
})

test("todo text shouldn't contain html tags", () => {
  render (<TodoList />)
  const inputElement = screen.getByLabelText("New Todo")
  const buttonElement = screen.getByText("Add Todo")
  const listElement = screen.getByTestId("todo-item-list")
  const EXPECTED_STRING = "<p>Hi</p>"

  fireEvent.change(inputElement, {
    target: {value: EXPECTED_STRING}
  })

  act(() => {
    buttonElement.click();
  })

  // the value
  expect(listElement).not.toHaveTextContent(EXPECTED_STRING);
})

test("user should not be ablt to even enter html tags in the text box", () => {
  render (<TodoList />)
  const inputElement = screen.getByLabelText("New Todo")
  const EXPECTED_STRING = "<p>Hi</p>"

  fireEvent.change(inputElement, {
    target: {value: EXPECTED_STRING}
  })

  // Need to validate inputing in onTodoTextChange()
  expect(inputElement.value).not.toBe(EXPECTED_STRING)
})