function updateJumlah() {
  var list = document.getElementById("keranjang");
  var total = list.getElementsByTagName("li").length;
  document.getElementById("jumlahItem").firstChild.data = "Total jenis barang: " + total;
}

function tambahItem() {
  var input = document.getElementById("namaBarang");
  var nama = input.value;

  if (nama === "") {
    alert("Nama barang tidak boleh kosong!");
    return;
  }

  var li = document.createElement("li");
  var teks = document.createTextNode(nama);
  li.appendChild(teks);

  document.getElementById("keranjang").appendChild(li);
  input.value = "";
  updateJumlah();
}

function hapusItemTerakhir() {
  var list = document.getElementById("keranjang");
  var items = list.getElementsByTagName("li");

  if (items.length > 0) {
    var itemTerakhir = items[items.length - 1];
    list.removeChild(itemTerakhir);
    updateJumlah();
  } else {
    alert("Keranjang sudah kosong!");
  }
}