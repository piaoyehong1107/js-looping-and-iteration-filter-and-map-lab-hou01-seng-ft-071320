// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  let newdriver=[]
  driver.filter(function (driv){
     if (driv.revenue>revenue){
       newdriver.push(driv)
     }
  }) 
  return newdriver
}
function driverNamesWithRevenueOver(driver, revenue){
  let newdrivername=[]
  driver.filter(function (driv){
    if (driv.revenue>revenue){
     newdrivername.push(driv.name)
  }}) 
  return newdrivername
}

function exactMatch(driver, attr){
   let newdriver=[]
   let key=Object.keys(attr)
  driver.filter(function (driv){
     if (driv[[key[0]]]===attr[key]){
       newdriver.push(driv)
     }
  }) 
  return newdriver
}

function exactMatchToList(){
  let newdriverlist=[]
   let key=Object.keys(attr)
  driver.filter(function (driv){
     if (driv[[key[0]]]===attr[key]){
       newdriverlist.push(driv)
     }
  }) 
  return newdriverlist
  
}