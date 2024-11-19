

// VARIABLE
//A VARIABLE IS ESSENTIALLY A CONTAINER,THEN YOU CAN STORE VALUES INTO SUCH A CONTAINER
//TO DECLARE VARIABLE IN JAVASCRIPT,WE OFTEN USE THESE COMMON THREE KEYWORD:

//VAR
//CONST
//LET
//THESE THREE WORDS ARE OFTEN COMMON WITH DECLARING VARIABLE IN JAVASCRIPT PROGRAMMING LANGUAGE

//THE PREFIX,FOLLOWING THE NAME OF A VARIABLE


const name = 'godsent'


console.log(name)

let surname = 'amanda'

console.log(surname)

let middlename = 'emmanuel'

console.log(middlename)

let lastname = 'chidera'

console.log(lastname)


//primity data type:primity data type are data type that can onlystore a single value,
//however we have five types of primity data type:
//strings
//number
//boolean
//undefined
//null

//reference data type are data types that can store multiple values.Unlike primitive data type we can store a single value,but refrence data type allows us to store multiple values
//examples of reference data type:
//array
//object
//functions

const personalInfo = {


    last : 'judith',

    age: 34,

    favFood: 'chicken',

    address:{

        city: 'port-harcourt',
        state:'rivers-state'
    }
    
}



const peop = [{


    last : 'judith',

    age: 34,

    favFood: 'chicken',

    address:{

        city: 'port-harcourt',
        state:'rivers-state'
    }
    
},

{
    last : 'frank',

     age : 24,
     

    address :{

        city: 'miami',
        state: 'mumbai',
         zipcode: '123'
     }
},

{
    last : 'solomon',

     age : 28,
     

    address :{

        city: 'miami',
        state: 'mumbai',
         zipcode: '123'
     }
},

{
    last : 'blossom',

     age : 37,
     

    address :{

        city: 'miami',
        state: 'mumbai',
         zipcode: '123'
     }
},
{
    last : 'favour',

     age : 40,
     

    address :{

        city: 'miami',
        state: 'mumbai',
         zipcode: '123'
     }
},
{
    last : 'goodluck',

     age : 39,
     

    address :{

        city: 'miami',
        state: 'mumbai',
         zipcode: '123'
     }
},
{
    last : 'prince',

     age : 50,
     

    address :{

        city: 'miami',
        state: 'mumbai',
         zipcode: '123'
     }
}


]
console.log(peop)

console.log(personalInfo)

console.log(personalInfo.favFood)


console.log(personalInfo.address.city)

console.log(personalInfo.age)

const info = {

   middlename: 'daniel',

   age: 17,

   favfood: 'plaintain',

   address:{
    city: 'lagos',
    state: 'ogun state'
   }

}
console.log(info)


//array are also reference data type amd these equally helps us to store sequence or value
   //array is very dynamic in js because it allows us to store primitive and reference values



   const informations = ['ebuka', 'emeka','daniel','anthony','matthew']
//    console.log(informations[0])
//    console.log(informations[1])
//    console.log(informations[2])
//    console.log(informations[3])
//    console.log(informations[4])

   //object:they are collections of key pair values 
   const personal__info = ['umunnachidera014@gmail.com','8101427930']
//    console.log(personal__info[0])
//    console.log(personal__info[1])



   

for (let i = 0; i < informations.length; i++) {
   console.log(informations)
    
}
   




   //you can also store reference value insdide


   const people = [
    {   
        active: true,
        username:  'george',

        lastname: 'amanda',

        address:{

            city: 'miami',
            state: 'mumbai',
             zipcode: '123'
        }

   },


    {   
        active: true,
        username:  'larry',

        lastname: 'trump',

        address:{

            city: 'Los Angelos',
            state: 'USA',
             zipcode: '458'
        }

   },


   {   
    active: true,
    username:  'john',

    lastname: 'donald',

    address:{

        city: 'Los Angelos',
        state: 'USA',
         zipcode: '345'
    }

},
   
 
]



console.log(typeof(people))


for (let i = 0; i < peop.length; i++) {
   console.log(peop)
    
}
//functions are like bags containing insructions on what order the computer should execute an information 
//if you want to declare functions you start with the keyword function,followed by the name of the function and next the bracket of the function and lastly the block of the functions which contain instruction on what order the computer should execut an information



function greetMe () {


    //it contains instructions on what order the computer can execute an information

    let nickName = 'jones'

    console.log(nickName)



    
}



greetMe()



function addition() {


    let num1 = 20;


    const num2 = 4

    num1 + num2
    console.log(num1 + num2)
    
    
}
addition()



//if you are meant to use multiple values within the body of the function,then you must have to pass those values as an arguement of the function


function addition2(num3,num4 ) {




  
console.log(num3 + num4)
   
    

   
    
}



addition2(3, 4)
addition2(4, 4)
addition2(6, 7)

// function hi(name ) {


//     console.log(name)
    
// }
// hi('emmanuel')



// hi('gabriel')


// hi('chizzy')

// hi('princewill')






function greetings(emmanuel) {

    console.log('hello'+ emmanuel)
    
}

greetings('emmanuel')

greetings('elizabeth')


greetings('david')


greetings('ray')


greetings('justice')






// THE DOM(DOCUMENT OBJECT MODEL)


const navLinks = document.getElementById('slide__menu')

const showMenuBtn = document.querySelector('.button-show-menu')
const closeMenuBtn = document.querySelector('.button-close-menu')




showMenuBtn.addEventListener('click', function() {

    navLink.style.right = '0'
    
})





closeMenuBtn.addEventListener('click', function() {

    navLink.style.right = '-350px'
    
})




