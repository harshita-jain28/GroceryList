const addForm = document.querySelector('.add');
const list = document.querySelector('.grocery');
const search = document.querySelector('.search input');
const generateTemplate = grocerys =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${grocerys}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
    //window.localStorage.setItem('user',JSON.stringify(list));

};
addForm.addEventListener('submit', fun =>{
    fun.preventDefault();
    const grocery = addForm.add.value.trim();
    if(grocery.length){
    generateTemplate(grocery);
    addForm.reset();
    }
});

list.addEventListener('click',fun =>{
    if(fun.target.classList.contains('delete')){
        fun.target.parentElement.remove();
    }
});
const filterTodos = (term) =>{
    Array.from(list.children)
     .filter((grocery)=> !grocery.textContent.includes(term))
     .forEach((grocery) => grocery.classList.add('filtered'));
     Array.from(list.children)
     .filter((grocery)=> grocery.textContent.includes(term))
     .forEach((grocery) => grocery.classList.add('filtered'));
    
};
search.addEventListener('keyup', ()=>{
    const term = search.value.trim();
    filterTodos(term);

});
//window.addEventListener('load',()=>{
    //JSON.parse(window.localStorage.getItem('user'));

//});