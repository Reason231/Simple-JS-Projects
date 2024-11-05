
const span=document.querySelector("span")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzqLKmrlIE-dIBILPj0x-M1pcUPeqbG_GvXSRG2G2x8K2irU_tJhplfb9_eTxKRVCDmCQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    span.style.visibility="visible"
    alert("Email has been subscribed successfully")
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })