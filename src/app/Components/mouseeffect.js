
// "use client";

// import React, { useEffect } from 'react';

// const InteractiveBlocks = () => {
//   useEffect(() => {
//     const blockSize = 20;
//     let numCols, numRows; // Declare numCols and numRows in a higher scope so that highlightRandomNeighbors() can access it
//     const blockContainer = document.getElementById("blocks");

//     function createBlocks() {
//       blockContainer.innerHTML = '';
//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       numCols = Math.ceil((screenWidth + blockSize + blockSize + blockSize) / blockSize); //the extra + blocksize is just so that we can cover the entire screen. otherwise there were gaps on the screen
//       numRows = Math.ceil((screenHeight + blockSize + blockSize + blockSize) / blockSize);
//       const numBlocks = numCols * numRows;

//       for (let i = 0; i < numBlocks; i++) {
//         const block = document.createElement("div");
//         block.classList.add("block");
//         block.dataset.index = i;
//         block.addEventListener("mousemove", highlightRandomNeighbors);
//         blockContainer.appendChild(block);
//       }
//     }

//     function highlightRandomNeighbors() {
//       const index = parseInt(this.dataset.index);
//       const neighbors = [
//         // this increases the number of boxes that highlight
//         // index - 1,
//         // index + 1,
//         // index - numCols,
//         // index + numCols,
//         // index - numCols - 1,
//         // index - numCols + 1,
//         // index + numCols - 1,
//         // index + numCols + 1,
//       ].filter(
//         (i) =>
//           i >= 0 &&
//           i < blockContainer.children.length &&
//           Math.abs((i % numCols) - (index % numCols)) <= 1
//       );

//       this.classList.add("highlight");
//       setTimeout(() => {
//         this.classList.remove("highlight");
//       }, 500);

//       shuffleArray(neighbors)
//         .slice(0, 1)
//         .forEach((nIndex) => {
//           const neighbor = blockContainer.children[nIndex];
//           if (neighbor) {
//             neighbor.classList.add("highlight");
//             setTimeout(() => {
//               neighbor.classList.remove("highlight");
//             }, 500);
//           }
//         });
//     }

//     function shuffleArray(array) {
//       for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//       return array;
//     }

//     function debounce(func, wait) {
//       let timeout;
//       return function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), wait);
//       };
//     }

//     // Create the initial blocks
//     createBlocks();

//     // Debounced resize event
//     const handleResize = debounce(createBlocks, 300);

//     // Add event listener for window resize to adjust blocks
//     window.addEventListener('resize', handleResize);

//     // Cleanup: Remove event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       while (blockContainer.firstChild) {
//         blockContainer.removeChild(blockContainer.firstChild);
//       }
//     };
//   }, []);

//   return <div id="blocks" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>;
// };

// export default InteractiveBlocks;


"use client";

import React, { useEffect } from 'react';

const InteractiveBlocks = () => {
  useEffect(() => {
    const blockSize = 20;
    let numCols, numRows;
    const blockContainer = document.getElementById("blocks");

    function createBlocks() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const newNumCols = Math.ceil((screenWidth + blockSize + blockSize + blockSize) / blockSize);
      const newNumRows = Math.ceil((screenHeight + blockSize + blockSize + blockSize) / blockSize);

      if (newNumCols !== numCols || newNumRows !== numRows) {
        // If the number of columns or rows has changed, update the grid
        numCols = newNumCols;
        numRows = newNumRows;
        const numBlocks = numCols * numRows;

        const currentBlocks = blockContainer.children.length;
        if (currentBlocks < numBlocks) {
          // Add blocks if the new grid is larger
          for (let i = currentBlocks; i < numBlocks; i++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.dataset.index = i;
            block.addEventListener("mousemove", highlightRandomNeighbors);
            blockContainer.appendChild(block);
          }
        } else if (currentBlocks > numBlocks) {
          // Remove blocks if the new grid is smaller
          for (let i = currentBlocks - 1; i >= numBlocks; i--) {
            blockContainer.removeChild(blockContainer.lastChild);
          }
        }
      }
    }

    function highlightRandomNeighbors() {
      const index = parseInt(this.dataset.index);
      const neighbors = [].filter(
        (i) =>
          i >= 0 &&
          i < blockContainer.children.length &&
          Math.abs((i % numCols) - (index % numCols)) <= 1
      );

      this.classList.add("highlight");
      setTimeout(() => {
        this.classList.remove("highlight");
      }, 500);

      shuffleArray(neighbors)
        .slice(0, 1)
        .forEach((nIndex) => {
          const neighbor = blockContainer.children[nIndex];
          if (neighbor) {
            neighbor.classList.add("highlight");
            setTimeout(() => {
              neighbor.classList.remove("highlight");
            }, 500);
          }
        });
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Create the initial blocks
    createBlocks();

    // Update blocks on resize
    const handleResize = () => {
      createBlocks();
    };

    // Add event listener for window resize to adjust blocks
    window.addEventListener('resize', handleResize);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      while (blockContainer.firstChild) {
        blockContainer.removeChild(blockContainer.firstChild);
      }
    };
  }, []);

  return <div id="blocks" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>;
};

export default InteractiveBlocks;
