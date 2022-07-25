import {render, screen} from '@testing-library/react'
import { Greeting } from './Greeting'
import userEvent from '@testing-library/user-event'

describe('Greeting component', () => {

    test('renders Hello World!', () => {
        //Arrange
        render(<Greeting />);
        
        //Act
        // ...nothing
        
        //Assert
        const helloWorldElement = screen.getByText('Hello World!', { exact: true })   // second param indicates that the test will only succed if the message is exactly the same
        expect(helloWorldElement).toBeInTheDocument();
    })

    test("Renders 'it's good to see you!' by default", () => {
        render(<Greeting />);
        const pElement = screen.getByText(/good to see you/, { exact: false })   // second param indicates that the test will only succed if the message is exactly the same
        expect(pElement).toBeInTheDocument();
    })

    test("Renders 'Changed!' if the button was clicked", () => {
        // Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText(/Changed!/, { exact: false })   // second param indicates that the test will only succed if the message is exactly the same
        expect(outputElement).toBeInTheDocument();
    })
})