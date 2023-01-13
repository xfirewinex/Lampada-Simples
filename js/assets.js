const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
const reset = document.getElementById('reset')
const msg = document.getElementById('msg')
const background = document.getElementById('bg', 'body')
const audio = new Audio('/audio/quebrando.mp3')

function isBroken(){
    return lamp.src.indexOf('quebrada') > -1

}

function show(){
    reset.classList.toggle("hide")
}

function lampOn () {
    if(!isBroken()){
        lamp.src = '/imgs/ligado.jpg'
        background.classList.remove('bg')
        background.classList.add('light')

    }
}

function lampOff (){
    if(!isBroken()){
        lamp.src = '/imgs/desligada.jpg'
        background.classList.remove('light')
        background.classList.add('bg')
}
}

function lampBroken(){
    lamp.src= '/imgs/quebrada.jpg'

    audio.play(audio);


    reset.classList.add('show')

    background.classList.remove('light')



}

reset.addEventListener('click', function(){
    msg.textContent = 'problema seukkkj, da f5 ae'
})

turnOn.addEventListener('click', lampOn)
    
turnOff.addEventListener('click', lampOff)

lamp.addEventListener('dblclick', lampBroken)

