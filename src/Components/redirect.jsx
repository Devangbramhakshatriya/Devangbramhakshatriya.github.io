function Redirect(){

    let link = document.createElement("a");
    window.open("https://drive.google.com/file/d/1qpVsjmoE0wzYBLxoXSD1aBJtNVR1e7kU/view?usp=sharing")
    link.href = "https://drive.google.com/uc?export=download&id=1qpVsjmoE0wzYBLxoXSD1aBJtNVR1e7kU";

    link.click();

    link.remove();
}

export default Redirect;