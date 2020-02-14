import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Video Manager Title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Video Manager/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders intro", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to your custom media manager/i);
  expect(linkElement).toBeInTheDocument();
});
