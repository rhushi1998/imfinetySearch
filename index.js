

const box = document.getElementById("box")

function getimg(){
    const image = fetch("https://api.unsplash.com/photos/?client_id=pjOY_pLoPfwJUyiMQBuAiKCmbg1sPIbSGKe6w7Zn8yQ&per_page=10")

    // console.log(image);
    image.then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log(data);
        data.map((ele)=>{
            const img = document.createElement('img')
            img.src = ele.urls.small
            const sec = document.createElement("div")
            sec.appendChild(img);
            img.classList.add("photo")
            sec.classList.add("sec")
            box.appendChild(sec)
        })
    })
}

window.addEventListener('scroll',()=>{
    console.log(window.innerHeight);
    if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
         getimg()
    }
})

getimg();