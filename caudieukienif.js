let year = parseInt(prompt("Enter a year"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + "năm nhuận");
        } else {
            alert(year + "khong phai nam nhuan");
        }
     } else {
        alert(year + " năm nhuận");
     }
    } else {
    alert(year + " khong phai nam nhuan");
}