// mermaid-diagrams auto-renderer; renders a document using JS-sequence-diagrams 
// Omar Baqueiro (omar@baqueiro.com)
// MIT License
const diagram = document.body.innerHTML;
document.body.textContent = "";
const x = document.createElement('pre');
x.classList.add('mermaid');
x.innerHTML= diagram;
x.removeChild(x.getElementsByTagName('script')[0])
document.body.appendChild(x);

const a = document.createElement('script'); a.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.3.0/mermaid.min.js');
document.head.appendChild(a);
