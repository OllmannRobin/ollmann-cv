import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProfessionalExperience from "./ProfessionalExperience";

describe("Professional Experience Component", () => {
  it("should render the main header and job title", () => {
    render(<ProfessionalExperience />);
    expect(screen.getByText(/OLLMANN ROBIN/i)).toBeInTheDocument();
    expect(screen.getByText(/november 2020/i)).toBeInTheDocument();
  });
});
