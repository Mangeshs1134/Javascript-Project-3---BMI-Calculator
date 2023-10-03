let body = document.querySelector(`body`)

const jsButton = document.querySelectorAll(`.button`)
const form = document.querySelector(`form`)
console.log(form)

form.addEventListener(`submit`,function(event){
    event.preventDefault();
   const weight = parseInt(document.querySelector(`#weight`).value)
   const height = parseInt(document.querySelector(`#height`).value)
   const result = document.querySelector(`.result`)

   if (weight === `` || weight<=0 || isNaN(weight)) {
      result.innerHTML=(`${weight} is not a valid weight....`)
   }
   else if (height === `` || height<=0 || isNaN(height)) {
      result.innerHTML=(`${height} is not a valid height....`)
   }else{
      let bmi = (weight / ((height*height)/10000));
   result.innerHTML=`YOUR BMI IS :: ${bmi}`
   console.log(man);
   }




   


})


