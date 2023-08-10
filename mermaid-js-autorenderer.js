// mermaid-diagrams auto-renderer; renders a document using JS-sequence-diagrams 
// Omar Baqueiro (omar@baqueiro.com)
// MIT License
document.body.removeChild(document.body.getElementsByTagName('script')[0]);

const source = document.body.innerHTML;
let settings = {};
document.body.textContent = "";

// Extract the settings and the diagram content
const parts = source.split("%%");
let diagram = null;

if (parts.length > 1) {
    settings = JSON.parse(parts[1].split(":").slice(1).join(':').trim().slice(0, -1));
    diagram = parts[2];
} else {
    diagram = parts[0];
}

console.log(diagram)

const x = document.createElement('pre');
x.classList.add('mermaid');
x.innerHTML= diagram;
document.body.appendChild(x);

const a = document.createElement('script'); 
a.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.3.0/mermaid.min.js');
document.head.appendChild(a);
a.onload = function() {
    // Initialize the mermaid library with the extracted settings
    mermaid.initialize(settings);
};

