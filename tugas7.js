//perulangan array isi 10 data tinggi bdn dgn for biasa dn for of
let array = [120, 156, 150, 170, 180, 159, 175, 190, 185, 160]

//perulangan biasa
console.log("Perulangan For biasa")
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
//perulangan for of
console.log("Perulangan For Of")
for (let x of array)
{
    console.log(x)
}