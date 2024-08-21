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

//CAMPO DE PESQUISA E ATUALIZAÇÃO DOS PRODUTOS
 let idProduto = document.getElementById('idProduto');

//RESULTADOS DAS PESQUISAS
 let dadoProduto = document.getElementById('dadoProduto');
 let dadoCategoria = document.getElementById('dadoCategoria');
 let dadoQuantidade = document.getElementById('dadoQuantidade');
 let dadoValor = document.getElementById('dadoValor');

//BOTÕES DOS CAMPOS DE PESQUISA
 let buscarProduto = document.getElementById('buscarProduto');
 let atualizarProduto = document.getElementById('atualizarProduto');
 let deletarProduto = document.getElementById('deletarProduto');

 //FUNCÃO PARA PESQUISA DE PRODUTOS COM BASE NO CÓDIGO DO PRODUTO => idProduto
 function PesquisarProduto(){
    const dbRef = ref(db);
    get(child(dbRef,'Produto/'+idProduto.value)).then((snapshot)=>{
        if(snapshot.exists()){
            dadoProduto.value = snapshot.val().produto;
            dadoCategoria.value = snapshot.val().categoria;
            dadoQuantidade.value = snapshot.val().quantidade;
            dadoValor.value = ('R$ ')+parseFloat (snapshot.val().valor).toFixed(2);
            alert('Produto Localizado!')
        }else{
            alert("O produto não existe");
        }
    }).then(()=>{
        alert('Leitura Realizada!')
    }).catch((e)=>{
        alert('Algo deu errado!')
        console.log(e)
    })
 }

 //FUNÇÃO PARA ATUALIZAÇÃO DAS INFORMAÇÕES ACERCA DO PRODUTO
function AtualizarProdutos(){
    update(ref(db,'Produto/'+idProduto.value),{
        produto:dadoProduto.value,
        categoria:dadoCategoria.value,
        quantidade:dadoQuantidade.value,
        valor:dadoValor.value
    }).then(()=>{
        alert('Produto Atualizado!');
    }).catch((e)=>{
        alert('Algo deu errado!')
        console.log(e)
    })
}

//FUNÇÃO PARA DELETAR PRODUTO
function DeletarProdutos(){
    remove(ref(db,'Produto/'+idProduto.value)).
    then(()=>{
        idProduto.value=''
        dadoProduto.value=''
        dadoCategoria.value=''
        dadoQuantidade.value=''
        dadoValor.value=''
        alert('Produto Deletado!')
    })
}

//MÉTODOS PARA UTILIZAÇÃO DAS FUNÇÕES COM BASE NAS AÇÕES DOS BOTÕES
buscarProduto.addEventListener('click',PesquisarProduto);
atualizarProduto.addEventListener('click',AtualizarProdutos);
deletarProduto.addEventListener('click',DeletarProdutos);
