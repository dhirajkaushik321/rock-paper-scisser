const choice=['Rock','Paper','Scissor']
const choose=()=>{
    const index=Math.floor(Math.random()*3)

    return choice[index]
}
module.exports =choose