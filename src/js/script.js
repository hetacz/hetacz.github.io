class App {

    #emailSpan = document.querySelector('#email');

    constructor() {
        this.#addEmailListeners(this.#showEmail.bind(this));
    }

    #showEmail() {
        const text = '\x72\x61\x66\x61\x6C\x6C\x6F\x76\x65\x73\x77\x6F\x72\x6B\x69\x6E\x67\x28\x61\x74\x29\x67\x6D\x61\x69\x6C\x28\x64\x6F\x74\x29\x63\x6F\x6D';
        window.alert(text);
    }

    #addEmailListeners(listener) {
        this.#emailSpan.addEventListener('click', listener);
    }
}

new App();
