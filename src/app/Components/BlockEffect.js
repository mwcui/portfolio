// "use client";

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const BlockEffect = () => {
//   useEffect(() => {
//     const squareContainer = document.getElementById("square-container");
//     const squareSize = 100;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / squareSize);
//     const numRows = Math.ceil(screenHeight / squareSize);
//     const numSquares = numCols * numRows;

//     squareContainer.style.width = `${numCols * squareSize + 50}px`;
//     squareContainer.style.height = `${numRows * squareSize + 50}px`;

//     let squares = [];

//     function createSquares() {
//       for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement("div");
//         square.classList.add("square");
//         squareContainer.appendChild(square);
//         squares.push(square);
//       }
//     }

//     function animateSquares() {
//       gsap.fromTo(
//         squares,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           delay: 0.5,
//           duration: 0.0005,
//           stagger: {
//             each: 0.004,
//             from: "random",
//           },
//         }
//       );

//       gsap.to(squares, {
//         opacity: 0,
//         delay: 1.5,
//         duration: 0.0005,
//         stagger: {
//           each: 0.004,
//           from: "random",
//         },
//       });
//     }

//     // Initialize the squares and animate
//     createSquares();
//     animateSquares();

//     // Cleanup on component unmount
//     return () => {
//       while (squareContainer.firstChild) {
//         squareContainer.removeChild(squareContainer.firstChild);
//       }
//     };
//   }, []);

//   return (
//     <div id="square-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10000, pointerEvents: 'none' }}></div>
//   );
// };

// export default BlockEffect;



// this works. generates the blocks first before showing the home page. orange block does not work tho

// "use client";

// import React, { useEffect, useState } from 'react';
// import { gsap } from 'gsap';

// const BlockEffect = ({ onComplete }) => {
//   useEffect(() => {
//     const squareContainer = document.getElementById("square-container");
//     const squareSize = 100;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / squareSize);
//     const numRows = Math.ceil(screenHeight / squareSize);
//     const numSquares = numCols * numRows;

//     squareContainer.style.width = `${numCols * squareSize + 50}px`;
//     squareContainer.style.height = `${numRows * squareSize + 50}px`;

//     let squares = [];

//     function createSquares() {
//       for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement("div");
//         square.classList.add("square");
//         squareContainer.appendChild(square);
//         squares.push(square);
//       }
//     }

//     function animateSquares() {
//       gsap.fromTo(
//         squares,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           delay: 0.5,
//           duration: 0.0005,
//           stagger: {
//             each: 0.004,
//             from: "random",
//           },
//           onComplete: () => {
//             gsap.to(squares, {
//               opacity: 0,
//               delay: 1.5,
//               duration: 0.0005,
//               stagger: {
//                 each: 0.004,
//                 from: "random",
//               },
//               onComplete: onComplete, // Notify parent when animation is complete
//             });
//           },
//         }
//       );
//     }

//     // Initialize the squares and animate
//     createSquares();
//     animateSquares();

//     // Cleanup on component unmount
//     return () => {
//       while (squareContainer.firstChild) {
//         squareContainer.removeChild(squareContainer.firstChild);
//       }
//     };
//   }, [onComplete]);

//   return (
//     <div
//       id="square-container"
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         zIndex: 10000,
//         pointerEvents: 'none',
//         backgroundColor: '#0C3B65', // Ensure background covers all content
//       }}
//     ></div>
//   );
// };

// export default BlockEffect;



// works. onComplete pass through

// "use client";

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const BlockEffect = ({ onComplete }) => {
//   useEffect(() => {
//     const squareContainer = document.getElementById("square-container");
//     const squareSize = 100;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / squareSize);
//     const numRows = Math.ceil(screenHeight / squareSize);
//     const numSquares = numCols * numRows;

//     // Set the width and height of the square container
//     squareContainer.style.width = `${numCols * squareSize + 50}px`;
//     squareContainer.style.height = `${numRows * squareSize + 50}px`;

//     // Print the values to the console for debugging
//     console.log("screenWidth:", screenWidth);
//     console.log("screenHeight:", screenHeight);
//     console.log("Number of squares:", numSquares);
//     console.log("Container width:", squareContainer.style.width);
//     console.log("Container height:", squareContainer.style.height);

//     // add the measurements are coming out correctly

//     let squares = [];

//     function createSquares() {
//       for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement("div");
//         square.classList.add("square");
//         squareContainer.appendChild(square);
//         squares.push(square);
    
//         // Log each square creation
//         console.log(`Square ${i + 1} created`);
//       }
    
//       // Log the total number of squares created
//       console.log("Total squares created:", squares.length);
    
//       // Verify the number of child elements in the container
//       console.log("Number of child elements in container:", squareContainer.children.length);
//     }
    
//     // squares and createsquares is performing correctly

//     function animateSquares() {
//       gsap.fromTo(
//         squares,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           delay: 0.5,
//           duration: 0.0005,
//           stagger: {
//             each: 0.004,
//             from: "random",
//           },
//           onComplete: () => {
//             gsap.to(squares, {
//               opacity: 0,
//               delay: 1.5,
//               duration: 0.0005,
//               stagger: {
//                 each: 0.004,
//                 from: "random",
//               },
//               onComplete: onComplete, // Notify parent when animation is complete
//             });
//           },
//         }
//       );
//     }

//     // Initialize the squares and animate
//     createSquares();
//     animateSquares();

//     // Cleanup on component unmount
//     return () => {
//       while (squareContainer.firstChild) {
//         squareContainer.removeChild(squareContainer.firstChild);
//       }
//     };
//   }, [onComplete]);

//   return (
//     <div
//       id="square-container"
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         zIndex: 10000,
//         pointerEvents: 'none',
//         backgroundColor: '#0C3B65', // Ensure background covers all content
//       }}
//     ></div>
//   );
// };

// export default BlockEffect;






// "use client";

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const BlockEffect = ({ onComplete }) => {
//   useEffect(() => {
//     const squareContainer = document.getElementById("square-container");
//     const squareSize = 100;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / squareSize);
//     const numRows = Math.ceil(screenHeight / squareSize);
//     const numSquares = numCols * numRows;

//     // Set the width and height of the square container
//     squareContainer.style.width = `${numCols * squareSize}px`;
//     squareContainer.style.height = `${numRows * squareSize}px`;

//     // Print the values to the console for debugging
//     console.log("screenWidth:", screenWidth);
//     console.log("screenHeight:", screenHeight);
//     console.log("Number of squares:", numSquares);
//     console.log("Container width:", squareContainer.style.width);
//     console.log("Container height:", squareContainer.style.height);

//     let squares = [];

//     function createSquares() {
//       for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement("div");
//         square.classList.add("square");
//         squareContainer.appendChild(square);
//         squares.push(square);

//         // Log each square creation
//         console.log(`Square ${i + 1} created`);

//         // Log the position of each square
//         const squarePosition = square.getBoundingClientRect();
//         console.log(`Square ${i + 1} position:`, squarePosition);
//       }

//       // Log the total number of squares created
//       console.log("Total squares created:", squares.length);

//       // Verify the number of child elements in the container
//       console.log("Number of child elements in container:", squareContainer.children.length);
//     }

//     function animateSquares() {
//       gsap.fromTo(
//         squares,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           delay: 0.5,
//           duration: 0.0005,
//           stagger: {
//             each: 0.004,
//             from: "random",
//           },
//           onComplete: () => {
//             gsap.to(squares, {
//               opacity: 0,
//               delay: 1.5,
//               duration: 0.0005,
//               stagger: {
//                 each: 0.004,
//                 from: "random",
//               },
//               onComplete: onComplete, // Notify parent when animation is complete
//             });
//           },
//         }
//       );
//     }

//     // Initialize the squares and animate
//     createSquares();
//     animateSquares();

//     // Cleanup on component unmount
//     return () => {
//       while (squareContainer.firstChild) {
//         squareContainer.removeChild(squareContainer.firstChild);
//       }
//     };
//   }, [onComplete]);

//   return (
//     <div
//       id="square-container"
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         zIndex: 10000,
//         pointerEvents: 'none',
//         backgroundColor: '#0C3B65', // Ensure background covers all content
//       }}
//     ></div>
//   );
// };

// export default BlockEffect;



"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BlockEffect = ({ onComplete }) => {
  useEffect(() => {
    const squareContainer = document.getElementById("square-container");
    const squareSize = 100;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / squareSize);
    const numRows = Math.ceil(screenHeight / squareSize);
    const numSquares = numCols * numRows;

    // Set the width and height of the square container
    squareContainer.style.width = `${numCols * squareSize}px`;
    squareContainer.style.height = `${numRows * squareSize}px`;

    // Print the values to the console for debugging
    console.log("screenWidth:", screenWidth);
    console.log("screenHeight:", screenHeight);
    console.log("Number of squares:", numSquares);
    console.log("Container width:", squareContainer.style.width);
    console.log("Container height:", squareContainer.style.height);

    let squares = [];

    function createSquares() {
      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        // Calculate row and column position
        const row = Math.floor(i / numCols);
        const col = i % numCols;
        
        // Position the square within the container
        square.style.position = "absolute";
        square.style.top = `${row * squareSize}px`;
        square.style.left = `${col * squareSize}px`;
        
        squareContainer.appendChild(square);
        squares.push(square);

        // Log each square creation
        console.log(`Square ${i + 1} created at row ${row}, col ${col}`);

        // Log the position of each square
        const squarePosition = square.getBoundingClientRect();
        console.log(`Square ${i + 1} position:`, squarePosition);
      }

      // Log the total number of squares created
      console.log("Total squares created:", squares.length);

      // Verify the number of child elements in the container
      console.log("Number of child elements in container:", squareContainer.children.length);
    }

    function animateSquares() {
      gsap.fromTo(
        squares,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.5,
          duration: 0.0005,
          stagger: {
            each: 0.004,
            from: "random",
          },
          onComplete: () => {
            gsap.to(squares, {
              opacity: 0,
              delay: .7,
              duration: 0.0005,
              stagger: {
                each: 0.004,
                from: "random",
              },
              onComplete: onComplete, // Notify parent when animation is complete
            });
          },
        }
      );
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
        backgroundColor: '#ffffff', // Ensure background covers all content
      }}
    ></div>
  );
};

export default BlockEffect;
