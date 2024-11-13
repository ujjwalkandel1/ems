const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1", // Updated to match other tasks
          "taskDescription": "Complete the first module", // Updated to match other tasks
          "taskDate": "2024-11-05", // Updated to match other tasks
          "category": "Training"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Submit the quarterly report",
          "taskDate": "2024-10-28",
          "category": "Report"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Prepare presentation slides",
          "taskDate": "2024-11-10",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Coordinate with team",
          "taskDate": "2024-11-01",
          "category": "Teamwork"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Conduct customer feedback survey",
          "taskDate": "2024-11-03",
          "category": "Survey"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Submit marketing report",
          "taskDate": "2024-10-20",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 2",
          "taskDescription": "Create campaign draft",
          "taskDate": "2024-10-22",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1",
          "taskDescription": "Organize team-building event",
          "taskDate": "2024-11-06",
          "category": "Event"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2",
          "taskDescription": "Prepare end-of-year financial report",
          "taskDate": "2024-11-20",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 3",
          "taskDescription": "Follow up with client feedback",
          "taskDate": "2024-10-25",
          "category": "Client Relations"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }
   
  export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
  }