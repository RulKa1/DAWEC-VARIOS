function ejercicio1() {
    let ventanaNueva = window.open("", "pop-up", "toolbar=Yes,width=500,height=300,menubar=Yes,scrollbars=Yes,screenY=10,screenX=20");
    ventanaNueva.document.write("Esto Es una ventana emergente")
    ventanaNueva.moveBy(300,100)
    
    ventanaNueva.close()

}
function boton() {
    let ventanaNueva = window.open("", "pop-up", "toolbar=no,menubar=no,scrollbars=no,screenY=10,screenX=20");
    let boton = document.createElement("button")
    ventanaNueva.document.body.append(boton)
    boton.setAttribute("onclick", "window.close()")
    

}
