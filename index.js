let button = document.querySelectorAll(".b-design");
let display = document.getElementById("place_text");

   /*loop forEach ini ngecek semua elemen HTML yang punya class ".b-design"  
   terus tiap elemen dikasih event listener buat klik.  
   Kalo tombolnya ditekan, teksnya bakal nambah ke display. */

button.forEach(button => {
    button.addEventListener("click", function(){
        display.value += this.textContent;
    });
})

function calculate(){
    try {
        let result = eval(display.value)

         /* cek dulu, kalo hasilnya angka desimal atau bukan */

        if (display.value % 1 !== 0){

           /* .toFixed(2) bikin angka jadi 2 desimal, tapi balikannya string.  
            biar tetep angka, kita ubah lagi pake parseFloat(). */
            
            result = parseFloat(result.toFixed(2))
        }

        display.value = result
    } catch (error) {
        display.value = "ts pmo icl </3"
    }
}
   
function reset(){
    display.value = "";
}

