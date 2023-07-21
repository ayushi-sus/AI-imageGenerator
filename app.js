const API_KEY="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"
const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector("input")
const imageSection = document.querySelector('.images-section')
const getImages = async() => {
    const options = {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "prompt": inputElement.value,
            "n": 4,
            "size": "1024x1024",

        })
    }
    try{
      const response = await fetch('https://api.openai.com/v1/images/generations', options)
      const data = response.json()
      data?.data.forEach(imageObject => {
        const imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container")
        const imageElement = document.createElement("img")
        imageElement.setAttribute("src", imageObject.url)
        imageContainer.append(imageElement)
        imageSection.append(imageContainer)
      })



    }catch(error){
        console.log(error)
    }
}
submitIcon.addEventListener('click', getImages)

//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