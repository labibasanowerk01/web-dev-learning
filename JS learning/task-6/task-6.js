const a = document.querySelector('.txt');
const b = document.querySelector('.txt-2');
const c = document.querySelector('.txt-3');
const d = document.querySelector('.txt-4');
const e = document.querySelector('.txt-5');
let dotCount = 0;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    await wait(Math.floor(Math.random() * 6001) + 1000);
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        const dots = '.'.repeat(dotCount);
        a.textContent = `Initializing Hacking${dots}`;
    }, 800);

    await wait(Math.floor(Math.random() * 6001) + 1000);
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        const dots = '.'.repeat(dotCount);
        b.textContent = ` Reading your Files${dots}`;
    }, 800);

    await wait(Math.floor(Math.random() * 6001) + 1000);
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        const dots = '.'.repeat(dotCount);
        c.textContent = ` Password files Detected${dots}`;
    }, 800);

    await wait(Math.floor(Math.random() * 6001) + 1000);
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        const dots = '.'.repeat(dotCount);
        d.textContent = `Sending all passwords and personal files to server${dots}`;
    }, 800);

    await wait(Math.floor(Math.random() * 6001) + 1000);
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        const dots = '.'.repeat(dotCount);
        e.textContent = ` Cleaning up${dots}`;
    }, 800);
}

init();