import { render, screen } from "@testing-library/react";
import App from "./App";

test("hello styled components should render", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(screen.getByText("Hello styled components")).toBeInTheDocument();
  expect(screen.getByText("Styled Components Example")).toBeInTheDocument();
});
