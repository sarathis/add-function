import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Add } from "./AddNumbers";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Testing Calculater", () => {
  test("Testing add functions", () => {
    expect(Add("")).toBe(0);
    expect(Add("1")).toBe(1);
    expect(Add("4,5,9\n2,6,6,4")).toBe(36);
    expect(Add("4,5,9\n2,6,6;4")).toBe(36);
  });

  test("Testing add functions error", () => {
    () => {
      expect(Add("-6")).toThrow("Negative numbers not allowed -6");
    };
    () => {
      expect(Add("-6,8,89,-8,-6")).toThrow("Negative numbers not allowed -6,-8,-6");
    };
  });
});
