export default function decorate(block) {
  // Get color value from authoring
  const colorClass = block.children[1]?.textContent?.trim();

  // Apply color class to text container
  if (colorClass) {
    block.children[0].classList.add(colorClass);
  }

  // Remove authoring-only color field
  block.children[1].remove();
}
