var totalNode;

function init() {
  totalNode = document.getElementById("totalBayar").firstChild;
  hitungTotal();
}

function hitungTotal() {
  var harga = parseFloat(document.getElementById("harga").value);
  var diskon = parseFloat(document.getElementById("diskon").value);
  var potongan = harga * (diskon / 100);
  var akhir = harga - potongan;

  totalNode.data = akhir;
}