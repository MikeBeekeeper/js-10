!function(){var n=document.querySelector(".country-info");function t(t){n.innerHTML=t}document.querySelector("#search-box").addEventListener("input",(function(n){fetch("https://restcountries.com/v3.1/name/Ukraine").then((function(n){return n.json()})).then((function(n){!function(n){n.map((function(n){return'\n    < div class="card" >\n    <p class="country_name">\n        <span class="country_flag">'.concat(n.flag,"</span> ").concat(n.name.official,'\n    </p>\n    <p class="country_capital">Capital: ').concat(n.capital,'</p>\n    <p class="country_population">Population: ').concat(n.population,'</p>\n    <p class="country_languages">Languages: </p>\n</div>\n    ')})).join("")}(n)})).then(t)}))}();
//# sourceMappingURL=index.831e2e6f.js.map
