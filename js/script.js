let miliSecondsValue = 0 // Inicia o valor de Milisegundos com 0
let secondsValue = 0 // Inicia o valor de Segundos com 0
let minutesValue = 0 // Inicia o valor de Minuto com 0
let isPaused = true // Começa com isPaused como True
let isFirstClick = false // Primeiro Clique começa como False
let interval // Variável que armazena o intervalo

// Adiciona evento ao Botão Iniciar
startBtn.addEventListener('click', () => {
    isPaused = false
    isFirstClick = true
    timer()
})

// Adiciona Evento ao Botão de Pausar
pauseBtn.addEventListener('click', () => {
    isPaused = true
    isFirstClick = false
    clearInterval(interval)
})

// Adiciona evento ao Botão de Continuar
resumeBtn.addEventListener('click', () => {
    isPaused = false
    if (!isFirstClick) {
        timer()
    }
    isFirstClick = true
})

// Adiciona Evento ao Botão Reset se estiver pausado
resetBtn.addEventListener('click', () => {
    if (isPaused) {
        clearInterval(interval)
        resetTimer()
    }
})

// Função Cronomêtro
function timer() {
    if (!isPaused) {
        interval = setInterval(() => {
            miliSecondsValue += 10
            if (miliSecondsValue >= 1000) {
                miliSecondsValue = 0
                secondsValue++
            } else if (secondsValue >= 60) {
                secondsValue = 0
                minutesValue++
            }
            miliseconds.innerText = formatMiliSeconds(miliSecondsValue)
            seconds.innerText = formatSeconds(secondsValue)
            minutes.innerText = formatMinutes(minutesValue)
        }, 10)
    }
}

// Função Reset
function resetTimer() {
    miliSecondsValue = 0
    secondsValue = 0
    minutesValue = 0
    isPaused = true
    isFirstClick = true
    miliseconds.innerText = '00'
    seconds.innerText = '00'
    minutes.innerText = '00'
}

// Formata os Milisegundos
function formatMiliSeconds(miliSecondsValue) {
    return miliSecondsValue < 100 ? `0${miliSecondsValue}` : miliSecondsValue
}

// Formata os Segundos
function formatSeconds(secondsValue) {
    return secondsValue < 10 ? `0${secondsValue}` : secondsValue
}

// Formata os Minutos
function formatMinutes(minutesValue) {
    return minutesValue < 10 ? `0${minutesValue}` : minutesValue
}
