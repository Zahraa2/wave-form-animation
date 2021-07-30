const labels = document.querySelectorAll('.form-control label') ;

labels.forEach(label => {
  label.innerHTML = label.innerText
      .split('') // ['E','m','a','i','l']
      .map((letter , idx) => `<span style="transition-delay : ${idx * 100}ms">${letter}</span>`)
      .join(''); // turn the array into string
});