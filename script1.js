document.getElementById('searchBtn').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase();

    // ลิสต์คำค้นหากับหน้าที่จะลิงก์ไป
    if (query.includes('หน้าแรก')) {
      window.location.href = 'index.html';
    } else if (query.includes('ประเภทของสัตว์')) {
      window.location.href = 'index1.html';
    } else if (query.includes('สัตว์ใกล้สูญพันธุ์')) {
      window.location.href = 'index2.html';
    } else if (query.includes('สัตว์หายาก')) {
      window.location.href = 'index3.html';
    } else if (query.includes('เพลง')) {
      window.location.href = 'index4.html';
    } else if (query.includes('ประเภท') || query.includes('สัตว์')) {
      window.location.href = 'index1.html';
    } else {
      alert('ไม่พบผลลัพธ์ที่เกี่ยวข้อง');
    }
  });
  document.getElementById('searchInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('searchBtn').click();
  }
});
document.getElementById("Facebook").addEventListener("click", function () {
    window.open("https://www.facebook.com/paphangkon.anoma", "_blank");
  });
document.getElementById("instagram.").addEventListener("click", function () {
    window.open("https://www.instagram.com/zvawpx/", "_blank");
  });

