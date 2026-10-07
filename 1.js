let c =  console.log
let cc = console.dir


function calcSmens(n) {
    if(n > 0 && n <= 12){
        now = new Date(new Date().getFullYear(), n-1, new Date().getDate(), 00, 00, 00, 000)
        startSmens = [
            new Date(2024, 0, 2, 08, 00, 00, 00, 000),
            new Date(2024, 0, 3, 08, 00, 00, 00, 000),
            new Date(2024, 0, 4, 08, 00, 00, 00, 000),
            new Date(2024, 0, 5, 08, 00, 00, 00, 000),
            new Date(2024, 0, 3, 20, 00, 00, 00, 000),
            new Date(2024, 0, 4, 20, 00, 00, 00, 000),
            new Date(2024, 0, 5, 20, 00, 00, 00, 000),
            new Date(2024, 0, 6, 20, 00, 00, 00, 000)
        ]
        msSmens = []
        startSmens.forEach(el => {
            while (el.getFullYear() !== now.getFullYear() || el.getMonth() !== now.getMonth()) {
                el.setDate(el.getDate() + 4)
            }
            ms_el = []
            while (el.getFullYear() == now.getFullYear() && el.getMonth() == now.getMonth()) {
                ms_el.push(el.getDate())
                el.setDate(el.getDate() + 4)
            }
            msSmens.push(ms_el)
            
        })
        month = [
            now.toLocaleString('ru', { month: "long" }),
            now.toLocaleString('ru', { month: "numeric" }),
            32 - new Date(now.getFullYear(), now.getMonth(), 32).getDate()
        ]
        obj = {
            month,
            smens: {
                s_1d: msSmens[0], 
                s_1n: msSmens[4],
                s_2d: msSmens[1],
                s_2n: msSmens[5],
                s_3d: msSmens[2],
                s_3n: msSmens[6],
                s_4d: msSmens[3],
                s_4n: msSmens[7]
            }
        }
        return obj
    }
}


let s = document.querySelector("select")
let p = document.querySelector("pre")
let t = `
    смена 1 день    [ ${calcSmens(s.value).smens.s_1d} ]
    смена 1 дночь   [ ${calcSmens(s.value).smens.s_1n} ]
    смена 2 день    [ ${calcSmens(s.value).smens.s_2d} ]
    смена 2 ночь    [ ${calcSmens(s.value).smens.s_2n} ]
    смена 3 день    [ ${calcSmens(s.value).smens.s_3d} ]
    смена 3 ночь    [ ${calcSmens(s.value).smens.s_3n} ]
    смена 4 день    [ ${calcSmens(s.value).smens.s_4d} ]
    смена 4 ночь    [ ${calcSmens(s.value).smens.s_4n} ]
`
p.innerText = t
s.addEventListener("input", event=>{
    let t = `
    смена 1 день    [ ${calcSmens(s.value).smens.s_1d} ]
    смена 1 дночь   [ ${calcSmens(s.value).smens.s_1n} ]
    смена 2 день    [ ${calcSmens(s.value).smens.s_2d} ]
    смена 2 ночь    [ ${calcSmens(s.value).smens.s_2n} ]
    смена 3 день    [ ${calcSmens(s.value).smens.s_3d} ]
    смена 3 ночь    [ ${calcSmens(s.value).smens.s_3n} ]
    смена 4 день    [ ${calcSmens(s.value).smens.s_4d} ]
    смена 4 ночь    [ ${calcSmens(s.value).smens.s_4n} ]
`
    p.innerText = t
})






    
