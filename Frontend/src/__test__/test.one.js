import { render, screen } from '@testing-library/react';
import LogOutHome from '../Pages/Student/logOutHome'

test('renders learn react link', () => {
  render(<LogOutHome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});