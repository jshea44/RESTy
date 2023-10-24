import { render, screen, fireEvent } from '@testing-library/react';
import Form from '.';

describe('Testing the Form component', () => {
  test('Something should render when the form in submitted', async () => {
    let testOutput = null;

    function handleSubmit(value) {
      testOutput = value;
    }

    render(<Form onSubmit={handleSubmit} />);

    let inputElement = screen.getByTestId('form-input');
    fireEvent.change(inputElement, { target: { value: 'test output' } });
    let buttonElement = screen.getByTestId('form-button');
    fireEvent.click(buttonElement);

    expect(testOutput).toEqual('test output');
  });
});
