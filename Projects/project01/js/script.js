class Produto {

    constructor() { 
        this.id = 1;
        this.arrayProdutos = []
        this.editId = null
    }
    
    salvar() {
    
        let produto = this.lerdados();

        if (this.validaCampos(produto)) {
            if (this.editId == null) {
                this.adicionar(produto);
            }else {
                this.atualizar(this.editId, produto);
            }

        }

        this.listaTabela();
        this.deletar();


    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].preco

            td_id.classList.add('center');
            td_produto.classList.add('center');
            td_valor.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png'
            imgEdit.setAttribute("onclick", "produto.preparaEditacao("+ JSON.stringify(this.arrayProdutos[i]) +")")

            let imgRemove = document.createElement('img');
            imgRemove.src = 'img/remover.png'
            imgRemove.setAttribute("onclick", "produto.cancelar("+ this.arrayProdutos[i].id +")");
            
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgRemove);




        } 
    }

    preparaEditacao(dados) {
        this.editId =dados.id
        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;

        document.getElementById('btn1').innerText = 'Atualizar'

    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i ++) {
            console.log(this.arrayProdutos[i])
            if ( i === id) {
                this.arrayProdutos[i -1].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i -1].preco = produto.preco;

            }

        }
    }
    adicionar(produto) {
        produto.preco = parseFloat(produto.preco)
        this.arrayProdutos.push(produto);
        this.id++;

    }

    lerdados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;
        
        return produto;
    }

    validaCampos(produto) {
        let msg = '';
        
        if (produto.nomeProduto == '') {
            msg += '- Informe o nome do produto \n';
        }
        if (produto.preco == '') {
            msg += '- Informe o Preço do produto \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true

    }
    
    deletar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

        document.getElementById('btn1').innerText = "Salvar"
        this.editId = null;


    }

    cancelar(id) {
    if(confirm('Deseja realmente deletar o produto ID: ' + id + ' ?')) {
        let tbody = document.getElementById('tbody');
            for(let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
                
            }
        }
    }}
}

var produto = new Produto()