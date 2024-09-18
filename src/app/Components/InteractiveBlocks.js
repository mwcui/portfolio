// this is the blueprint background + highlight effect for the mouse

"use client";

import React, { useEffect } from 'react';

const InteractiveBlocks = () => {
  useEffect(() => {
    const blockSize = 20;
    let numCols, numRows;
    const blockContainer = document.getElementById("blocks");

    function createBlocks() {
      const screenWidth = document.documentElement.scrollWidth;
      const screenHeight = document.documentElement.scrollHeight;
      const newNumCols = Math.ceil((screenWidth + blockSize) / blockSize);
      const newNumRows = Math.ceil((screenHeight + blockSize + blockSize) / blockSize); // the extra blockSize is to account for the extra space at the bottom of the screen

      if (newNumCols !== numCols || newNumRows !== numRows) {
        numCols = newNumCols;
        numRows = newNumRows;
        const numBlocks = numCols * numRows;

        const currentBlocks = blockContainer.children.length;
        if (currentBlocks < numBlocks) {
          for (let i = currentBlocks; i < numBlocks; i++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.dataset.index = i;
            block.addEventListener("mousemove", highlightRandomNeighbors);

            blockContainer.appendChild(block);
          }
        } else if (currentBlocks > numBlocks) {
          for (let i = currentBlocks - 1; i >= numBlocks; i--) {
            blockContainer.removeChild(blockContainer.lastChild);
          }
        }
      }
    }

    // this creates the highlight tail effect
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
    }

    // Initial creation
    createBlocks();

    // Update on resize or scroll
    const handleResizeOrScroll = () => {
      createBlocks();
    };

    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
      while (blockContainer.firstChild) {
        blockContainer.removeChild(blockContainer.firstChild);
      }
    };
  }, []);

  return <div id="blocks" style={{ position: 'fixed', top: 0, left: 0, width: '105%', height: '100%', }}></div>;
};

export default InteractiveBlocks;
