const convertUrlToBase64 = function (url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    // 跨域处理
    img.crossOrigin = 'Anonymous'
    img.src = url
    img.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, img.width, img.height)
      const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
      const dataURL = canvas.toDataURL(`image/${ext}`)
      const base64 = {
        dataURL: dataURL,
        type: `image/${ext}`,
        ext: ext
      }
      resolve(base64)
    }
  })
}

const convertBase64ToBlob = function (base64) {
  const parts = base64.dataURL.split('base64,')
  const contentType = parts[0].split(':')[1]
  const raw = window.atob(parts[1])
  const rawLength = raw.length
  const uInt8Array = new Uint8Array(rawLength)
  for (let i = 0; i < rawLength; i++) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], { type: contentType })
}

const getBrowser = function () {
  const userAgent = navigator.userAgent
  if (userAgent.indexOf('OPR') > -1) {
    return 'Opera'
  }
  if (userAgent.indexOf('Firefox') > -1) {
    return 'FF'
  }
  if (userAgent.indexOf('Trident') > -1) {
    return 'IE'
  }
  if (userAgent.indexOf('Edge') > -1) {
    return 'Edge'
  }
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome'
  }
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari'
  }
}

const downloadImg = function (arr) {
  const browser = getBrowser()
  arr.map(async item => {
    let base64Url = await convertUrlToBase64(item.url)
    let blob = convertBase64ToBlob(base64Url)
    if (browser === 'IE' || browser === 'Edge') {
      window.navigator.msSaveBlob(blob, item.name)
    } else {
      const a = document.createElement('a')
      const body = document.querySelector('body')
      a.download = item.name || 'image'
      a.href = URL.createObjectURL(blob)
      a.style.display = 'none'
      body.appendChild(a)
      a.click()
      body.removeChild(a)
      window.URL.revokeObjectURL(a.href)
    }
  })
}



export default downloadImg