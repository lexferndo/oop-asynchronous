class Registrasion{
    constructor(name, age, allowance){
        this.name = name;
        this.age = age;
        this.allowance = allowance;
    }
}

function printResult(){
    return new Promise((resolve) => {
        setTimeout(() => {
            alert("Data telah di input");
            resolve()
        }, 1000)
    })
    
}

const data = []

// Promise > Async - Await untuk memastikan alert muncul baru data masuk

async function button(){
    const newName = document.querySelector("#nama")
    const newAge = document.querySelector("#umur")
    const newAllowance = document.querySelector("#uang")

    if(newRegist() === false){
        newName.value = ""
        newAge.value = ""
        newAllowance.value = ""
    }else{
        await printResult()
        getNewRegist()
        average()
        newName.value = ""
        newAge.value = ""
        newAllowance.value = ""
    }
}

//  Untuk belajar cara lain =>
// async function button(){
//     const newInput = document.querySelectorAll("input")

//     if(newRegist() === false){
//         newInput[0].value = ""
//         newInput[1].value = ""
//         newInput[2].value = ""
//     }else{
//         await printResult()
//         getNewRegist()
//         average()
//         newName.value = ""
//         newAge.value = ""
//         newAllowance.value = ""
//     }
// }

// queryselectorall > menggunakan index[] untuk menentukan nilai mana yg dituju



// const btnElement = document.getElementById("btn-submit")

// btnElement.addEventListener("click", () => {
    
// })

function newRegist(){
    const newName = document.getElementById("nama").value
    const newAge = document.getElementById("umur").value
    const newAllowance = document.getElementById("uang").value

    let nameLength = newName.length

    if(nameLength < 10){
        alert("Nama Kurang dari 10 Karakter")
        return false
    }else if (newAge < 25){
        alert("Umur Kurang dari 25 Tahun")
        return false
    }else if (newAllowance < 100000 || newAllowance > 1000000){
        alert("Uang Sangu Kurang dari Rp.100.000 atau Lebih dari Rp.1.0000.000")
        return false
    }else{
        return true
    }
}

function getNewRegist(){
    const newName = document.getElementById("nama").value
    const newAge = document.getElementById("umur").value
    const newAllowance = document.getElementById("uang").value
    const tabel = document.getElementById("table-pendaftar")

    const newRegist = new Registrasion(newName, newAge, newAllowance)
    data.push(newRegist)

    const baris = tabel.insertRow(0)
    const kol1 = baris.insertCell(0)
    const kol2 = baris.insertCell(1)
    const kol3 = baris.insertCell(2)

    kol1.innerHTML = newName
    kol2.innerHTML = newAge
    kol3.innerHTML = newAllowance
}

function average(){
    const tabel = document.getElementById("table-pendaftar")
    const aveTabel = document.getElementById("table-ratarata")

    let totalAllowance = 0
    let totalAge = 0

    for(let index = 0; index < tabel.rows.length; index++){
        totalAge = totalAge + parseInt(tabel.rows[index].cells[1].innerHTML)
        totalAllowance = totalAllowance + parseInt(tabel.rows[index].cells[2].innerHTML)
    }

    let aveAllowance = totalAllowance / tabel.rows.length
 
    let aveAge = totalAge / tabel.rows.length

    const baris1 = aveTabel.rows[0].cells[1]
    const baris2 = aveTabel.rows[1].cells[1]

    baris1.innerHTML = aveAllowance
    baris2.innerHTML = aveAge
}
