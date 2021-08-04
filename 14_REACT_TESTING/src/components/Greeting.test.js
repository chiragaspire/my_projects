import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  
    
    test('test1 by chirag', () => {
        render(<Greeting />);

        const helloworld = screen.getByText('Hello World!');
        expect(helloworld).toBeInTheDocument();
    });

  
    
  test('test2 by chirag', () => {
    render(<Greeting />);

    const output = screen.getByText('good to see you',{exact:false});
    expect(output).toBeInTheDocument();
});

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });
    
  test('test3 by chirag', () => {
      render(<Greeting />);
      
      const button = screen.getByRole('button');
      userEvent.click(button);

    const outpute = screen.getByText('Changed!');
    expect(outpute).toBeInTheDocument();
});


    
    test('test4 by chirag', () => {
        render(<Greeting />);

        const button = screen.getByRole('button');
        userEvent.click(button);

        const output = screen.queryByText('good to see you', { exact: false });
        expect(output).toBeNull();
    });
});
