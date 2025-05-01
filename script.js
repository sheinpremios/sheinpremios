// Função para puxar a cidade do lead
function getCity() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const city = data.city || "sua região";
            document.getElementById("cidade").innerText = city;
        })
        .catch(() => {
            document.getElementById("cidade").innerText = "sua região";
        });
}

// Função para passar os parâmetros da URL para os links
function passURLParamsToLinks() {
    var queryString = window.location.search;

    if (queryString) {
        // Seleciona todos os links (<a>) na página
        var links = document.getElementsByTagName("a");

        // Itera sobre todos os links
        for (var i = 0; i < links.length; i++) {
            var href = links[i].href;

            // Verifica se o link já possui parâmetros
            if (href.indexOf("?") > -1) {
                links[i].href = href + "&" + queryString.substring(1);
            } else {
                links[i].href = href + queryString;
            }
        }
    }
}

// Chama as funções ao carregar a página
window.onload = function () {
    getCity(); // Puxar a cidade do lead
    passURLParamsToLinks(); // Passar os parâmetros da URL para os links
};
