var input_link = document.body.appendChild(
    document.createElement("input")
)
input_link.placeholder = "Введите ссылку на картинку"
input_link.addEventListener("change", getPicture)

var message  = document.body.appendChild(
    document.createElement("p")
)
var pic = document.body.appendChild(
    document.createElement("img")
)
pic.style = `margin: 10px 0;`

function getPicture (event) {
    event.preventDefault()
    var link = document.getElementsByTagName("input")[0].value

    if (link.indexOf("https://") === -1){
        document.getElementsByTagName("input")[0].value = ""
        message.innerText = "Oшибка! Введите ссылку на картинку"
        pic.src = ""
        return 
    } else {
        
        document.getElementsByTagName("input")[0].value = ""
        message.innerText = ""
        var request = new Request( 
            link,
            {
                mode: "cors"
            }
        )

        fetch (request)
            .then( response => { response.blob()
                .then( blobImg => {
                    var imgRef = URL.createObjectURL(blobImg)
                    pic.src = imgRef
                    pic.width = "200"
                })
            })
    }
   
}

input_link.removeEventListener("click", getPicture)


// URL picture is work
// https://www.thehappycatsite.com/wp-content/uploads/2017/09/british-blue-cat.jpg
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRL_dAcAvZ0lIQYIp1G4OoNq94sC42_MwplTWG4pcOr-kGZtalw
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfwd3CoQDmUSYl0TteOrOrxh71r32dOyqKaz57bd5GuaNLeK8
// 






