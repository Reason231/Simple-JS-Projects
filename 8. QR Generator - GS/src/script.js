const input=document.querySelector("input")
const btn=document.querySelector("#btn")
const img=document.querySelector("img")

btn.addEventListener("click",()=>{
    const data = input.value; // The URL or text you want encoded
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;
    
    img.src = qrApiUrl; // Sets the image source to the QR code
    img.style.display="block"
    input.value=""
})

