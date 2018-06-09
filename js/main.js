/*
* All rights reserved by Winston Chan
* Created in 2018
*
* The similar lazy loading library is referenced from https://github.com/vishnurs/lazy
*/
class LoadApp{
    constructor(){
        lazy.init({
            delay:1000,
            callback : function(elem) {}
        });
    }
}