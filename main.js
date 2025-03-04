
    async function getRepo(Key){

        const baseURL = "https://api.github.com/search/repositories"
    
        const searchParams = new URLSearchParams({'q': `${Key}`,});
        let getGep = await fetch(`${baseURL}?${searchParams.toString()}`)
        getGep.json().then((json)=>{
                let elements = document.getElementsByClassName('parag');
                while (elements[0]) {
                elements[0].parentNode.removeChild(elements[0]);
                }
            for (let i = 0; 5 > i; i++){
                let parag = document.createElement('p')
                parag.addEventListener('click', (e)=>{
                    console.log(json.items[i]);
                    input.value = ""
                    let repElem = document.createElement('div')
                    repElem.addEventListener('click', (e)=>{
                        if (e.target.className === 'repDelButton'){
                          e.currentTarget.remove()
                        }
                    })
                    repElem.classList.add('repElem')
                    let repDelButton = document.createElement('p')
                    repDelButton.classList.add('repDelButton')
                    repDelButton.textContent = 'DEL'
                    let texlistRepElem = document.createElement('div')
                    texlistRepElem.classList.add('texlistRepElem')
                    let textElemName = document.createElement('p')
                    textElemName.textContent = `Name: ${json.items[i].name}`
                    let textElemOwn = document.createElement('p')
                    textElemOwn.textContent = `Owner: ${json.items[i].owner.login}`
                    let textElemStars = document.createElement('p')
                    textElemStars.textContent = `Stars: ${json.items[i].stargazers_count}`
                    texlistRepElem.append(textElemName, textElemOwn, textElemStars)
                    repElem.append(texlistRepElem, repDelButton)
                    if (document.querySelectorAll('.repElem').length < 5){
                        repList.append(repElem)
                    }
                    



                    let elements = document.getElementsByClassName('parag');
                    while (elements[0]) {
                    elements[0].parentNode.removeChild(elements[0]);
                    }
                })
                parag.textContent = `${json.items[i].name}`
                parag.classList.add('parag')
                input.after(parag)
            }
    
        }).catch((e)=>console.log('Ничгое не найдено'))
            
    }
let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
let input = document.createElement('input')
wrapper.appendChild(input)
document.body.appendChild(wrapper)
let repList = document.createElement('div')
repList.classList.add('repList')

wrapper.after(repList)


function getAjax(ms){
    let time
    return function(){
        clearTimeout(time)
        time = setTimeout(()=>{
            if (input.value){
                getRepo(String(input.value))
            }else{
                let elements = document.getElementsByClassName('parag');
                while (elements[0]) {
                elements[0].parentNode.removeChild(elements[0]);
                }

            }

        }, ms)
    }
}

let aj = getAjax(1000)

input.addEventListener('keydown', (e)=>{
    aj()
})

input.oninput = () => {
    if (input.value.charAt(0) === ' ') {
      input.value = '';
    }
  }















