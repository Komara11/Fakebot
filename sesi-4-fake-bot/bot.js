const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        `Halo semalat datang di EcaBot. Siapa nama kamu?`,
        `Halo ${data?.nama}, berapa usia kamu?`,
        `oh ${data?.usia} Wah sama dong!. BTW udah punya pacar belum ?`,
        ` oh ${data?.pacar}, yaudah kalo gitu! kalo hobi kamu apa ?`,
        `oh , boleh tuh lain kali ${data?.hobi}  bareng ya!!`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botKlik () {
    init ++
    if (init == 1){
        botDelay({nama : jawaban.value})
    }else if (init == 2){
        botDelay({usia : jawaban.value})
    }else if (init == 3){
        botDelay({pacar : jawaban.value})
    }else if(init == 4){
        botDelay({hobi : jawaban.value})
    }else if ( init == 5 ){
        finish()
    }else{
        botEnd()
    }
}

function botDelay(jawabanUser){
    setTimeout( () => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1000] )
    userData.push(jawaban.value)
    jawaban.value = " "
}

function finish (){
    pertanyaan.innerHTML = `Thanks ya ${userData[0]} udah maen ke EcaBot, jangan lupa nanti 
    kita ${userData[3]} bareng ya!!!`
    jawaban.value = "Siap thank juga EcaBot Muachhh."
}

function botEnd(){
    window.location.reload()
}