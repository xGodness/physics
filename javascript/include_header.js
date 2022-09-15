async function include() {
    let header_string = await fetch("../html/header.html").then(html => html.text());
    let header = document.getElementsByTagName("header")[0];
    header.innerHTML = header_string + header.innerHTML;
}

include();