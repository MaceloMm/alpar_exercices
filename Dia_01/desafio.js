/* 
Criar uma calculadora de impostos.
 
A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto 
(desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)
 
O ICMS deverá ser calculado após o produto receber (ou não desconto). 
 
O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado. 
 
Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)
*/

function getrandomint(min, max){
   return Math.floor(Math.random() * (max - min) + min)
}

function clearStore(){
    localStorage.clear()
    location.reload()
}

function calcImposto() {
    clearStore();

    const cupomDesc = 'PROMO15';
    const frete = { "SP": 10.00, "RJ": 20.00, "Outro": 30.00 };

    const descCupom = String(document.getElementById("descCupom").value);
    const valorProd = Number(document.getElementById("prodValue").value);
    const desc = document.getElementById("descProd").checked;
    const estado = document.getElementById("frete").value;

    if (isNaN(valorProd) || valorProd <= 0) {
        alert("Por favor, insira um valor de produto válido.");
        return;
    }

    let imposto = getrandomint(12, 25);
    let descValor = valorProd;

    if (desc) {
        if (descCupom === cupomDesc) {
            descValor = valorProd - (valorProd * 0.15);
        } else {
            descValor = valorProd - (valorProd * 0.1);
        }
    }

    let icsmsValor = descValor * (imposto / 100);

    localStorage.setItem("descValor", descValor.toFixed(2));
    localStorage.setItem("icsmsValor", `${icsmsValor.toFixed(2)} | Imposto: ${imposto}%`);
    localStorage.setItem("totalProd", ((descValor - icsmsValor) + frete[estado]).toFixed(2));

    const result_desc = document.getElementById("result_desc");
    result_desc.innerHTML = `${descValor.toFixed(2)}`;
    const result_icms = document.getElementById("result_icms");
    result_icms.innerHTML = `${icsmsValor.toFixed(2)} | Imposto: ${imposto}%`;
    const total_prod = document.getElementById("total_prod");
    total_prod.innerHTML = `${((descValor - icsmsValor) + frete[estado]).toFixed(2)}`;
}

function loadValues() {
    if (localStorage.getItem("descValor")) {
        document.getElementById("result_desc").innerHTML = localStorage.getItem("descValor")
    }
    if (localStorage.getItem("icsmsValor")) {
        document.getElementById("result_icms").innerHTML = localStorage.getItem("icsmsValor")
    }
    if (localStorage.getItem("totalProd")) {
        document.getElementById("total_prod").innerHTML = localStorage.getItem("totalProd")
    }
    if (localStorage.getItem("x1")) {
        document.getElementById("x1").innerHTML = localStorage.getItem("x1")
    }
    if (localStorage.getItem("calc_bhas")){
        document.getElementById("calc_bhas").classList.add("press")
        document.getElementById("content-hide").classList.remove("hidden")
    }
}

function alterationApp(){

    const calc_imp = document.getElementById("calc_imp")
    const calc_bhas = document.getElementById("calc_bhas")
    const content = document.getElementById("content")
    const content1 = document.getElementById("content-hide")

    if (calc_imp.classList.contains("press")){
        calc_imp.classList.remove("press")
        content.classList.add("hidden")
        calc_bhas.classList.add("press")
        content1.classList.remove("hidden")
    }else{
        calc_bhas.classList.remove("press")
        calc_imp.classList.add("press")
        content1.classList.add("hidden")
        content.classList.remove("hidden")
    }
}

function calcBhaskara(){
    clearStore()

    const a = Number(document.getElementById("a").value)
    const b = Number(document.getElementById("b").value)
    const c = Number(document.getElementById("c").value)
    const x1 = document.getElementById("x1")

    if (a === 0){
        x1.innerHTML = 'A variável "a" não pode ser zero';
        return;
    }

    dis = (b ** 2) - 4 * a * c

    if (dis < 0) {
        x1.innerHTML = 'Não existem raízes reais';
    }else if (dis === 0) {
        let x = -b / (2 * a);
        localStorage.setItem("x1", x)
        x1.innerHTML = `Existe apenas uma raiz real: ${x}`;
    } else{
        
        let x1Value = ((-b + Math.sqrt(dis)) / (2 * a)).toFixed(2);
        let x2Value = ((-b - Math.sqrt(dis)) / (2 * a)).toFixed(2);
        let ret = `Existem duas raízes reais: ${x1Value} e ${x2Value}`
        localStorage.setItem("x1", ret)
        x1.innerHTML = ret;
    }
}

function addCupom(){
    const cupom = document.getElementById("descProd").checked
    const campCupom = document.getElementById("campcupom")
    if (cupom == true){
        campCupom.classList.remove("hidden")
    }else{
        campCupom.classList.add("hidden")
    }
    
}

document.getElementById("submitBhaskara").addEventListener("click", function(event) {
    event.preventDefault();
});

window.onload = loadValues




