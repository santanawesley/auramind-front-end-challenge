import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "@/components/atoms/Button";

test("renders Button component", () => {
  render(<Button>Clique aqui</Button>);
  const buttonElement = screen.getByText(/clique aqui/i);
  expect(buttonElement).toBeInTheDocument();
});

test("Button click event", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Clique aqui</Button>);
  const buttonElement = screen.getByText(/clique aqui/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
