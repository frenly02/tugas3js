function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    let input = `Nama : ${nama} <br>
    Pekerjaan : ${pekerjaan} <br>
    Hobby : ${hobby}`;
    let notInput = "Maaf nama, pekerjaan atau hobby belum terisi";
    let hasil = ( nama && pekerjaan && hobby != "") ? input : notInput;

    document.getElementById("hasil").innerHTML = hasil;
}