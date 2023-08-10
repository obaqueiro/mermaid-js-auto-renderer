# Mermaid JS Auto Renderer

A very simple script that allows you to create HTML pages that render into [MermaidJS](https://mermaid.js.org/) diagrams. 

The general idea is that you can create diagram documentation in your code repo with HTML files that look like this:


```
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
<script src='https://cdn.jsdelivr.net/gh/obaqueiro/mermaid-js-auto-renderer@master/mermaid-js-autorenderer.js'/></script>
```

And are rendered as diagrams in the browser.

## Directives

It supports the use of Directives but you *MUST* use double quotes like this:

```
%%{ init: { "sequence": { "noteAlign": "left"} } }%%
```
