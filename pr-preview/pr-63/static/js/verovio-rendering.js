document.addEventListener("DOMContentLoaded", (event) => {
    Module.onRuntimeInitialized = async _ => {
        let tk = new verovio.toolkit();
        tk.setOptions({
            footer: 'none',
            header: 'none',
            breaks: 'auto',
            pageMarginTop: 15,
            pageMarginBottom: 15,
            spacingSystem: 2,
            pageMarginLeft: 0,
            pageMarginRight: 0,
            scale: 50,
            adjustPageHeight: true,
            adjustPageWidth: true,
            svgHtml5: true,
            // svgFormatRaw: true,
            svgRemoveXlink: true,
            // svgViewBox: true,
            inputFrom: "pae"
        });

        let notationExamples = document.querySelectorAll("tr.notation-example");

        if (notationExamples !== null)
        {
            for (let row of notationExamples)
            {
                let verovioSvg = "";

                for (let column of row.children)
                {

                    if (column && column.classList.contains("notation-code"))
                    {
                        let paeCode = column.querySelector("script").textContent;
                        let loadSuccess = tk.loadData(JSON.stringify(JSON.parse(paeCode)));

                        if (loadSuccess)
                        {
                            verovioSvg = tk.renderToSVG();
                        }
                    }
                    else if (column.classList.contains("notation-result"))
                    {
                        column.innerHTML = verovioSvg;
                    }
                }
            }
        }
    }
});
