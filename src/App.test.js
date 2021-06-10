import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("renders APP component", () => {
    render(<App />);
    screen.debug();
  })
});
