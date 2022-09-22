async function include() {
    // let path = "header.html";
    let path = "/physics/header.html";
    
    let header_string = await fetch(path).then(html => html.text());
    let header = document.getElementsByTagName("header")[0];
    header.innerHTML = header_string + header.innerHTML;
}

include();