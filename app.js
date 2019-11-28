var employee=[
    {
        emp_id : "capg101",
        emp_name:"Manu",
        emp_age:30,
        emp_gender:"Male",
        emp_photo:'https://cdn.pixabay.com/photo/2016/10/01/01/01/nature-1706767__340.jpg',
        emp_company:"Capgemini",
        emp_salary:50000,
        emp_designation:"Web Developer",
        emp_doj:new Date('2019/11/22'),
        emp_location:"Mumbai",
        emp_education:"B.Tech"

    },

    {
        emp_id : "capg102",
        emp_name:"Thala",
        emp_age:24,
        emp_gender:"Male",
        emp_photo:'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg',
        emp_company:"Capgemini",
        emp_salary:10000000,
        emp_designation:"FullStack Developer",
        emp_doj:new Date('2019/12/01'),
        emp_location:"Bangalore",
        emp_education:"B.E"

    },

    {
        emp_id : "capg103",
        emp_name:"Raghu",
        emp_age:26,
        emp_gender:"Male",
        emp_photo:'https://cdn.pixabay.com/photo/2016/07/08/13/17/model-1504317__340.jpg',
        emp_company:"Capgemini",
        emp_salary:500000,
        emp_designation:"Android Developer",
        emp_doj:new Date('2016/06/28'),
        emp_location:"Pune",
        emp_education:"M.E"

    },

    {
        emp_id : "capg104",
        emp_name:"Durga",
        emp_age:35,
        emp_gender:"Male",
        emp_photo:'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg',
        emp_company:"Capgemini",
        emp_salary:650000,
        emp_designation:"Java Developer",
        emp_doj:new Date('2005/5/2'),
        emp_location:"Hyderabad",
        emp_education:"B.Tech"

    },
];
var emp=[];
employee.forEach(empData=> {

    emp.push(`
    
    <div class="card">
    <img src="${empData.emp_photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${empData.emp_name}</h5>
      <span class="badge badge-success float-right">${empData.emp_id}</span><br>
      <span class="badge badge-success float-right">${empData.emp_designation}</span><br>

      <li class="list-group-item">Location:${empData.emp_location}</li>
      <li class="list-group-item">Gender: ${empData.emp_gender}</li>
      <li class="list-group-item">Age:${empData.emp_age}</li>
      <li class="list-group-item">Company:${empData.emp_company}</li>
      <li class="list-group-item">Salary: ${empData.emp_salary}</li>
      <li class="list-group-item">Date of Joining: ${empData.emp_doj}</li>
      <li class="list-group-item">Education: ${empData.emp_education}</li>

      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    
    `)

});
document.getElementById('template').innerHTML=emp;