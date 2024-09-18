// this is the block reveal effect on initial page load and switching pages from the menu
// got this from a codegrid youtube video

"use client";

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const BlockEffect = ({ onComplete, isInitialLoad, onMidpointCalculated }) => {

  // these are the screen constants for the block effect animation. Used to calculate the animation duration
  const [screenConstantFull, setScreenConstantFull] = useState(0.0045); // Default to iPhone size
  const [screenConstantHalf, setScreenConstantHalf] = useState(0.0045); // Default to iPhone size

  // this part is super important. it handles how quickly the block effect occurs based on screen size
  // took a lot of tweaking to get it to where it is now
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setScreenConstantFull(0.0045); // iPhone size
        setScreenConstantHalf(0.0045); // iPhone size
      } else if (window.innerWidth < 1024) {
        setScreenConstantFull(0.0018); // iPad size
        setScreenConstantHalf(0.002); // iPad size
      } else {
        setScreenConstantFull(0.0015); // Laptop size
        setScreenConstantHalf(0.0015); // Laptop size
      }
    }

    // this section runs the handleResize function once when the page loads, adds the event listener (which reads the page for size changes) then removes the event listener when the page is unmounted (preventing memory leaks)

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // this is the block effect animation
  useEffect(() => {

    // sets the base variables for the block effect animation
    const squareContainer = document.getElementById("square-container");
    const squareSize = 50;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / squareSize);
    const numRows = Math.ceil(screenHeight / squareSize);
    const numSquares = numCols * numRows;

    // Set the width and height of the square container
    squareContainer.style.width = `${numCols * squareSize}px`;
    squareContainer.style.height = `${numRows * squareSize}px`;

    // Calculate the estimated duration for the first half of the animation
    const animationDuration = (numSquares - 1) * screenConstantFull + screenConstantFull;
    const animateSquaresFullMidpoint = animationDuration * 1000; // Convert to milliseconds
    

    // used for debugging/testing in the console
    console.log(`Estimated animation midpoint: ${animateSquaresFullMidpoint} ms`);

    onMidpointCalculated(animateSquaresFullMidpoint);

    let squares = [];

    // this function creates the squares for the block effect animation
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

    // this function animates the squares for the block effect animation (specifically on initial page load)
    function animateSquaresHalf() {
      // Start with squares fully visible and fade them out
      gsap.to(squares, {
        opacity: 0,    // Fade out the squares
        delay: 0,    // Optional delay before the animation starts
        duration: 0.0005,
        stagger: {
          each: screenConstantHalf,
          from: "random",
        },
        onComplete: onComplete, // Notify parent when animation is complete
      });
    }


    // this function animates the squares for the block effect animation (specifically on switching pages from the menu)
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
            each: screenConstantFull,
            from: "random",
          },
          onComplete: () => {
            midpointTime = performance.now();
            console.log(`First half duration: ${midpointTime - startTime} ms`);

            gsap.to(squares, {
              opacity: 0, // Fade out the squares
              delay: 0.02,
              duration: 0.0005,
              stagger: {
                each: screenConstantFull,
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



    // Initialize the squares and figures out which animation to run based on initial page load or switching pages from the menu
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
  }, [onComplete, isInitialLoad, onMidpointCalculated, screenConstantFull, screenConstantHalf]); // all these values, when changed, will cause the useEffect to run again

  // the div that contains the squares for the block effect animation. basically how it looks on the screen
  return (
    <div
      id="square-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        pointerEvents: 'none',
        backgroundColor: 'transparent', // Ensure container is transparent
      }}
    ></div>
  );
};

export default BlockEffect;
