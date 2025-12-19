export default function decorate(block) {
  const colorClass = block.children[1]?.textContent?.trim();
  if (colorClass) {
    block.children[0].classList.add(colorClass);
  }
  block.children[1].remove();
}
