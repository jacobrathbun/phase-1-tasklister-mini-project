//adds functionality to the submit form and resets
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target.querySelector('#new-task-description').value)
    form.reset()
  })
});

//builds a task item in the list and adds a functioning delete button
function buildTask(task) {
  console.log(task)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${task } ` 
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

//handles the "delete" event by pressing the X button
function handleDelete(e) {
  e.target.parentNode.remove()
}