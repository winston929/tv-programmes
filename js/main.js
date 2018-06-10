/*
* Copyright 2018 by Winston Chan
* The lazy loading library is provided from https://github.com/vishnurs/lazy
*/
class LoadApp{
    constructor(){
        this.loadLazyLoadLibrary();
        this.createShowMoreClasses();
    }
    loadLazyLoadLibrary(){
        lazy.init({
            delay: 100,
            callback : function(elem) {}
        });
    }

    createShowMoreClasses() {
        for(let i = 0; i < 6; i++){
            new Description(i + 1);
        }
    }
}

class Description{
    constructor(id){
        this.showMore = "Show More...";
        this.showLess = "Show Less...";

        this.showChar = 100;
        this.element = document.getElementById("description" + id.toString());
        this.moreText = this.element.innerText;

        if(this.moreText.length > this.showChar){
            this.isLessText = true;

            this.lessText = this.moreText.slice(0, this.showChar) + "...";
            this.element.innerText = this.lessText;

            this.buttonElem = document.createElement("a");
            this.buttonElem.className = "button";
            this.buttonElem.href = "#";
            this.buttonElem.innerText = this.showMore;

            this.buttonElem.onclick= this.onButtonClicked.bind(this);

            document.getElementById("programme" + id.toString()).appendChild(this.buttonElem);
        }
    }

    onButtonClicked(e){
        e.preventDefault();
        this.isLessText = !this.isLessText;

        this.buttonElem.innerText = (this.isLessText) ? this.showMore : this.showLess;
        this.element.innerText = (this.isLessText) ? this.lessText : this.moreText;
    }
}