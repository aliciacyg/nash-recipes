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