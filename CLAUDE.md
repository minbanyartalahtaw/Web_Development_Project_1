Project 1 – Kanban Board with Dashboard 

General Information 

    Group work of 3 students 

    Score: 10% 

Instructions 

    Build a React JS web application. 

    Use Local Storage for data persistence. 

    No backend is allowed. 



    Students may use Tailwind CSS, CSS, or other styling methods approved by the instructor. 

Submission 

Each group shall submit: 

    GitHub repository URL 

    GitHub Pages URL 

    Well-formatted README.md including: 

        project description 

        screenshots 

        member names only, no student IDs 

        basic usage instructions 

Only one submission is required per team. 

 
 

Application Specifications 

The application consists of 2 pages: 

    Kanban Board 

    Dashboard 

 
 

Page 1: Kanban Board 

Develop a 3-column Kanban board consisting of: 

    TO DO 

    DOING 

    DONE 

Each column shall display tasks according to their status. 

Task Data 

Each task shall contain: 

    Title 

    Description 

    Category 

    Start date 

    Due date 

    Complete date 

    Responsible person 

    Status 

Responsible Person Data 

The responsible person data will be provided. 

Each person consists of: 

    ID 

    Name 

Students do not need to implement person management. 

Category 

The application shall allow users to: 

    select an existing category when creating or editing a task 

    add a new category 

    use the newly added category for future tasks 

Task Features 

Users shall be able to: 

    create a new task 

    edit an existing task 

    delete a task 

    move a task between TO DO, DOING, and DONE 

    assign a responsible person to a task 

    assign a category to a task 

    set start date and due date 

    set complete date when the task is moved to DONE 

The application shall save all task and category data in Local Storage. 

 
 

Page 2: Dashboard 

The dashboard shall summarize task information from the Kanban board. 

The dashboard shall include the following information. 

1. Summary Cards 

Display summary cards showing: 

    total number of tasks 

    number of TO DO tasks 

    number of DOING tasks 

    number of DONE tasks 

    number of overdue tasks 

2. Task Status Chart 

Display a chart showing the number of tasks by status. 

Recommended chart type: 

    Pie chart or doughnut chart 

Statuses: 

    TO DO 

    DOING 

    DONE 

3. Task Category Chart 

Display a chart showing the number of tasks in each category. 

Recommended chart type: 

    Bar chart 

4. Completion Performance Chart 

Display chart to compare 

    Early (done before due) 

    On Time (done at due) 

    Late (done after due) 

 
 

Data Persistence 

The application shall use Local Storage to store: 

    tasks 

    categories 

When the page is refreshed, the previous data shall remain available. 

  

Grading Criteria: 

GitHub repository contains source code (no build artifacts) 
	

2 

GitHub repository has a well-formatted README with screenshots and member names 
	

2 

Successfully deployed on GitHub Pages 
	

2 

Kanban Board UI is clear and resembles the required layout 
	

2 

Create, edit and delete tasks function correctly 
	

2 

Move tasks correctly between TO DO, DOING and DONE 
	

2 

Local Storage correctly stores and restores application data 
	

2 

Category management (including adding new categories) works correctly 
	

2 

Dashboard summary cards display correct information 
	

2 

Meaningful task status chart (Pie/Doughnut) 
	

2 

Meaningful task category chart (Bar) 
	

2 

Meaningful completion performance chart (Early / On Time / Late or equivalent) 
	

2 

Total 
	

24 

