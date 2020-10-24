This is an Inventory Management Portal made for the solution of the assignment given by Peppo Pvt Ltd for the job role of Full Stack Developer.
Steps to make this project run:
1) Clone this repository to your machine
2) Create a MongoDB database up and running on port 7000
3) Create a DB with name InventoryMgmt
4) Create collections -> users, products, catagories
5) I'm not providing the .env file which contains environmental declarations as follows:
    - create .env file in Backend folder and paste following lines:
    DATABASE=mongodb://localhost:27017/InventoryMgmt
    SECRET=InventoryManagementAssignemnt

    - create .env file in frontend folder and paste following line:
    REACT_APP_BACKEND=http://localhost:7000/api/
6) Its recommended to create and signup with the user credentials prefilled in the form email:admin@gmail.com password:admin123
7) Only after valid user authentication you are able to see Inventory Management tab on the Menu bar
8) That's it you are ready to go..