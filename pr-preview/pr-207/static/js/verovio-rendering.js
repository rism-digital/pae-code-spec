(() => {
    "use strict";

    const VEROVIO_OPTIONS = {
        footer: "none",
        header: "none",
        breaks: "auto",
        pageMarginTop: 15,
        pageMarginBottom: 15,
        spacingSystem: 2,
        pageMarginLeft: 0,
        pageMarginRight: 0,
        scale: 50,
        adjustPageHeight: true,
        adjustPageWidth: true,
        svgHtml5: true,
        svgRemoveXlink: true,
        inputFrom: "pae"
    };

    const EXAMPLE_SELECTOR = ".notation-example";
    const CODE_SELECTOR = ".notation-code script[type='application/json']";
    const FALLBACK_CODE_SELECTOR = "script[type='application/json']";
    const RESULT_SELECTOR = ".notation-result, .rendered-notation";

    function domReady() {
        if (document.readyState !== "loading") {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            document.addEventListener("DOMContentLoaded", resolve, { once: true });
        });
    }

    function verovioReady() {
        return new Promise((resolve, reject) => {
            if (!window.verovio || !window.verovio.module) {
                reject(new Error("Verovio module is not available."));
                return;
            }

            if (window.verovio.module.calledRun) {
                resolve();
                return;
            }

            const previousCallback = window.verovio.module.onRuntimeInitialized;

            window.verovio.module.onRuntimeInitialized = (...args) => {
                if (typeof previousCallback === "function") {
                    previousCallback.apply(window.verovio.module, args);
                }

                resolve();
            };
        });
    }

    function getExampleData(example) {
        const script = example.querySelector(CODE_SELECTOR)
            || example.querySelector(FALLBACK_CODE_SELECTOR);

        if (!script) {
            return null;
        }

        return JSON.parse(script.textContent);
    }

    function getRenderTarget(example) {
        return example.querySelector(RESULT_SELECTOR);
    }

    function renderExample(toolkit, example) {
        const target = getRenderTarget(example);

        if (!target) {
            return;
        }

        let data;

        try {
            data = getExampleData(example);
        } catch (error) {
            target.innerHTML = "";
            console.error("Could not parse notation example JSON.", { example, error });
            return;
        }

        if (!data) {
            return;
        }

        try {
            const loaded = toolkit.loadData(JSON.stringify(data));

            if (!loaded) {
                target.innerHTML = "";
                console.error("Verovio could not load notation example data.", { example, data });
                return;
            }

            target.innerHTML = toolkit.renderToSVG();
        } catch (error) {
            target.innerHTML = "";
            console.error("Could not render notation example.", { example, data, error });
        }
    }

    async function renderExamples() {
        await Promise.all([domReady(), verovioReady()]);

        const toolkit = new window.verovio.toolkit();
        toolkit.setOptions(VEROVIO_OPTIONS);

        for (const example of document.querySelectorAll(EXAMPLE_SELECTOR)) {
            renderExample(toolkit, example);
        }
    }

    renderExamples().catch((error) => {
        console.error("Could not initialize Verovio example rendering.", error);
    });
})();
