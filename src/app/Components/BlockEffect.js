// KEEP THIS CODE. DO NOT LOSE THE EFFECT FROM 277 TO 303
// this works. 277 to 303 is what i need for the other pages.

"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BlockEffect = ({ onComplete }) => {
  useEffect(() => {
    const squareContainer = document.getElementById("square-container");
    const squareSize = 75;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / squareSize);
    const numRows = Math.ceil(screenHeight / squareSize);
    const numSquares = numCols * numRows;

    // Set the width and height of the square container
    squareContainer.style.width = `${numCols * squareSize}px`;
    squareContainer.style.height = `${numRows * squareSize}px`;

    let squares = [];

    function createSquares() {
      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Apply background color to squares
        square.style.backgroundColor = "#ffffff"; // Adjust color as needed
        
        // Calculate row and column position
        const row = Math.floor(i / numCols);
        const col = i % numCols;

        // Position the square within the container
        square.style.position = "absolute";
        square.style.top = `${row * squareSize}px`;
        square.style.left = `${col * squareSize}px`;

        squareContainer.appendChild(square);
        squares.push(square);
      }
    }

    // function animateSquares() {
    //   gsap.fromTo(
    //     squares,
    //     { opacity: 0 },  // Start with squares invisible
    //     {
    //       opacity: 1,    // Animate to fully visible
    //       delay: 0.5,
    //       duration: 0.0005,
    //       stagger: {
    //         each: 0.004,
    //         from: "random",
    //       },
    //       onComplete: () => {
    //         gsap.to(squares, {
    //           opacity: 0, // Fade out the squares
    //           delay: 0.7,
    //           duration: 0.0005,
    //           stagger: {
    //             each: 0.004,
    //             from: "random",
    //           },
    //           onComplete: onComplete, // Notify parent when animation is complete
    //         });
    //       },
    //     }
    //   );
    // }






    function animateSquares() {
      // Start with squares fully visible and fade them out
      gsap.to(squares, {
        opacity: 0,    // Fade out the squares
        delay: 0,    // Optional delay before the animation starts
        duration: 0.0005,
        stagger: {
          each: 0.003,
          from: "random",
        },
        onComplete: onComplete, // Notify parent when animation is complete
      });
    }

    // Initialize the squares and animate
    createSquares();
    animateSquares();

    // Cleanup on component unmount
    return () => {
      while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild);
      }
    };
  }, [onComplete]);

  return (
    <div
      id="square-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10000,
        pointerEvents: 'none',
        backgroundColor: 'transparent', // Ensure container is transparent
      }}
    ></div>
  );
};

export default BlockEffect;

