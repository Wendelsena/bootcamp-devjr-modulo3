
/*document.getElementById é uma forma de acessar o elemento html pelo id, exixte outros tbm. 
(Id, retorna apenas um elemento, mas existem outros que puxam uma coleção inteira por vez) */

function changeTrafficLight() { /* function changeTrafficLight() para associar o botão a cor */
    if (document.getElementById("yellow").className === "light yellow-light") { /* se no meu documento com id yellow for exatamente com a class = light yellow-light faça:   */

        document.getElementById("red").className="light red-light"; /* no onclick troca o nome da classe CSS */
        document.getElementById("yellow").className="light light-off"; /* no onclick apaga a luz amarela */
    }
    else {
        if (document.getElementById("red").className === "light red-light") {

            document.getElementById("red").className="light light-off"; 
            document.getElementById("green").className="light green-light"; 
        }
        else {
            document.getElementById("yellow").className="light yellow-light"; 
            document.getElementById("green").className="light light-off"; 
        }
    }
    
}