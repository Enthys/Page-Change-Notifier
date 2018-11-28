const {JSDOM} = require('jsdom');

class Reducer {
    constructor(html) {
        this.title = null;
        this.desc = null;
        this.image = null;
        this.link = null;
        this.price = null;

        this.dom = new JSDOM(html);
        this.setTitle();
        this.setDescription();
        this.setImage();
        this.setLink();
        this.setPrice();
    }

    setTitle() {
        throw Error("Not Implemented");
    }

    setDescription() {
        throw Error("Not Implemented");
    }

    setImage() {
        throw Error("Not Implemented");
    }

    setLink() {
        throw Error("Not Implemented");
    }

    setPrice() {
        throw Error("Not Implemented");
    }
}

class MobileBG extends Reducer {
    setTitle() {
        let elem = this.dom.window.document.querySelector('.mmm');
        if (elem) {
            this.title = elem.textContent;
        }
    }

    setDescription() {
        let elem = this.dom.window.document.querySelector('[colspan="4"]');
        if (elem) {
            this.desc = elem.innerHTML;
            this.desc = this.desc.trim();
        }
    }

    setImage() {
        let elem = this.dom.window.document.querySelector('img[data-geo]');

        if (elem) {
            this.image = elem.getAttribute('src');
            if (this.image.startsWith('//')) {
                this.image = this.image.substr(2);
            }
        }
    }

    setLink() {
        let elem = this.dom.window.document.querySelector('.mmm');

        if (elem) {
            this.link = elem.getAttribute('href');
            if (this.link.startsWith('//')) {
                this.link = this.link.substr(2);
            }
            let regex = /&slink=[^&]*/gi;
    
            this.link = this.link.replace(regex, '');
        }

    }

    setPrice() {
        let elem = this.dom.window.document.querySelector('.price');
        if (elem) {
            this.price = this.dom.window.document.querySelector('.price').innerHTML;
        }
    }
}

module.exports = {
    MobileBG: MobileBG
}