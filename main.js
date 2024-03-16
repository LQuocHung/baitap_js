// bai 1

document.getElementById("btnBang").onclick = function () {
    const txtSoNgayLam = document.getElementById("txtSoNgayLam").value;
    console.log(txtSoNgayLam);
  
    const txtTien = document.getElementById("txtTien").value;
    console.log(txtTien);
  
    const number1 = parseFloat(txtSoNgayLam);
  
    const number2 = 100.0;
  
    const tich = number1 * number2;
    const kqTich = "Tiền lương nhân viên :" + tich;
    console.log(kqTich);
  
    document.getElementById("thongbao").innerHTML = kqTich;
  
    document.getElementById("thongbao").classList.add("thongbao");
  };
  
  // bai 2
  
  const bxtDoitien = document.getElementById("bxtDoitien");
  bxtDoitien.onclick = function () {
    const bxtMoney1 = document.getElementById("bxtMoney1").value;
    console.log(bxtMoney1);
  
    const bxtMoney2 = document.getElementById("bxtMoney2").value;
    console.log(bxtMoney2);
  
    const dola = parseFloat(bxtMoney1);
  
    const vnDong = 23.5;
  
    const tich = dola * vnDong;
    const kqQuydoi = "Số tiền sao quy đổi:" + tich;
    console.log(kqQuydoi);
  
    document.getElementById("quydoi").innerHTML = kqQuydoi;
  
    document.getElementById("quydoi").classList.add("quydoi");
  };
  
  // bai 3
  const btaBang = document.getElementById("btaBang");
  btaBang.onclick = function () {
    const bxtDai = document.getElementById("bxtDai").value;
  
    const bxtRong = document.getElementById("bxtRong").value;
  
    const chieuDai = parseFloat(bxtDai);
    const chieuRong = parseFloat(bxtRong);
  
    const dienTich = chieuDai * chieuRong;
    const kqDientich = "Dien tich hcn = " + dienTich;
    console.log(kqDientich);
  
    document.getElementById("btnThongbao").innerHTML = kqDientich;
  
    document.getElementById("btnThongbao").classList.add("btnThongbao");
  };
  
  const btxBang = document.getElementById("btxBang");
  btxBang.onclick = function () {
    const bxtDai1 = document.getElementById("bxtDai1").value;
  
    const bxtRong1 = document.getElementById("bxtRong1").value;
  
    dai1 = parseFloat(bxtDai1);
    rong1 = parseFloat(bxtRong1);
  
    const chuVi = (dai1 + rong1) * 2;
    const kqChuvi = "Chu vi hcn =" + chuVi;
    console.log(kqChuvi);
  
    document.getElementById("bxtThongbao").innerHTML = kqChuvi;
  
    document.getElementById("bxtThongbao").classList.add("bxtThongbao");
  };
  
  // bai 4
  
  const bntTong = document.getElementById("bntTong");
  bntTong.onclick = function () {
    const number_1 = document.getElementById("txtNumberN").value;
    const number_2 = document.getElementById("txtNumberX").value;
  
    const tong = number_1 + number_2;
    const kQua = "Tong la " + tong;
    console.log(kQua);
  
    document.getElementById("btnTongSo").innerHTML = kQua;
    document.getElementById("btnTongSo").classList.add("btnTongSo");
  };
  