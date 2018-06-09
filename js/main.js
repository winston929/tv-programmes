/*
* All rights reserved by Winston Chan
* Created in 2018
*
* The similar lazy loading library is referenced from https://github.com/vishnurs/lazy
*/
class LoadApp{
    constructor(){
        this.descriptionClass = [];
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
            this.descriptionClass[i] = new Description(i + 1);
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

            this.linkElem = document.createElement("a");
            this.linkElem.className = "button";
            this.linkElem.href = "#";
            this.linkElem.innerText = this.showMore;

            this.linkElem.onclick= this.onButtonClicked.bind(this);

            document.getElementById("programme" + id.toString()).appendChild(this.linkElem);
        }
    }

    onButtonClicked(e){
        e.preventDefault();
        this.isLessText = !this.isLessText;

        this.linkElem.innerText = (this.isLessText) ? this.showMore : this.showLess;
        this.element.innerText = (this.isLessText) ? this.lessText : this.moreText;
    }
}