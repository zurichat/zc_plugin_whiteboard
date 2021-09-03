const jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdn.jsdelivr.net/npm/html2canvas@1.3.2/dist/html2canvas.min.js');
document.head.appendChild(jQueryScript);

function capture() {
    const captureElement = document.querySelector('#capture')
    html2canvas(captureElement)
      .then(canvas => {
        canvas.style.display = 'none'
        document.body.appendChild(canvas)
        return canvas
      })
      .then(canvas => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'my-image.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
      })
  }
  
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', capture)

 