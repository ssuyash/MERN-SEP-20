var amount = 8165
var notes = {}

if(amount >= 2000){    
    notes['2000'] = (amount - amount%2000)/2000
    amount = amount - 2000*notes['2000']
}


if(amount >= 500){    
    notes['500'] = (amount - amount%500)/500
    amount = amount - 500*notes['500']
}


if(amount >= 200){    
    notes['200'] = (amount - amount%200)/200
    amount = amount - 200*notes['200']
}


if(amount >= 100){    
    notes['100'] = (amount - amount%100)/100
    amount = amount - 100*notes['100']
}

if(amount >= 50){    
    notes['50'] = (amount - amount%50)/50
    amount = amount - 50*notes['50']
}

if(amount >= 20){    
    notes['20'] = (amount - amount%20)/20
    amount = amount - 20*notes['20']
}

if(amount >= 10){    
    notes['10'] = (amount - amount%10)/10
    amount = amount - 10*notes['10']
}

if(amount >= 5){    
    notes['5'] = (amount - amount%5)/5
    amount = amount - 5*notes['5']
}

if(amount >= 2){    
    notes['2'] = (amount - amount%2)/2
    amount = amount - 2*notes['2']
}

if(amount >= 1){    
    notes['1'] = (amount - amount%1)/1
    amount = amount - 1*notes['1']
}


console.log(notes)