// const Resume={
//     contact:{
//         Name:"Mohamed Musthafa A",
//         Email:"musthafam39@gmail.com",
//         Mobile:"+91-9655885264",
//         Adress:"Perambalur,Tamilnadu-621119"
//     },
//     Personnal_Details:{
//         Father_Name:"Abdul Hameed",
//         Mother_Name:"Sajitha",
//         Age:30,
//         Date_of_Birth:"10-May-1991",
//         Nationality:"Indian",
//         Marrital_status:"Unmarried"
//     },
//     Eduacation:{
//         Degree:"BE-Mechanical Engineering",
//         college:"Ksr Institute For Engineering and Technology",
//         Batch:2015
//     },  
//     Experience:{
//         1:{
//             company_name:"Aradhana Enterprises",
//             Position:"Production Incharge",
//             Duration:"May/2015-July/2016",
//         },
//         2:{
//             company_name:"Hinduja Global Solution",
//             Position:"Customer Relation Agent",
//             Duration:"Sep/2016-Sep/2017",

//         },
//         3:{
//             company_name:"VFS Global Solution",
//             Position:"Operation Officer",
//             Duration:"Mar/2019-Dec/2020",

//         }
//     },
//     Language:{
//         Tamil:"Read,Write,Speak",
//         English:"Read,Write,Speak",
//         Malayalam:"Read,Write,Speak"
//         }

// }  
// console.log(Resume);



// const Personnal={
//     Father_Name:"Abdul Hameed",
//     Mother_Name:"Sajitha",
//     Age:30,
//     Date_of_Birth:"10-May-1991",
//     Nationality:"Indian",
//     Marrital_status:"Unmarried"
// }

// // (Object.values(Personnal)).forEach((value)=>console.log(value));
// //for in loop
// for(let key in Personnal){
//     console.log(Personnal[key]);
// }

// // for of loop
// for(let list of Object.keys(Personnal)){
//     console.log(Personnal[list]);
// }

// //for loop
// for(i=0;i<Object.values(Personnal).length;i++){
//     console.log((Object.values(Personnal))[i]);
// }

// // for each loop
// Object.values(Personnal).forEach((value)=>console.log(value));

// session taks of day 4

// How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log(obj1.name==obj2.name);
console.log(obj1.age==obj2.age);




// Use the rest countries API url -> and display all the country flags in console
// Use the same rest countries and print all countries name, region, sub region and population



const getCountries=()=>{

    
    const xhr =new XMLHttpRequest();
    
    
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();

    xhr.responseType = "json"; 

    //after getting the response,whta should we do?- print on console
    xhr.onload =()=>{
        const Countries =xhr.response;
        const countryname=Countries.map((details)=>details.name.common);
        const countryregion=Countries.map((details)=>details.region);
        const countrysubregion=Countries.map((details)=>details.subregion);
        const population=Countries.map((details)=>details.population);
        

        const countryflags=Countries.map((details)=>details.flags.png);


        // console.log("Full data",Countries)
        console.log(countryname);
        console.log(countryregion);
        console.log(countrysubregion);
        console.log(population);
        


          console.log(countryflags);
    };
};

getCountries();

