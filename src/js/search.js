document.querySelector("input[type=\"text\"]").addEventListener("input", (e) => {
    [...document.querySelectorAll("ul p")].forEach(item => {
      if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
        item.parentElement.style.display = "block"
      } 
      else {
        item.parentElement.style.display = "none"
      }
    });
  });