// alert("Connected")

var arr_id = [''];
var arr_name = [''];
var arr_address = [''];
var arr_rollno = [''];


function add_click() {
  // alert("add click")
  var id = document.getElementById("txtid").value;
  var name = document.getElementById("txtname").value;
  var address = document.getElementById("txtaddress").value;
  var rollnno = document.getElementById("txtrollno").value;
  arr_id.push(id);
  arr_name.push(name);
  arr_address.push(address);
  arr_rollno.push(rollnno);
  swal("Great Job!", "Student added Succesfully", "success");
  display_data()
}

function edit_click() {
  // alert("edit click")

  var id = document.getElementById('txtid').value;
  let i = arr_id.indexOf(id);
  if (i == -1) {
    swal("Error!", "Student Id not found", "error")
  }
  else {


    document.getElementById("txtname").value = arr_name[i];
    document.getElementById("txtaddress").value = arr_address[i];
    document.getElementById("txtrollno").value = arr_rollno[i];


  }

  
}

function delete_click() {
  // alert("delete click")
  var id = document.getElementById('txtid').value;
  let i = arr_id.indexOf(id);
  if (i == -1) {
    swal("Error!", "Student Id not found", "error")
  }
  else {
  
    arr_id.splice(i,1);
    arr_name.splice(i,1);
    arr_address.splice(i,1);
    arr_rollno.splice(i,1);
    swal("No Bad!", "Student Delete Succesfully", "success");
    display_data()
  }
}
function search_click() {
  // alert("search click")
  //   swal("Enter student ID:", {
  //     content: "input",
  //     button: {
  //       text: "Search!",
  //       closeModal:true,
  //     },
  //   })
  //     .then((value) => {
  //     });


  var id = document.getElementById('txtid').value;
  let i = arr_id.indexOf(id);
  if (i == -1) {
    swal("Error!", "Student Id not found", "error")
  }
  else {
  
    document.getElementById("txtname").value = arr_name[i];
    document.getElementById("txtaddress").value = arr_address[i];
    document.getElementById("txtrollno").value = arr_rollno[i];


  }
}

function hide_click(){
    // swal("success click hide");
    $(document).ready(function () {
      $('#btn').click(function () {
        $('#tbody').hide("fast");
   });

    });
}


function update_click() {
  // alert("update click")
var id = document.getElementById('txtid').value;
  let i = arr_id.indexOf(id);
  if (i == -1) {
    swal("Error!", "Student Id not found", "error")
  }
  else {

    arr_id[i]=document.getElementById("txtid").value;
    arr_name[i]=document.getElementById("txtname").value;
    arr_address[i]=document.getElementById("txtaddress").value;
    arr_rollno[i]=document.getElementById("txtrollno").value;
    display_data()

  }
  
}
function showall_click() {
  // alert("show all click"
  
    $('#btnshow').click(function () {
         $('#tbody').show("fast");
    });
  display_data()
}

function display_data() {
  var tbody = document.getElementById('tbody');
  // tbody.innerText="sgdfjhbdjhbsjdhbfjhsdf";

  for (let i = 0; i < arr_id.length; i++) {
    var mydata = `
   <table style="color: white" class="table table-striped table-dark">
   <thead>
     <tr>
       <th scope="col">S.No</th>
       <th scope="col">Name</th>
       <th scope="col">Address</th>
       <th scope="col">Roll no</th>
       <th scope="col">Action</th>
     </tr>
   </thead>`
    for (let i = 1; i <= arr_id.length - 1; i++) {
      mydata += `<tbody>
    <tr>
      <th scope="row">`+ arr_id[i] + `</th>
      <td>`+ arr_name[i] + `</td>
      <td>`+ arr_address[i] + `</td>
      <td>`+ arr_rollno[i] + `</td>
      <td>
        <button onclick="edit_click()" type="button" class="btn btn-warning">Edit</button>
        <button onclick="update_click()" type="button" class="btn btn-primary my-3">Update</button>
      </td>
    </tr>
  </tbody>`
    }
    mydata += `</table>`

  }
  tbody.innerHTML = mydata;
}

