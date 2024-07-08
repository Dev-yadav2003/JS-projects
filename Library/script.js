
const formshow=document.querySelector('#form-button')
const form=document.querySelector('#add')
const cutform=document.querySelector('.set-style')

formshow.addEventListener('click',(event)=>{
form.classList.remove('hidden');
})

cutform.addEventListener('click',(event)=>{
    event.preventDefault()
form.classList.add('hidden');
 })

const myLibrary = [];

function Book(title,author,pages,read){
this.title=title,
this.author=author,
this.pages=pages,
this.read=read
}

Book.prototype.newBook=function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ?'already read':'not read yet'}`
}

function addToLibrary(title,author,pages,read){
myLibrary.push(new Book(title,author,pages,read));
displayBooks();
}

function displayBooks(){
    const newBookDisplay=document.querySelector('.books');
    newBookDisplay.innerHTML='';
    
    myLibrary.forEach((book,index)=>{
        const card=document.createElement('div');
        card.classList.add("book")

        const cardTitle=document.createElement('h4');
        cardTitle.textContent=book.title;

        const authorName=document.createElement('h5');
        authorName.textContent=book.author;

        const cardPages=document.createElement('p');
        cardPages.textContent=`${book.pages} pages`;

        const cardRead = document.createElement("div");
        cardRead.classList.add("read");

        const readCheckbox = document.createElement('input');
        readCheckbox.type = 'checkbox';
        readCheckbox.id = `read-${book.title.replace(/\s+/g, '-')}`;
        readCheckbox.checked = book.read;
        readCheckbox.onclick = () => toggleBookRead(index); 
        
        const readLabel = document.createElement('label');
        readLabel.setAttribute('for', readCheckbox.id);
        readLabel.textContent = 'Read';
    
        cardRead.appendChild(readLabel);
        cardRead.appendChild(readCheckbox);

        const addRemoveBtn=document.createElement('button');
        addRemoveBtn.classList.add("remove");

        addRemoveBtn.textContent="Remove";

        addRemoveBtn.onclick=()=>{
            removeBookFromLibrary(index);
        }

        card.appendChild(cardTitle);
        card.appendChild(authorName);
        card.appendChild(cardPages);
        card.appendChild(cardRead);
        card.appendChild(addRemoveBtn);

        newBookDisplay.appendChild(card);

    })
    
}

addToLibrary('the hell','dev yadav', 268 , false);

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

function toggleBookRead(index) {
    myLibrary[index].toggleRead();
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// displayBooks()

document.getElementById('newbook').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('form-title').value;
    const author = document.getElementById('form-author').value;
    const pages = document.getElementById('form-pages').value;
    const read = document.getElementById('form-read').checked;
    
        addToLibrary(title, author, pages, read);
    
        document.getElementById('newbook').reset();

    
});

