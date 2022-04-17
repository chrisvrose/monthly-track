import App from "./App.svelte";

const name =
    localStorage.getItem("name") ??
    window.prompt("Enter your name :S (We don't store)", "Chris");
localStorage.setItem("name", name);

const app = new App({
    target: document.body,
    props: {
        name,
    },
});

export default app;
