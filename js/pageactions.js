//Função que coloca o produto no array carrinho
function get_pro(carrinho,name,preço){
  preço = Number.parseFloat(preço)
  let item = [name,preço,"remover"]
  if(carrinho.length < 3){
    carrinho.push(item)
    alert(item)
  }
  else{
    alert("carrinho cheio")
  }
}

//função que mostra o carrinho
function show_carrinho(db){
  try{
  //getting elements

  let gandalf = document.getElementById("gandalf")

  let div_1 = document.getElementById("div 1")

  let div_2 = document.getElementById("div 2")

  let div_3 = document.getElementById("div 3")

  let produto_1 = document.getElementById("produto 1")

  let produto_2 = document.getElementById("produto 2")

  let produto_3 = document.getElementById("produto 3")

  let remove_1 = document.getElementById("remove 1")

  let remove_2 = document.getElementById("remove 2")

  let remove_3 = document.getElementById("remove 3")

  let preço_1 = document.getElementById("preço 1")

  let preço_2 = document.getElementById("preço 2")

  let preço_3 = document.getElementById("preço 3")

  var produtos = [produto_1,produto_2,produto_3]

  var preços = [preço_1,preço_2,preço_3]

  var removes = [remove_1,remove_2,remove_3]

  var divs = [div_1,div_2,div_3]

  let section = document.getElementById("carrinho") 

  let main_section = document.getElementById("seção_principal") 

  let header = document.getElementById("header") 

  let nav = document.getElementById("nav") 

  let get_out = document.getElementById("get_out") 
    
  section.style.display = "block";
  main_section.style.display = "none";
  header.style.display = "none";
  nav.style.display = "none"
  gandalf.style.display = "none"
  
  for(p in db){
    produtos[p].innerHTML = db[p][0]
    preços[p].innerHTML = "R$" + db[p][1]
    removes[p].innerHTML = db[p][2]
    divs[p].style.display = "flex"
    removes[p].style.display = 'block'
  }

  removes[0].addEventListener("click",function(){
    divs[0].style.display = "none"
    db.splice(0,1)
  })

  removes[1].addEventListener("click",function(){
    divs[1].style.display = "none"
    db.splice(1,1)
})

  removes[2].addEventListener("click",function(){
    divs[2].style.display = "none"
    db.splice(2,1)
})

    
  //add evento ao X  

  get_out.addEventListener("click",function(){
    section.style.display = "none";
    main_section.style.display = "flex";
    header.style.display = "flex";
    nav.style.display = "block"
    gandalf.style.display = "block"

  });  
    
  }catch(error){
    alert(error);
  }
}

//função que cria e add elementos nas seções

/* parâmetros:
-db:array com os produtos
-car:carrinho
-categoria:categoria do produto */
function add_menu(db,car,categoria){
  
  
  let seção = document.getElementById(categoria);
  let cont = 0;
  
  //para cada item no array
  for(produto in db){
    
    //db[produto][2] = 'produto' indica uma posição de acordo com as voltas do loop
    //[2] indica uma terceira posição dentro de 'produto',que nesse caso é a categoria.
    if(db[produto][2] == categoria || categoria == "Tudo"){
      
      cont++;
      
      //nome e preço do produto
      let nome_do_produto = db[produto][0];
      let preço_do_produto = db[produto][1];
      
      //creating element
      let vitrine = document.createElement("Div");
      let add_carrinho = document.createElement("Button");
      let name = document.createElement("h1");
      let preço = document.createElement("h2");
      let linebreak = document.createElement("br");
      
      //creating text
      let name_text = document.createTextNode(`${db[produto][0]}`);
      let preço_text = document.createTextNode(`R$${db[produto][1]}`);
      let car_text = document.createTextNode("Add no carrinho");
      
      //append element and text
      name.appendChild(name_text);
      preço.appendChild(preço_text);
      add_carrinho.appendChild(car_text);
      
      vitrine.appendChild(name);
      vitrine.appendChild(preço);
      vitrine.appendChild(add_carrinho);
      
      vitrine.style = "text-align:center";
      
      //add event to car button
      add_carrinho.addEventListener("click",() => get_pro(car,nome_do_produto,preço_do_produto));
      
      seção.appendChild(vitrine);
      if(cont % 3 == 0){
        seção.appendChild(linebreak);
      }
    }
  }
}

//adiciona os elementos que vão ser criados no add_menu() nas seções
function add_section(db,car){
  const categorias = ["Livro","Action Figure","Acessório","Cosplay","Tudo"];
  
  //rode enquanto i < 5
  for(var i = 0;i < 5;i++){
    
    //cria elementos para as seções de acordo com as voltas do for
    let section = document.getElementById(categorias[i]);
    add_menu(db,car,categorias[i]);
    
    //por padrão,as seções vão está fora do site
    section.style.display = "none"
    
  }
  
}

//escolhe a seção que vai aparecer
function choose_section(category){
  
  const categorias = ["Livro","Action Figure","Acessório","Cosplay","Tudo"];
  
  for(var i = 0;i < 5;i++){
    
    let section = document.getElementById(categorias[i]);
    
    /*se a categoria do loop for diferente do argumento da função
    o display será none,ou seja,escondido.*/
    if(categorias[i] != category){
      
      section.style.display = "none";
      
    }
    //senão o display será flex
    else{
      
      section.style.display = "flex";
      
    }
  }
}

//classe que vai ajudar a configurar os eventos das seções
class Play{
  constructor(){
    this.category = "Tudo"
  }
  start(){
    choose_section("Tudo")
  }
  get_book(){
    choose_section("Livro")
  }
  
  get_aces(){
    choose_section("Acessório")
  }
  
  get_cosplay(){
    choose_section("Cosplay")
  }
  
  get_action_figure(){
    choose_section("Action Figure")
  }
  
  get_tudo(){
    choose_section("Tudo")
  }
}