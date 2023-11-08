

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let empTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.getElementById('id').value
    let newName = document.getElementById('name').value
    let newExt = document.getElementById('extension').value
    let newEmail = document.getElementById('email').value
    let newDept = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDept = row.insertCell()
    let cellDeleteBtn = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(newId));
    cellName.appendChild(document.createTextNode(newName));
    cellExt.appendChild(document.createTextNode(newExt));
    cellEmail.appendChild(document.createTextNode(newEmail));
    cellDept.appendChild(document.createTextNode(newDept));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-end'  // Bootstrap classes
    deleteBtn.appendChild(document.createTextNode('X'))
    cellDeleteBtn.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount += 1
    document.getElementById("empCount").value = "(" + empCount + ")"
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CHECK AND SEE IF A DELETE BUTTON WAS CLICKED
    //if (e.target.classList.contains('delete')) {
    if (e.target.tagName == "BUTTON") {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {
            // REMOVE THE SELECTED ROW (<TR> element)
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            empCount -= 1
            document.getElementById("empCount").value = "(" + empCount + ")"
        }
    }
})

