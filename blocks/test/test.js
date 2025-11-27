export default function decorate(block) {
  block.classList.add('test-class');
  const el = `${block.children[0].textContent.trim()} test`;
  block.children[0].innerText = el;
}
