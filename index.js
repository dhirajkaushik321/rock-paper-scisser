const express=require('express')
const ejs=require('ejs')
const {status}=require('./helpers/winner')
const choose=require('./helpers/randomSelection')
const app=express()
app.set('view engine','ejs')
const PORT=process.env.PORT || 3000

const results=[]
const choices=[]
for(let i=0;i<50;i++){
let choicesArray=[]
const p1=choose()
const p2=choose()
const p3=choose()
const p4=choose()
choicesArray.push(p1)
choicesArray.push(p2)
choicesArray.push(p3)
choicesArray.push(p4)
choices.push({p1,p2,p3,p4})
    for(let k = 0;k<4;k++){
    for(let j=0;j<4;j++){
        const val= status(choicesArray[k],choicesArray[j])
        results.push(val)
    }
}
choicesArray=[]
}
//home route

app.get('/',(req,res)=>{
    res.render('index',{choices,results})
})

app.get('/dashboard',(req,res)=>{
    res.render('dashboard',{choices,results})
})
//creating a server
app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))