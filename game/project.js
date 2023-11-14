document.addEventListener("DOMContentLoaded", function () {




    // harcama tablosu için gerekli elmentleri seç
    
    var harcama =document.getElementById("harcama-formu")
    var harcamaBody = document.getElementById("harcama-body")
    
       // Gelir, Gider ve Kalan miktarları gösteren elementleri seçme
       var gelir = document.getElementById("geliriniz")
       var gider = document.getElementById("gideriniz")
       var kalan = document.getElementById("kalan")
     
       
        // Harcama formunu seçme
        var harcamaform = document.getElementById("harcama-formu")
    
    
    
         // Ekle formunu seçme
         var ekle = document.getElementById("ekle-formu")
         var gelirinput = document.getElementById("gelir-input")
    
    
    
         // Harcama tablosundaki toplam miktarları saklamak için değişkenler
         var toplamgelir = 0;
         var toplamgider = 0;
    
         // Harcama formu submit olduğunda çalışacak fonksiyon
         harcamaform.addEventListener("submit", function (event) {
            event.preventDefault();
        // Formdan değerleri al
            var tarih = document.getElementById("tarih").value;
            var miktaralani = parseFloat(document.getElementById("miktar").value)
            var harcamaalani = document.getElementById("harcama-alani").value;
            // Toplam gideri güncelle
            toplamgider+= miktar
    
            // Harcama tablosuna yeni satır ekle
            var yenisatir = harcamaBody.insertRow();
            var satir1 = yenisatir.insertCell(0);
            var satir2 = yenisatir.insertCell(1);
            var satir3 = yenisatir.insertCell(2);
            var satir4 = yenisatir.insertCell(3);
            
    
            satir1.innerHTML = tarih;
            satir2.innerHTML = harcamaalani;
            satir3.innerHTML = miktaralani.toFixed(2);
            satir4.innerHTML= '<button class="btn btn-danger" onclick="silRow(this)">Sil</button>';
             // Gider miktarını güncelle
             gider.innerHTML=toplamgider.toFixed(2)
             // Kalan miktarı güncelle
             kalan.innerHTML= (toplamgelir - toplamgider.toFixed(2));
    
            // Formu temizle
            harcamaform.reset();
    
          });
          // Ekle formu submit olduğunda çalışacak fonksiyon
          ekle.addEventListener("submit", function (event) {
            event.preventDefault();
            // Gelir miktarını al
            var gelirmiktarı = parseFloat(gelirinput.value);
             // Toplam geliri güncelle
             toplamgelir += gelirmiktarı;
             // Geliri gösteren elementi güncelle
             gelir.innerHTML = toplamgelir.toFixed(2);
             kalan.innerHTML = (toplamgelir - toplamgider.toFixed(2));
              // Gelir inputunu temizle
              gelirinput.value ="";
        
        
        });
    });
    
        // Silme işlemini gerçekleştiren fonksiyon
        function sil(btn) {
            var sutun =  btn,parentNode,parentNode;
            var miktar= parseFloat(row.cells[2].innerHTML);
    
             // Toplam giderden silinen miktarı çıkar
            toplamgider -= miktar;
      
             // Gider miktarını güncelle
            document.getElementById("gideriniz").innerHTML = toplamgider.toFixed(2);
      
            // Kalan miktarı güncelle
            document.getElementById("kalan").innerHTML = (toplamgelir - toplamgider).toFixed(2);
            
            // Satırı tablodan sil
            row.parentNode.removeChild(row);
        }