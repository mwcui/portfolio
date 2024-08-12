// window.addEventListener("DOMContentLoaded", () => {
//     const blockContainer = document.getElementById("blocks");
//     const blockSize = 50;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / blockSize);
//     const numRows = Math.ceil(screenHeight / blockSize);
//     const numBlocks = numCols * numRows;
  
//     function createBlocks() {
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
//         index - 1,
//         index + 1,
//         index - numCols,
//         index + numCols,
//         index - numCols - 1,
//         index - numCols + 1,
//         index + numCols - 1,
//         index + numCols + 1,
//       ].filter(
//         (i) =>
//           i >= 0 &&
//           i < numBlocks &&
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
  
//     createBlocks();
//   });

// "use client"

// import React, { useEffect } from 'react';

// const InteractiveBlocks = () => {
//   useEffect(() => {
//     const blockContainer = document.getElementById("blocks");
//     const blockSize = 50;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / blockSize);
//     const numRows = Math.ceil(screenHeight / blockSize);
//     const numBlocks = numCols * numRows;

//     function createBlocks() {
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
//         index - 1,
//         index + 1,
//         index - numCols,
//         index + numCols,
//         index - numCols - 1,
//         index - numCols + 1,
//         index + numCols - 1,
//         index + numCols + 1,
//       ].filter(
//         (i) =>
//           i >= 0 &&
//           i < numBlocks &&
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

//     createBlocks();

//     // Cleanup function to remove blocks and event listeners when component unmounts
//     return () => {
//       while (blockContainer.firstChild) {
//         blockContainer.removeChild(blockContainer.firstChild);
//       }
//     };
//   }, []);

//   return <div id="blocks" style={{ position: 'relative', width: '100%', height: '100%' }}></div>;
// };

// export default InteractiveBlocks;


// "use client"

// import React, { useEffect } from 'react';

// const InteractiveBlocks = ({ children }) => {
//   useEffect(() => {
//     const blockContainer = document.getElementById("blocks");
//     const blockSize = 50;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / blockSize);
//     const numRows = Math.ceil(screenHeight / blockSize);
//     const numBlocks = numCols * numRows;

//     function createBlocks() {
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
//         index - 1,
//         index + 1,
//         index - numCols,
//         index + numCols,
//         index - numCols - 1,
//         index - numCols + 1,
//         index + numCols - 1,
//         index + numCols + 1,
//       ].filter(
//         (i) =>
//           i >= 0 &&
//           i < numBlocks &&
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

//     createBlocks();

//     // Cleanup blocks on component unmount
//     return () => {
//       while (blockContainer.firstChild) {
//         blockContainer.removeChild(blockContainer.firstChild);
//       }
//     };
//   }, []);

//   return (
//     <div id="blocks" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
//       {children && (
//         <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InteractiveBlocks;



// "use client";

// import React, { useEffect } from 'react';

// const InteractiveBlocks = ({ children }) => {
//   useEffect(() => {
//     const blockContainer = document.getElementById("blocks");
//     const blockSize = 50;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil(screenWidth / blockSize);
//     const numRows = Math.ceil(screenHeight / blockSize);
//     const numBlocks = numCols * numRows;

//     function createBlocks() {
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
//         index - 1,
//         index + 1,
//         index - numCols,
//         index + numCols,
//         index - numCols - 1,
//         index - numCols + 1,
//         index + numCols - 1,
//         index + numCols + 1,
//       ].filter(
//         (i) =>
//           i >= 0 &&
//           i < numBlocks &&
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

//     createBlocks();

//     // Cleanup blocks on component unmount
//     return () => {
//       while (blockContainer.firstChild) {
//         blockContainer.removeChild(blockContainer.firstChild);
//       }
//     };
//   }, []);

//   return (
//     <div id="blocks" className="absolute top-0 left-0 w-full h-full z-10">
//       {children && (
//         <div className="relative z-20 w-full h-full">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InteractiveBlocks;



// "use client";

// import React, { useEffect } from 'react';

// const InteractiveBlocks = () => {
//   useEffect(() => {
//     const blockContainer = document.getElementById("blocks");
//     const blockSize = 50;
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight;
//     const numCols = Math.ceil((screenWidth / blockSize)+1);
//     const numRows = Math.ceil((screenHeight / blockSize)+1);
//     const numBlocks = numCols * numRows;

//     function createBlocks() {
//       blockContainer.innerHTML = ''; // Clear existing blocks
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
//         index - 1,
//         index + 1,
//         index - numCols,
//         index + numCols,
//         index - numCols - 1,
//         index - numCols + 1,
//         index + numCols - 1,
//         index + numCols + 1,
//       ].filter(
//         (i) =>
//           i >= 0 &&
//           i < numBlocks &&
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

//     createBlocks();

//     // Cleanup blocks on component unmount
//     return () => {
//       blockContainer.innerHTML = ''; // Clear blocks on cleanup
//     };
//   }, []);

//   return (
//     <div id="blocks" className="absolute w-full h-full z-0">
//     </div>
//   );
// };

// export default InteractiveBlocks;



// "use client";

// import React, { useEffect } from 'react';

// const InteractiveBlocks = () => {
//   useEffect(() => {
//     const blockSize = 50;
//     let blockContainer = document.getElementById("blocks");

//     function createBlocks() {
//       blockContainer.innerHTML = '';
//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       const numCols = Math.ceil((screenWidth / blockSize) + 1);
//       const numRows = Math.ceil((screenHeight / blockSize) + 1);
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
//         index - 1,
//         index + 1,
//         index - numCols,
//         index + numCols,
//         index - numCols - 1,
//         index - numCols + 1,
//         index + numCols - 1,
//         index + numCols + 1,
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
    const blockSize = 50;
    let numCols, numRows; // Declare numCols and numRows in a higher scope
    const blockContainer = document.getElementById("blocks");

    function createBlocks() {
      blockContainer.innerHTML = '';
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      numCols = Math.ceil((screenWidth / blockSize)+2);
      numRows = Math.ceil((screenHeight / blockSize)+2);
      const numBlocks = numCols * numRows;

      for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.dataset.index = i;
        block.addEventListener("mousemove", highlightRandomNeighbors);
        blockContainer.appendChild(block);
      }
    }

    function highlightRandomNeighbors() {
      const index = parseInt(this.dataset.index);
      const neighbors = [
        index - 1,
        index + 1,
        index - numCols,
        index + numCols,
        index - numCols - 1,
        index - numCols + 1,
        index + numCols - 1,
        index + numCols + 1,
      ].filter(
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

    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    // Create the initial blocks
    createBlocks();

    // Debounced resize event
    const handleResize = debounce(createBlocks, 300);

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

  return <div id="blocks" style={{ position: 'absolute', top: 0, left: 0, width: '110%', height: '110%' }}></div>;
};

export default InteractiveBlocks;

