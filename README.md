# infinetySearch

# Hostte Link:-

### here we have created infined scroll image project by first getting an api from unsplash Infinite scrolling is a design approach that loads content continuously as the user scrolls down. It eliminates the need for pagination.
To implement infinite scrolling in HTML, CSS, and JavaScript, you can use the overflow property to create a scrollable container for your content. You can also use JavaScript to detect when the user reaches the bottom of the container and fetch new data.
Here are some steps you can follow to create a project structure for infinite scrolling:
Create a new folder called infinite-scroll.
Create two subfolders called css and js.
Create the style.css in the css folder and app.
You can also use the addEventListener() and appendChild() methods to infinitely scroll in JavaScript.
Infinite Scroll is a JavaScript plugin that automatically adds the next page. You've likely seen it in use all over the web.
Infinite scrolling in HTML, CSS and JavaScript 

## Step 1 creating html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="image-box">
        <h1>Images infinite scroll</h1> 

        <div id="box"></div>
    
    </div>
     
    <script src="./script.js"></script>
</body>
</html>

## Step 2 creating css file
body{
    scroll-behavior: smooth;
    box-sizing: border-box;
    position: relative;
    font-family: fantasy;
    font-size: 1.5rem;
    background-color: aquamarine;
}

#image-box{
    text-align: center;
}


#box{
  /* border: 2px solid red; */
  
}

.photo:hover{
    transform: scale(1.2);
    cursor: pointer;
}


 .photo{
    width: 40%;
    transition: .5s;
 }
.sec{
    /* border: 2px solid green; */
}

## Step 4 creating js file



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
