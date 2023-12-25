const generateForm = document.querySelector('.generate-form');
const generateResult = document.querySelector('.generate-result');

const OPENAI_API_KEY="";

const generateAiImages = async (promtValue,imageQuantity)=>{
    try{
        const response = await fetch("https://api.openai.com/v1/images/generations",{
            method:"post",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: promtValue,
                n: imageQuantity,
                size: "512x512",
                response_format: "b64_json"
            })
        });
    }catch(error){
        console.log(error);
    }
}

generateForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const promtValue=document.querySelector('#user-promt').value;
  const imageQuantity=document.querySelector('#img-quantity').value;

  const imageCard = Array.from({length:imageQuantity},() =>
  `<div class="card loading">
    <img src="data:image/jpeg;base64,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" alt="image">
   </div>`
  ).join("");
  generateResult.innerHTML=imageCard;
  generateAiImages(promtValue,imageQuantity);
})
