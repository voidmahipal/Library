const mylib = [];
const container = document.querySelector(".container");
const add_btn = document.querySelector(".add");

function book(title,author,pages,status) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
    this.id = self.crypto.randomUUID();
}

function addBookToLib(title,author,pages,status) {
    const newBook = new book(title,author,pages,status);
    mylib.push(newBook);
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
    flag.textContent=status;
    book_status.appendChild(st);
    book_status.appendChild(flag);

    const toggle = document.createElement("div");
    toggle.classList.add("button");
    const btn = document.createElement("button");
    btn.textContent="Toggle";
    toggle.appendChild(btn);

    const remove = document.createElement("div");
    remove.classList.add("button");
    const rbtn = document.createElement("button");
    rbtn.textContent="Remove";
    remove.appendChild(rbtn);

    card.appendChild(book_title);
    card.appendChild(book_author);
    card.appendChild(book_pages);
    card.appendChild(book_status);
    card.appendChild(toggle);
    card.appendChild(remove);

    container.appendChild(card);
}

add_btn.addEventListener("click",()=>{
    addBookToLib("Crime & punishment","Fyodor Dostoevsky","750","Read");
})