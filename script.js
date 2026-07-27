const container = document.querySelector(".container");

const add_btn = document.querySelector(".add");
const dialog = document.querySelector("dialog");
const close_btn = document.querySelector(".close");

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const num = document.querySelector("#num");

let remove_btns = document.querySelectorAll(".remove");
remove_btns=Array.from(remove_btns);

let toggle_btns = document.querySelectorAll(".toggle");
toggle_btns=Array.from(toggle_btns);

class book{
    constructor(title,author,pages,status) {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.status=status;
        this.id = self.crypto.randomUUID();
    }
    toggleStatus() {
        this.status=this.status==="Read" ? "Notread" : "Read";
    }
}

function addBookToLib(title,author,pages,status) {
    const newBook = new book(title,author,pages,status);
    const card = document.createElement("article");
    card.classList.add("card");

    const book_title = document.createElement("div");
    book_title.classList.add("title");
    const heading = document.createElement("h2");
    heading.textContent=title;
    book_title.appendChild(heading);

    const book_author = document.createElement("div");
    book_author.classList.add("author");
    const by = document.createElement("h2");
    by.textContent="By ";
    const name = document.createElement("span");
    name.textContent=author;
    book_author.appendChild(by);
    book_author.appendChild(name);

    const book_pages = document.createElement("div");
    book_pages.classList.add("pages");
    const number_of_pages = document.createElement("h2");
    number_of_pages.textContent="Number of pages : ";
    const num = document.createElement("span");
    num.textContent=pages;
    book_pages.appendChild(number_of_pages);
    book_pages.appendChild(num);

    const book_status = document.createElement("div");
    book_status.classList.add("status");
    const st = document.createElement("h2");
    st.textContent="Status : ";
    const flag = document.createElement("span");
    flag.classList.add("st");
    flag.textContent=status;
    book_status.appendChild(st);
    book_status.appendChild(flag);

    const toggle = document.createElement("div");
    toggle.classList.add("button");
    const btn = document.createElement("button");
    btn.classList.add("toggle");
    btn.textContent="Toggle";
    add_event_list_toggle(btn);
    toggle.appendChild(btn);

    const remove = document.createElement("div");
    remove.classList.add("button");
    const rbtn = document.createElement("button");
    rbtn.classList.add("remove");
    rbtn.textContent="Remove";
    remove.appendChild(rbtn);
    add_event_list(rbtn);

    card.appendChild(book_title);
    card.appendChild(book_author);
    card.appendChild(book_pages);
    card.appendChild(book_status);
    card.appendChild(toggle);
    card.appendChild(remove);

    container.appendChild(card);
}

function add_event_list(btn) {
    btn.addEventListener("click",(e)=>{
        const card = e.target.closest(".card");
        container.removeChild(card);
    })
}

function add_event_list_toggle(btn) {
    btn.addEventListener("click",(e)=>{
        const card = e.target.closest(".card");
        const span = card.querySelector(".st");
        if(span.textContent==="Read") {
            span.textContent="Not read";
        }
        else{
            span.textContent="Read";
        }
    })
}

for(let btn of remove_btns) {
    add_event_list(btn);
}

for(let btn of toggle_btns) {
    add_event_list_toggle(btn);
}

add_btn.addEventListener("click",(e)=>{
    dialog.showModal();
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    dialog.close();

    const book_title = title.value;
    const book_author = author.value;
    const book_len = num.value;
    const read_status = document.querySelector('input[name="read"]:checked').value;
    
    addBookToLib(book_title,book_author,book_len,read_status);
    form.reset();
})
close_btn.addEventListener("click", ()=>{
    dialog.close();
})
