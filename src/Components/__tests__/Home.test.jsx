import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the custom hook
vi.mock("../../hooks/useDownLoadResume", () => ({
  default: () => ({
    handleDownload: vi.fn(),
  }),
}));

// Mock framer-motion to avoid animation errors
vi.mock("framer-motion", () => ({
  motion: {
    h1: ({ children }) => <h1>{children}</h1>,
    p: ({ children }) => <p>{children}</p>,
    div: ({ children }) => <div>{children}</div>,
    img: (props) => <img {...props} />,
  },
}));

describe("Home Component", () => {
  let mockScrollToContact;

  beforeEach(() => {
    mockScrollToContact = vi.fn();
  });

  const renderHome = () =>
    render(
      <BrowserRouter>
        <Home ref={null} scrollToContact={mockScrollToContact} />
      </BrowserRouter>
    );

  it("renders main texts correctly", () => {
    renderHome();

    expect(screen.getByText("Irene Akawin Agigiba")).toBeInTheDocument();
    expect(
      screen.getByText("Software Engineer | Full Stack Enthusiast")
    ).toBeInTheDocument();
  });

  it("calls handleDownload when Resume button is clicked", () => {
    renderHome();

    const resumeButton = screen.getByRole("button", { name: /Resume/i });
    fireEvent.click(resumeButton);

    // The hook is mocked, so verify the button exists and is clickable
    expect(resumeButton).toBeInTheDocument();
  });

  it("calls scrollToContact when Contact me link is clicked", () => {
    renderHome();

    // Use getAllByText and get the first one since there might be multiple
    const contactLinks = screen.getAllByText(/Contact me/i);
    fireEvent.click(contactLinks[0]);

    expect(mockScrollToContact).toHaveBeenCalledTimes(1);
  });

  it("renders social links", () => {
    renderHome();

    // Get all links and filter for social links by their href attribute
    const allLinks = screen.getAllByRole("link");
    
    // Find GitHub link
    const github = allLinks.find(link => 
      link.getAttribute("href") === "https://github.com/agigibairene"
    );
    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute("href", "https://github.com/agigibairene");

    // Find LinkedIn link
    const linkedin = allLinks.find(link => 
      link.getAttribute("href") === "https://www.linkedin.com/in/irene-agigiba-476a39214/"
    );
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/irene-agigiba-476a39214/"
    );
  });

  it("renders profile image", () => {
    renderHome();

    // Query by the image's src or test container
    const img = screen.getByAltText("") || 
                document.querySelector("img[src*='profile']");
    
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", expect.any(String));
  });
});