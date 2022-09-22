// getElementById()
Seleciona o elemento pelo id. (element)

// getElementByClassName()
Seleciona o elemento pelo nome da classe. (HTMLCollection)

// getElementByTagName()
Seleciona o elemento pelo nome da tag. (HTMLCollection)

// querySelector()
Seleciona o elemento pelo seletor. (element)

// querySelectorAll()
Seleciona o elemento com todos os seletores parecidos. (NodeList)

--------------------------------------------------------------------
Manipulando Conteúdo

// textContent
Manipula o texto do elemento.

// innerText
Manipula o texto interno do HTML.

// innerHTML
Manipula o conteúdo HTML interno.

// value
Manipula o valor do input.

// setAttribute, getAttribute e removeAttribute.
Manipula os atributos do elemento.

// style
Altera o estilo. [ element.style.color (qualquer propriedade CSS) ]

// classList
classList.add - liga
classList.remove - desliga
classList.toggle - interruptor de liga e desliga

--------------------------------------------------------------------

Navegando pelos elementos 

// parentNode
Mostra qual é o nó/elemento pai.

// childNodes
Mostra qual é o nó/elemento filho.

// nextSibling, previousSibling, nextElementSibling
Mostra qual é o elemento irmão.

--------------------------------------------------------------------

Criando e adicionando elementos

// createElement
Cria um elemento.
append - adiciona o elemento na página, após do script.
prepend - adiciona o elemento na página, depois do script.
insertBefore - adiciona o elemento na página, antes do elemento escolhido.

// onclick, ondrag, onmouseover (eventos de mouse)
// onkeydown, onkeyup, onkeypress (eventos de teclado)
Estes eventos podem ser inseridos direto no HTML.

// addEventListener()
Adiciona eventos no JS, pode ser os mesmos do HTML.

// function(event)
Podemos adicionar argumentos ao evento com essa função.