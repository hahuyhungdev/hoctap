// FOR IN : -object thì for in lấy giá trị( for(var key in tenObject)
//          -arry thì lấy số.Date
// FOR OF : -object trả về mảng, muốn lấy giá trị thì (for ( var value of object.value(tenObject))) 
function test(myname,age){

    document.getElementById("demo").style.cssText = "font-size:20px; font - style:italic; color:red;";
    // document.getElementById("demo").innerHTML= "oke rùi đó trừi ";
   
  
    var myname = document.getElementById("ten").value;
    var age = document.getElementById("tuoi").value;
    if (myname == 0 ){
                console.log(myname,"chuong trinh khong co gi het sao chay ong noi"); }
    age = Number(age);
    // age -=1;
    // console.log("tuoi cua toi la",age);
    if(age == 0 )  {  
        console.log(age,"khong co gi het sao chay");
        }
    if(age == 25 ){
        console.log("25 ket hon duoc rui");
    }
    else if(age >= 18) {
        console.log("ban du tuoi cuoi nhau");
    }
    else if(age < 0) {
        console.log(age,"ban chua duoc sinh ra ma ??? :D");
    }
    else if(age < 18 && age >= 1 ) { 
            console.log("chua du tuoi cuoi nhau dau");
    }
}

            // VAR CHỨA Function
var email = 'email'
var human = {
    name :'ha huy hung',
    age :'0' ,
    [email]: 'xx@gmmail.com',
    test: function(){
        return this.name;
    },
    
    eat : function(){
        console.log('hung an moi bua 3 bat com');
    },
    drink : function(){
        console.log(' muc tieu la uong 2lit nuoc moi ngay')
    },
    
    sleep : function(){
        console.log('di ngu luc 11h')
    }
};
//them vao var bang ham sau 
human.diachi='tanh linh';
// console.log(human.diachi)
//xoa var 
delete human.diachi;
// //
// console.log( human.email);


var fuman = ["messi","ronaldo","vo dich"];

fuman.push("2021");
fuman.pop(); //dùng de xoa nen fuman[3] khong con

fuman = fuman.sort();
// fuman = fuman.reverse(); //đảo ngược
var lastfuman = fuman[fuman.length-1];

var Numberr = fuman.length;
// console.log(fuman);
// console.log(lastfuman);
// console.log(Numberr);  //hienthidodai
// console.log(human.name);
// human.drink();

for( let property in human ) {
    // console.log(human[property]);
}
            // random ngau nhien
var rannum;
function getrandomm(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
rannum = getrandomm(3,100);
// console.log(rannum);

        // data Object
date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1 ;
var day = date.getDate();

// console.log(`${day}/${month} ${year}`);
        // return
function tong(a,b){
    return a.toString() + b.toString();
}
var resual = tong(0,0);
// console.log(resual);

//object constructor
function user(firstname, lastname, avatar){
    this.firstname = firstname;
    this.lastname = lastname;
    this.avatar = avatar;
    this.getname = function(){
        return `${this.firstname} ${this.lastname}`;S
    }
}
//them thuoc tinh vao user
user.prototype.classname = 'team';
user.prototype.getclassname = function(){
    return this.classname;
}

var user1 = new user('ha huy','hung','dora');
var user2 = new user('tran','anh','ryo');
// console.log(user1.getname());
// console.log(user2.getname());

//swich toan tu 3 ngoi
function Users(){
var coinkey = document.getElementById('tien').value;
coinkey = Number(coinkey);

var result = coinkey > 100 ? `${coinkey} coin:dang ki thanh cong`: ` mien phi`;
// console.log(result);

// console.log(typeof coinkey === 'number');

// if(coinkey == 0 )  {  
//     console.log(coinkey,"chương trình miễn phí ko áp dụng");
//     }
// else if(coinkey>100) {
//         console.log("dang ki thành cong");
//     }
// else if(coinkey >= 50) {
//     console.log("50%");
// }
}

 // for of va for in
// var info = {
//     name : 'hung',
//     age : '20',
//     diachi:'binh thuan'
    
// };
// for (var value of Object.values(info)) {
//     // console.log(value);
// }   


// var myarray = [
//     'java',
//     'html',
//     'css',
//     'js'

// ];
//  for (var value of myarray) {
//     //  console.log(value);
//  }



// while loop xet dieu kien chay toi length thi dung

 var myarray =[
      ' java',
      'php'
 ]
 var dodai = myarray.length;
 var i = 0 ;
  while( i < dodai ){
       i++;
    //    console.log(i);
  }


// do while loop chay truoc it nhat 1 lan roi moi xet dieu kien
//   var i = 0 ; 
//   var issue = false;
//    do {
//         i++;
//         console.log('nhập mã gif lần' + i);
//         if (true){
//             issue = true;
//             console.log('nạp thẻ thành công');
//         }

//    }
//    while (!issue && i < 3 );

//manng
var courses = [
    {
    name : 'user1',
    id: 1,
    coin: 500
    },
    {
        name : 'user2',
        id: 2,
        coin: 600
        },
    {
    name : 'user3',
    id: 3,
    coin: 900
    }    
]
//forEach : tra ve value
//every : tra ve boolean xem dung hay sai cho tat ca
//some: chi can 1 dua true la thoa dieu kien
//find: tim gia tri, co thi tra ve
courses.forEach(function(course,stt){
    // console.log(stt,course);
});
var hon400haykhong=courses.every(function(course,stt){
    return course.coin > 400 ;
});
// console.log(hon400haykhong);
//some
var hon700haykhong=courses.some(function(course,stt){
    // console.log(stt);
    return course.coin > 700 ;
});

// console.log(hon700haykhong);

//find
var timuser=courses.find(function(course,stt){
    // console.log(stt);
    return course.name === 'user3' ;
});
// console.log(timuser);

//map
function coursesHandler(course,stt){
    // console.log(course);
    return `<h2>${course.name}</h2>`;
}
var newcourses = courses.map(coursesHandler)
// console.log(newcourses.join(''));


//reduce 
//luu tru
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    i++;
    var total = accumulator + currentValue.coin;
    // console.table({
    //     'luot chay: ' : i,
    //     'bienn tich tru ': accumulator,
    //     'gia khoa hoc ': currentValue.coin,
    //     'tich tru duoc ': total
    // });
    return total;
}
var totalCoin = courses.reduce(coinHandler,0)  //khoi tao 
// console.log('tong doanh thu dat duoc la :'+ totalCoin);

        // thư viet reduce ngan gon hơn 
// var total = courses.reduce(function(accumulator,currentValue){
//     tong = accumulator + currentValue.coin;
//     return tong;
// },0)
// console.log(tong);


            // hoaclacothevietnhuthenaychodongian
// var totalCoin = courses.reduce(function(luutru,giatri){
//     return luutru + giatri.coin;
// },0)
// console.log(totalCoin);

        // noichuoi reduce
var vd=[100,200,300,400]
var tinhtien = vd.reduce(function(output,iteam){
    return output.concat(iteam)
},[]);
// console.log(tinhtien);

//baitap1
//flat "làm thẳng mảng trong mảng"
var deparray = [1,2,[3,4],5,6,[7,8,9]]
var flatarray =deparray.reduce(function(flatoutput,depiteam){
    return flatoutput.concat(depiteam)
},[])
// console.log(flatarray);

//bai2
var  topics = [
    {
        topic:"front-end",
        cou : [
            {
                id:1,
                title:"html,css"
            },
            {
                id:2,
                title:"java"
            }
        ]
    },
    {
        topic:"back-end",
        cou :[
            {
                id:1,
                title:"php"
            },
            {
                id: 2,
                title:"nodeJS"
            }
        ]
    },
];
var bai2 = topics.reduce(function(cou,topic) {
    return cou.concat(topic.cou);
}, []);
// console.log(bai2);
var html = bai2.map(function(cou) {
    return `
    <div>
        <h2>${cou.title}</h2>
        <h2>${cou.id}</h2>
    </div>
    `;
});
// console.log(html);























  
