// tạo localStorage 

// kiểu dữ liệu JSON 
// Sự khác nhau giữa JSON và Object 


const user = {
    id : 1 ,
    name : " good văn boy ",
}

const users = [
    
    {
        id : 1,
        name: " duciv" ,
        
    },
    {
        id : 2,
        name : "ducpro " ,
    },
]

// cách chuyển đổi từ JS sang JSON 

let userJson = JSON.stringify(user);
console.log(" dữ liệu JSON : ", userJson);

// cách chuyển đổi từ JS sang JSON 
let userJS = JSON.parse(userJson);
console.log(" dữ liệu JS : ", userJS);

// thêm dữ liệu lên localStorage 
localStorage.setItem("user", userJson);

localStorage.setItem("users",JSON.stringify(users));

// lấy dữ liệu từ localStorage 
let userLocal = localStorage.getItem("user");
console.log("userLocal : ", userLocal);
// JSON.parse(userLocal)
console.log("userLocal", userLocal );

// xóa dữ liệu khỏi localStorage 
localStorage.removeItem("uesers");

// xóa tất cả dữ liệu key khỏi localStorage
localStorage.clear();


// xây dựng ứng dụng TodoList 
// 1. Thêm mới công việc và lưu lên LocalStorage
// Thiết kế dữ liệu cho đối tượng công việc : name , status , id  
// 2. Hiển thị danh sách công việc ra ngoài giao diện 
// 3. Xóa công việc 
// 4. Sửa công việc 
