 //VOCÊ DEVE SUBSTITUIR A URL ABAIXO PELA URL DO IMPORT SEU PROJETO NO FIREBASE (CONFIGURAÇÕES CDN DO SEU PROJETO)
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

 //VOCÊ DEVE SUBSTITUIR OS CÓDIGOS ABAIXOS CÓDIGOS DO SEU PROJETO NO FIREBASE (FIREBASE CONFIGURATION)
 const firebaseConfig = {
    apiKey: "AIzaSyDYFlXA3Smb-HY0JpFjap0xj0bRpNNNBLo",
    authDomain: "pastelaria-login.firebaseapp.com",
    databaseURL: "https://pastelaria-login-default-rtdb.firebaseio.com",
    projectId: "pastelaria-login",
    storageBucket: "pastelaria-login.appspot.com",
    messagingSenderId: "708197995888",
    appId: "1:708197995888:web:df1a6c8d2c59009ca6ebb5"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 //VOCÊ DEVE SUBSTITUIR AO FINAL DA URL AS PALAVRAS FIREBASE-APP POR FIREBASE-DATABASE
 import { getDatabase, ref, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";


 const db = getDatabase();

//  CAMPOS DE ENTRADAS DOS VALORES DO CADASTRO DE PRODUTOS
 let codigo = document.getElementById('codigo');
 let produto =document.getElementById('produto');
 let categoria =document.getElementById('categoria');
 let quantidade =document.getElementById('quantidade');
 let valor =document.getElementById('valor');

 let cadastrarProduto = document.getElementById('cadastrarProduto');
 let pathPesquisa = document.getElementById('irPesquisa');

//ADICIONAR PRODUTO
 function AddProduto(){
    set(ref(db,'Produto/'+codigo.value),{
        codigo: codigo.value,
        produto: produto.value,
        categoria: categoria.value,
        quantidade: quantidade.value,
        valor: valor.value
    }).then(()=>{
        codigo.value = ''
        produto.value=''
        categoria.value=''
        quantidade.value=''
        valor.value=''
        alert("Produto Cadastrado!");
    }).catch((error)=>{
        console.log(error);
        alert('Produto Não Cadastrado!');
    })

 }

function irPesquisa() {
    window.location.href = "busca.html"
}

cadastrarProduto.addEventListener('click', AddProduto);
pathPesquisa.addEventListener('click', irPesquisa);
