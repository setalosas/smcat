
const quotesContent = document.querySelector('#myTabContent .lead')
const tBody = document.querySelector('tbody')

console.log('sdfsfsdfs')

const { $ } = window

const another = document.querySelector('#myTabContent #refact')
const list = document.querySelector('#profile #list')

const reloadFact = () => $.getJSON('https://catfact.ninja/fact', data => {
  quotesContent.innerHTML = data.fact
})

const reloadList = () => $.getJSON('https://catfact.ninja/breeds', data => {
  tBody.innerHTML = ''
  for (const {breed, coat, country, origin, pattern} of data.data) {
    tBody.innerHTML += `<tr><td>${breed}</td><td>${coat}</td><td>${country}</td><td>${origin}</td><td>${pattern}</td></tr>`
  }
})

reloadFact()
reloadList()

another.addEventListener('click', reloadFact)
list.addEventListener('click', reloadList)
