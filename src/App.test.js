import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('increments and decrements the count', () => {
  const { getByText } = render(<App />);

  const incrementButton = getByText('+');
  const decrementButton = getByText('-');
  const countElement = getByText('0');

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe('1');

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('0');
});

test('does not allow count to go below zero', () => {
  const { getByText } = render(<App />);

  const decrementButton = getByText('-');
  const countElement = getByText('0');

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('0');
});
