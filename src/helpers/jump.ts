import Jump from 'jump.js';

export const jumpTo = (element: string): void => {
    const elementToJumpTo = document.querySelector(element);
    if (!elementToJumpTo) return;

    Jump(elementToJumpTo);
}

export default jumpTo;
