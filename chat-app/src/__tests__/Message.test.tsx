import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageInput from "@/components/molecules/MessageInput";

describe("MessageInput Component", () => {
  const mockOnChange = jest.fn();
  const mockOnSend = jest.fn();

  const setup = () => {
    render(
      <MessageInput input="" onChange={mockOnChange} onSend={mockOnSend} />
    );

    const inputElement = screen.getByPlaceholderText("Digite sua mensagem...");
    const sendButton = screen.getByRole("button", { name: /Enviar mensagem/i });

    return {
      inputElement,
      sendButton,
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the MessageInput component", () => {
    const { inputElement, sendButton } = setup();

    expect(inputElement).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  it("should call onChange when the input value changes", () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, { target: { value: "Test message" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should not call onSend if input is empty and Enter key is pressed", () => {
    const { inputElement } = setup();

    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockOnSend).not.toHaveBeenCalled();
  });
});
