let katzDeliLine = [];


function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
   return `There is nobody waiting to be served!`;
} else {
  return `Currently serving ${katzDeliLine.shift()}.`;
    }
}


// function currentLine(katzDeliLine){
// let results = '';
//   if(katzDeliLine.length === 0){
//       return `The line is currently empty.`;
//     } else {
//       for(let i = 0; i <katzDeliLine.length; i++){
//         if(i === katzDeliLine.length - 1){
//           results += `${i+1}. ${katzDeliLine[i]}`;
//         } else {
//       results += `${[i+1]}. ${katzDeliLine[i]}, `;
//     }
//   }
//             return `The line is currently: ${results}`;
//     }
//   }

  function currentLine(katzDeliLine){
  let results = `The line is currently: 1. ${katzDeliLine[0]}`
    if(katzDeliLine.length === 0){
        return `The line is currently empty.`;
      } else {
        for(let i = 0; i <katzDeliLine.length; i++){
        results += `, ${katzDeliLine[1]}`  
    }
              return  results;
      }
    }
