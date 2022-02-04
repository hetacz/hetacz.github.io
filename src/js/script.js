'use strict';

const nowDiv = document.querySelector('#now');
const expDiv = document.querySelector('#exp');
const skillsDiv = document.querySelector('#skills');

const nowReadMore = document.querySelector('#read-more-now');
const expReadMore = document.querySelector('#read-more-exp');
const skillsReadMore = document.querySelector('#read-more-skills');

const emailSpan = document.querySelector('#email');

class App {

    constructor() {
        this.#addInitialListeners(this.#showNow.bind(this), this.#showExp.bind(this), this.#showSkills.bind(this), this.#showEmail.bind(this));
    }

    #addInitialListeners(showNow, showExp, showSkills, showEmail) {
        [showNow, showExp, showSkills].forEach((callback) => {
            window.addEventListener('load', callback);
            window.addEventListener('hashchange', callback);
        });
        emailSpan.addEventListener('click', showEmail);
    }

    #showEmail() {
        const text = '\x72\x61\x66\x61\x6C\x6C\x6F\x76\x65\x73\x77\x6F\x72\x6B\x69\x6E\x67\x28\x61\x74\x29\x67\x6D\x61\x69\x6C\x28\x64\x6F\x74\x29\x63\x6F\x6D';
        emailSpan.classList.remove('pseudolink');
        emailSpan.classList.add('email');
        emailSpan.textContent = text;
    }

    #showNow() {
        if (window.location.hash !== '#more-now') { return; }
        const html =
            `
            <p class="text">
                I like my job, as there are always challenges to overcome, which prevent me from getting bored. My
                occupation gives me satisfaction from solving puzzles, even if some issues may sometimes turn to be a
                little frustrating, the programmer high is no doubt worth time spent.
            </p>
            <p class="text">
                Apart from working, I love to learn and read, I constantly try to improve myself, acquire new skills,
                and even learn about random scientific facts. I can sometimes spend a night reading about some long lost
                Bronze Age culture you probably never heard about, and then, in the morning spend few more hours reading
                news from markets and only then sleep during the day.
            </p>
            <p class="text">
                Investing money is other thing I do enjoy. I am currently involved in social lending, crypto, real
                estate and crowdfunding among others. And on top of that, I used to own a pizzeria few years ago and I
                was a quite good League of Legends player (Diamond Tier).
            </p>
            `;
        nowReadMore.remove();
        nowDiv.insertAdjacentHTML('beforeend', html);
    }

    #showExp() {
        if (window.location.hash !== '#more-exp') { return; }
        const html =
            `
            <p class="text">
                I can build a <em>Selenium</em> framework with <em>Java 17</em> using <em>TestNG</em>, <em>Maven</em> or
                <em>Gradle</em> with a <em>WebDriverManager</em> and
                <em>Allure</em> using any popular Assertion Library. I know how to make such framework scalable, using
                well-implemented <em>Page Object Pattern</em> with components and OOP principles in design. I am
                familiar with
                design patterns such as Facade, Factory and Singleton. I can integrate such framework with
                <em>Github</em> or
                <em>Azure</em> and configure pipelines for Continous Integration. I am also experienced with API
                automation and have a working knowledge of <em>Rest-assured</em> library.
            </p>
            <p class="text">
                <em>Cypress</em> is another tool I am fluent with and I've been using it with success in many smaller
                (not
                enterprise level) projects. I have a strong knowledge of <em>Javascript</em> and <em>Typescript</em>.
            </p>
            <p class="text">
                Of course I am also fluent in <em>HTML5</em> and <em>CSS3</em> as well as <em>Gherkin</em> syntax.
            </p>
            <p class="text">
                I am a huge fan of agile development and I also have a very positive experience of working in a
                <em>SAFe</em>
                (Scaled agile framework) team of hundreds of people. I also have working experience with different tools
                for software development.
            </p>
            `;
        expReadMore.remove();
        expDiv.insertAdjacentHTML('beforeend', html);
    }

    #showSkills() {
        if (window.location.hash !== '#more-skills') { return; }
        const html =
            `
            <ul class="more-bot">
                <li>Cucumber</li>
                <li>Github, Azure</li>
                <li>Rest-Assured</li>
                <li>Postman</li>
                <li>Knowledge of agile and SAFe methodology</li>
            </ul>
                <h3>Languages:</h3>
            <ul>
                <li>English - fluent - <em>C1</em></li>
                <li>German - reading/writing - <em>B1</em></li>
                <li>French - reading/writing - <em>A1</em></li>
                <li>Polish - native</li>
            </ul>
            <h3>Other:</h3>
            <ul>
                <li>Driver's license - B category</li>
            </ul>
        `;
        skillsReadMore.remove();
        skillsDiv.insertAdjacentHTML('beforeend', html);
    }
}

new App();
