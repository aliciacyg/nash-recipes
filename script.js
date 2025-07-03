const headers = document.querySelectorAll('.name');
const contents = document.querySelectorAll('.recipe');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    contents.forEach((content, i) => {
      if (i === index) {
        const isOpen = content.style.maxHeight;
        contents.forEach(c => {
          c.style.maxHeight = null;
          c.classList.remove('open');
        });
        if (!isOpen) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.classList.add('open');
        }
      } else {
        contents[i].style.maxHeight = null;
        contents[i].classList.remove('open');
      }
    });
  });
});

const form = document.getElementById("grocery-form");
const input = document.getElementById("item-input");
const list = document.getElementById("grocery-list")

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Do not reload the page, that would clear the list
  const itemText = input.value.trim();
  if (itemText === "") return; // Don't do anything if no grocery item
  // Create a checkable list entry
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  // Create the text
  const span = document.createElement("span");
  span.textContent = itemText;
  // Strikethrough when checked (will add later)
  checkbox.addEventListener("change", () => {
    span.classList.toggle("checked", checkbox.checked);
  });
  
  list.appendChild(checkbox);
  list.appendChild(span);

  input.value = "";
  input.focus();
})