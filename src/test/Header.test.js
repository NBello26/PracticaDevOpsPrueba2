import React from "react";
import { render, screen } from "@testing-library/react";
import { CarritoContext } from "../context/CarritoContext";
import { BrowserRouter } from "react-router-dom";
import Header from "../atomic-desing/plantillas/Header";

describe("<Header />", () => {
  it("muestra la cantidad correcta de productos en el carrito", () => {
    const mockContext = {
      cart: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 3 }
      ],
      addToCart: jasmine.createSpy("addToCart"),
      removeFromCart: jasmine.createSpy("removeFromCart"),
      clearCart: jasmine.createSpy("clearCart"),
    };

    render(
      <BrowserRouter>
        <CarritoContext.Provider value={mockContext}>
          <Header />
        </CarritoContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Productos en carrito:/i).textContent).toContain("5");
  });

  it("muestra el título y enlaces de navegación", () => {
    render(
      <BrowserRouter>
        <CarritoContext.Provider value={{ cart: [] }}>
          <Header />
        </CarritoContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("🛍️ Mi Tienda")).toBeTruthy();
    expect(screen.getByText("Tienda React")).toBeTruthy();
    expect(screen.getByText("Ver carrito")).toBeTruthy();
  });
});

