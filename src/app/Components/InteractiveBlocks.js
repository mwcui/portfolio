// this is the blueprint background + highlight effect for the mouse

"use client";

import React, { useEffect } from 'react';

const InteractiveBlocks = () => {
  useEffect(() => {
    const blockSize = 20; // Size of each block
    const blockContainer = document.getElementById("blocks");


    // this here makes it so that the blocks are only created in the visible area of the screen. it is set for mac pro display.
    // the background is also set to stay in place. so the content on the page moves, but the background stays in place.
    // this is to keep the performance high. before i had event listeners to track both resize and scroll events. performance was bad with that
    // now its just resizing, no more scroll events.

    function createBlocks() {
      const screenWidth = window.innerWidth; // Use innerWidth for visible area
      const screenHeight = window.innerHeight; // Use innerHeight for visible area
      const numCols = Math.ceil(screenWidth / blockSize); // Calculate number of columns based on visible width
      const numRows = Math.ceil(screenHeight / blockSize); // Calculate number of rows based on visible height
      const numBlocks = numCols * numRows; // Total number of blocks based on visible area

      // Limit the number of blocks to approximately 13,500
      // this here makes it so that the blocks are not created in the invisible areas of the screen
      // the screen approx needs 13,500 blocks to fill the screen. so i gave it a buffer of 1,500
      const maxBlocks = 15000;
      const blocksToCreate = Math.min(numBlocks, maxBlocks);

      // Clear existing blocks
      while (blockContainer.firstChild) {
        blockContainer.removeChild(blockContainer.firstChild);
      }

      // Create blocks for the visible area
      for (let i = 0; i < blocksToCreate; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.dataset.index = i;

        // Set block size and position
        block.style.width = `${blockSize}px`;
        block.style.height = `${blockSize}px`;
        block.style.position = 'absolute';
        block.style.left = `${(i % numCols) * blockSize}px`;
        block.style.top = `${Math.floor(i / numCols) * blockSize}px`;

        // Add mousemove event listener for highlight effect
        block.addEventListener("mousemove", highlightRandomNeighbors);

        blockContainer.appendChild(block);
      }

      // Log the total number of blocks created
      console.log(`Total number of blocks: ${blocksToCreate}`);
    }

    // This creates the highlight tail effect
    function highlightRandomNeighbors() {
      const index = parseInt(this.dataset.index);
      const neighbors = [].filter(
        (i) =>
          i >= 0 &&
          i < blockContainer.children.length &&
          Math.abs((i % Math.ceil(window.innerWidth / 20)) - (index % Math.ceil(window.innerWidth / 20))) <= 1
      );

      this.classList.add("highlight");
      setTimeout(() => {
        this.classList.remove("highlight");
      }, 500);
    }

    // Initial creation
    createBlocks();

    // Update on resize
    const handleResize = () => {
      createBlocks();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      while (blockContainer.firstChild) {
        blockContainer.removeChild(blockContainer.firstChild);
      }
    };
  }, []);

  return (
    <div id="blocks" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Background blocks will be rendered here */}
    </div>
  );
};

export default InteractiveBlocks;
