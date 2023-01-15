import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

describe("Emoji Search App!!", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Header is successfully!", () => {
    const header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
  });

  test("Emoji List is successfully!", () => {
    const emojies = screen.getAllByText(/click to copy emoji/i);
    expect(emojies.length).toEqual(20);
  });

  test("Emoji Filter is successfully!", () => {
    const emoji = "Joy";
    const input = screen.getByTitle("input");
    fireEvent.change(input, { target: { value: emoji } });
    expect(screen.getByText(emoji)).toBeInTheDocument();
  });

  test("Emoji Copy is successfully!", () => {
    let listItem = screen.getByText(/grimacing/i);
    let text = "Grimacing";
    userEvent.click(listItem);
    expect(listItem).toHaveTextContent(text);
  });
});
