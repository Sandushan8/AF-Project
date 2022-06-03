const axios =require("axios")


 const arr = axios.get('http://localhost:8000/users/studentdetes')
  


test('add',()=>{
  expect(2+2).toBe(4)
})

test('fetching', ()=>{
  expect(arr).not.toBeNull()
  })



