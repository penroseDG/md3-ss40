  function savePersonalInfo() {
    let fullName = prompt("Nhập họ tên:");
    let age = prompt("Nhập tuổi:");
    let email = prompt("Nhập email:");
    let personalInfo = {
        fullName: fullName,
        age: age,
        email: email
    };
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    displayPersonalInfo();
}
function displayPersonalInfo() {
    let storedInfo = localStorage.getItem('personalInfo');
    if (storedInfo) {
        let personalInfo = JSON.parse(storedInfo);
        alert("Họ tên: " + personalInfo.fullName + "\nTuổi: " + personalInfo.age + "\nEmail: " + personalInfo.email);
    } else {
        alert("Không có thông tin cá nhân được lưu trữ.");
    }
}
displayPersonalInfo();