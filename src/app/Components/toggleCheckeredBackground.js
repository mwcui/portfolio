// export function toggleCheckeredBackground(isOpen) {
//     const htmlElement = document.documentElement;
//     const bodyElement = document.body;
  
//     if (isOpen) {
//       htmlElement.classList.add('checkered-bg');
//       bodyElement.classList.add('checkered-bg');
//     } else {
//       htmlElement.classList.remove('checkered-bg');
//       bodyElement.classList.remove('checkered-bg');
//     }
//   }
  

export function toggleCheckeredBackground(isOpen) {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
  
    if (isOpen) {
      htmlElement.classList.add('checkered-bg');
      bodyElement.classList.add('checkered-bg');
    } else {
      htmlElement.classList.remove('checkered-bg');
      bodyElement.classList.remove('checkered-bg');
    }
  }
  
  