function insert_Row() {
    //Write your code here
  
   let table = document.querySelector('tbody')
    let newRow =  document.createElement('tr')
    table.prepend(newRow)
    let cell1 = document.createElement('td')
    cell1.textContent = 'New Cell1'
    newRow.append(cell1)
    let cell2 = document.createElement('td')
    cell2.textContent = 'New Cell2'
    newRow.append(cell2)
}
