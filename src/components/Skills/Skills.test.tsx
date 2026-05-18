import {describe,it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Skills from "./Skills";

describe('Skills Component', () => {
  it('should render the skills section title', () => {
    render(<Skills />);
    
    // On vérifie que le titre "Skills" est bien présent à l'écran
    const titleElement = screen.getByRole('heading', { name: /skills/i });
    expect(titleElement).toBeInTheDocument();
  });
  // --- NOUVEAU TEST ---
  it('should render technological categories and skills', () => {
    render(<Skills />);
    
    // On s'attend à trouver une catégorie "Frontend"
    expect(screen.getByText(/frontend/i)).toBeInTheDocument();
    
    // On s'attend à trouver tes compétences phares dedans
    expect(screen.getByText(/react/i)).toBeInTheDocument();
    expect(screen.getByText(/vue\.js/i)).toBeInTheDocument();
    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
  });
  it('should render all technical categories', () => {
    render(<Skills />);
    
    // Vérification de tes catégories de structure
    expect(screen.getByText(/frontend :/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend :/i)).toBeInTheDocument();
    expect(screen.getByText(/Databases :/i)).toBeInTheDocument();
    
    // Vérification de technos spécifiques à l'intérieur
    expect(screen.getByText(/Vue\.js/i)).toBeInTheDocument();
    expect(screen.getByText(/VB\.NET/i)).toBeInTheDocument();
  });
});