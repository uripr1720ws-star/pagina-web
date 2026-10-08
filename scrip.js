```javascript
// Animación suave al aparecer elementos al hacer scroll

const elementos = document.querySelectorAll(
    ".historia-img, .historia-text, .cancion, .quote-content"
);

const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all 0.8s ease";

    observer.observe(elemento);

});
```
