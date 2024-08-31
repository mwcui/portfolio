// KEEP THIS CODE. DO NOT LOSE THE EFFECT FROM 277 TO 303
// this works. 277 to 303 is what i need for the other pages.

"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BlockEffect = ({ onComplete, isInitialLoad, onMidpointCalculated }) => {
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

    // Calculate the estimated duration for the first half of the animation
    const animationDuration = (numSquares - 1) * 0.004 + 0.0005;
    const animateSquaresFullMidpoint = animationDuration * 1000; // Convert to milliseconds
    
    console.log(`Estimated animation midpoint: ${animateSquaresFullMidpoint} ms`);

    onMidpointCalculated(animateSquaresFullMidpoint);

    let squares = [];

    function createSquares() {
      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Apply background color to squares
        square.style.backgroundColor = "#F5F5F4"; // Adjust color as needed
        
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

    function animateSquaresFull() {
      const startTime = performance.now();
      let midpointTime;

      gsap.fromTo(
        squares,
        { opacity: 0 },  // Start with squares invisible
        {
          opacity: 1,    // Animate to fully visible
          delay: 0,
          duration: 0.0005,
          stagger: {
            each: 0.004,
            from: "random",
          },
          onComplete: () => {
            midpointTime = performance.now();
            console.log(`First half duration: ${midpointTime - startTime} ms`);

            gsap.to(squares, {
              opacity: 0, // Fade out the squares
              delay: 0.25,
              duration: 0.0005,
              stagger: {
                each: 0.004,
                from: "random",
              },
              onComplete: () => {
                const endTime = performance.now();
                console.log(`Second half duration: ${endTime - midpointTime} ms`);
                console.log(`Total animation duration: ${endTime - startTime} ms`);
                onComplete(); // Notify parent when animation is complete
              },
            });
          },
        }
      );
    }

    function animateSquaresHalf() {
      // Start with squares fully visible and fade them out
      gsap.to(squares, {
        opacity: 0,    // Fade out the squares
        delay: 0,    // Optional delay before the animation starts
        duration: 0.0005,
        stagger: {
          each: 0.005,
          from: "random",
        },
        onComplete: onComplete, // Notify parent when animation is complete
      });
    }

    // Initialize the squares and animate
    createSquares();
    if (isInitialLoad) {
      animateSquaresHalf();
    } else {
      animateSquaresFull();
    }

    // Cleanup on component unmount
    return () => {
      while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild);
      }
    };
  }, [onComplete, isInitialLoad, onMidpointCalculated]);

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

