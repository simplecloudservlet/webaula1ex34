
/* TODO1 */
$(document).ready(function () {
    $("#btn1").click(function () {
        $("h3").first().css("font-style", "italic");
        $("h3").first().css("color", "#ff0000");
        console.log('TODO1a');
    });
    $("#btn2").click(function () {
        $("h3").last().css("font-style", "bold");
        $("h3").last().css("color", "#ff0000");
        console.log('TODO1b');
    });
   
});


/* TODO2 */
$(document).ready(function () {
    $("#btn3").click(function () {
        let vetor = [];

        $("#lista1 li").each( function(index, elem){
            vetor.push(elem.innerHTML);
        });

        vetor.sort();

        $("#lista1 li").each( function(index, elem){
            elem.innerHTML = vetor[index];
        });

        console.log('TODO2');
    });

});


/* TODO3 */
$(document).ready(function () {
    $("#btn4").click(function () {

        $("#div3").children("h3").css("color","#0000ff");
        console.log('TODO3');
    });

});

/* TODO4 */
$(document).ready(function () {
    $("#btn5").click(function () {

        $("#div1").css("background-color","silver");
        $("#div3").css("background-color","silver");
        console.log('TODO4');
    });

});

/* TODO5 */
$(document).ready(function () {
    $("#btn6").click(function () {

        let filhos = $("#div1").children();

        filhos.each( function(index, elem){
            if(index==1){
                elem.innerHTML = "123";
                $(this).css("background-color","silver"); /* this: adquire o elemento selecionado */
            }
        });

        console.log('TODO5');
    });

});



/* --- */
function exibirOcultar(x) {
    $(document).ready(function () {
        $("#tabelaProduto").toggle();
    });
    console.log('TODO1');
}


/* --- */
$(document).ready(function () {
    /* campo <input> recebe o foco com clique do mouse ou tab */
    /* this: referencia o proprio elemento */
    /* addClass: adiciona um seletor CSS de classe ao elemento */
    $(".input1").focus(function () {
        $(this).addClass("selecionado");
    });

    /* campo <input> perde o foco */
    $(".input1").blur(function () {
        $(this).removeClass("selecionado");
    });

});



/*---*/
imagemSelecionada = true
$(document).ready(function () {
    $("img").hover(function () {
        if (imagemSelecionada) {
            $("#legenda").html($(this).data().descImg);
        } else {
            $("#legenda").html('Carrinho de compras');
        }
        //Inverte o status
        imagemSelecionada = !imagemSelecionada;
    });

});


console.log('1Passei por aqui');
$(document).ready(function () {
    console.log('2Passei por aqui');
    /* Mostra o numero de caracteres na caixa de texto */
    /* Atencao para o '#' que identifica o componente */
    function contarLetras() {
        $("#tamanhoTexto").text(
            $("#caixaTexto").val().length + " caracteres"
        );
    }

    $("#caixaTexto").on("keyup", function () {
        contarLetras();
    });

    //Primeira chamada, quando a pagina eh carregada
    contarLetras();
    console.log('3Passei por aqui');
});

/* -- */
function exibir(x) {
    console.log(x);
}

function somar(x, y) { return x + y; }

function listarVetores() {

    let vetor = ['PIX', 'Boleto', 'Cartão'];

    /* Retorna o indice a partir do conteúdo */
    console.log('Posicao do PIX: ' + vetor.indexOf('PIX'));

    /* Vetores podem conter tipos diferentes, inclusive funcoes, e tambem conteúdo vazio (posicoes 5 em diante) */
    let vetor2 = ['PIX', 123, true, 1.23, somar, , ,];

    vetor2.forEach(exibir); /* Faz a chamada da funcao 'exibir' para cada elemento que eh diferente de vazio (undefined) */

    /* Eh possivel invocar a funcao a partir da posicao em que ela se encontra no vetor*/
    console.log(vetor2[4](1, 2)); //retorna '3'

}


function avaliarCompra() {
    let rotuloAvaliacao = document.getElementById('rotuloAvaliacao');

    let x = parseInt(document.getElementById('notas').value);

    rotuloAvaliacao.innerHTML = 'Avaliação da compra: ';
    switch (x) {
        case 0: {
            rotuloAvaliacao.innerHTML += 'Ruim';
            rotuloAvaliacao.style.color = "#ff0000";
            break;
        }
        case 5: {
            rotuloAvaliacao.innerHTML += 'Razoável';
            rotuloAvaliacao.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloAvaliacao.innerHTML += 'Ótimo';
            rotuloAvaliacao.style.color = "#0000ff";
            break;
        }
    }

}

/* TODO2 */
function avaliarSigla() {
    let rotuloSigla = document.getElementById('rotuloSigla');

    let x = document.getElementById('siglas').value;

    rotuloSigla.innerHTML = 'Avaliação da sigla: ';
    switch (x) {
        case 'HTML': {
            rotuloSigla.innerHTML += 'Hypertext Markup Language';
            rotuloSigla.style.color = "#ff0000";
            break;
        }
        case 'CSS': {
            rotuloSigla.innerHTML += 'Cascading Style Sheet';
            rotuloSigla.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloSigla.innerHTML += 'eXtended Markup Language';
            rotuloSigla.style.color = "#0000ff";
            break;
        }
    }

}










var compra = false;
function comprar() {

    let imagem = document.getElementById('carrinho');

    compra = !compra; //Inverte o valor atual que está em memória

    if (compra) {
        imagem.src = 'img/vendas2.png';
    } else {
        imagem.src = 'img/vendas.png';
    }

}