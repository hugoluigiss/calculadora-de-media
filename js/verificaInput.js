const inputs = document.querySelector('input');

inputs.addEventListener("keypress", function(e) {
    if(!numeroEPonto(e)) {
      e.preventDefault();
  }
});

function numeroEPonto(e) {
    let char = String.fromCharCode(e.keyCode);
    let pattern = '[0-9 |.]';
    if (char.match(pattern)) {
      return true;
  }
};