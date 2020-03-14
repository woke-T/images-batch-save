import downloadImg from '../../lib/index'

// 需要下载的文件
const files = [
  { name: '猫猫1', url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1175706239,3702931664&fm=26&gp=0.jpg' },
  { name: '猫猫2', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1455736980,4117034086&fm=26&gp=0.jpg' },
  { name: '猫猫3', url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=214678411,2265286434&fm=26&gp=0.jpg' },
  { name: '猫猫4', url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2043797193,3540976039&fm=26&gp=0.jpg' },
]
// 文件展示
let ul = document.createElement('ul')
files.forEach(item => {
  let li = document.createElement('li')
  li.innerHTML = `<img src='${item.url}' />`
  ul.appendChild(li)
})
document.getElementById('root').appendChild(ul)


// 下载
document.getElementById('down').addEventListener('click', () => {
  downloadImg(files)
})