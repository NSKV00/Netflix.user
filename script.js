function init(){
const header = document.createElement("header")
const h1 = document.createElement("h1")
h1.innerText = "NETFLIX"
header.append(h1)


const main =  document.createElement("main")
    const h2 = document.createElement("h2")
    h2.innerText = "Quem está assistindo?"

    const ul = document.createElement("ul")

        const users = [
            {
                nome:"Aqui",
                image: "usuário2.jpeg"
            },
            {
                nome:"Judas",
                image: "usuário1.jpeg"
            },
            {
                nome:"Fosfeto",
                image:"usuário3.jpeg"
            },
            {
                nome:"Tirano",
                image:"usuário1.jpeg"
            },
            {
                nome:"Consigurações",
                image:"usuário1.jpeg"
            },
        ]
        users.forEach((user)=>{
            const li =  document.createElement("li")
            const img = document.createElement("img")
            img.src = user.image
            img.alt = "usuário 1"
            const p = document.createElement("p")
            p.innerText = user.nome
                li.append(img,p)
                ul.append(li)
        })
        //const li =  document.createElement("li")
            //const img = document.createElement("img")
            //img.src = "usuário2.jpeg"
            //img.alt = "usuário 1"
            //const p = document.createElement("p")
            //p.innerText = "Aqui"
                //li.append(img,p)

        //const li2 =  document.createElement("li")
            //const img2 = document.createElement("img")
            //img2.src = "usuário1.jpeg"
            //img2.alt = "usuário 2"
            //const p2 = document.createElement("p")
            //p2.innerText = "Ali"
                //li2.append(img2,p2)

        //const li3 =  document.createElement("li")
            //const img3 = document.createElement("img")
            //img3.src = "usuário3.jpeg"
            //img3.alt = "usuário 3"
            //const p3 = document.createElement("p")
            //p3.innerText = "Fosfeto"
                //li3.append(img3,p3)

        //const li4 =  document.createElement("li")
            //const img4 = document.createElement("img")
            //img4.src = "usuário1.jpeg"
            //img4.alt = "usuário 4"
            //const p4 = document.createElement("p")
            //p4.innerText = "Tirano"
                //li4.append(img4,p4)

        //const li5 =  document.createElement("li")
            //const img5 = document.createElement("img")
            //img5.src = "usuário1.jpeg"
            //img5.alt = "usuário 5"
            //const p5 = document.createElement("p")
            //p5.innerText = "configurações"
                //li5.append(img5,p5)

    const button = document.createElement("button")
        button.innerText = "GERENCIAR PERFIS"

//ul.append(li,li2,li3,li4,li5)
main.append(h2,ul,button)
const body = document.querySelector("body")
body.append(header,main,ul,button)
main.appendChild(ul)
main.appendChild(button)
}
init()