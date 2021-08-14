
var students = [
  {
    name: 'Vũ Hữu',
    age: 20,
    address: 'Nam Định',
    phone: '123.456.789'
  },
  {
    name: 'Nguyễn Ngọc',
    age: 18,
    address: 'Hà Nam',
    phone: '312.857.123'
  },
  {
    name: 'Ngọc Nhi',
    age: 18,
    address: 'Quảng Ninh',
    phone: '131.159.524'
  },
  {
    name: 'Ngọc Ánh',
    age: 19,
    address: 'Nam Định',
    phone: '343.544.321'
  }
];

document.addEventListener('DOMContentLoaded', renderStudent());

function renderStudent() {
  var html = '';
  for (var i = 0; i < students.length; i++) {
    getStudent(i);
    html += '<div class="col col-md-3 mb-2">'
    html += '<div class="card" style="width: 17rem;">'
    html += '<div class="card-body">'
    html += '<h5 class="">Name: ' + student.name + '</h5>'
    html += '<p class="card-text">Age: ' + student.age + '</p>'
    html += '<p class="card-text">Address: ' + student.address + '</p>'
    html += '<p class="card-text">Phone: ' + student.phone + '</p>'
    html += '<button type="button" class="btn btn-primary btn-sm mr-2" onclick="onclickEditMode(' + i + ')">Edit</button>'
    html += '<button type="button" class="btn btn-danger btn-sm" onclick="onclickDeleteStudent(' + i + ')">Delete</button>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    setHtml('list-student', html);
  }
};

function getStudent(index) {
  return student = students[index];
};

function setHtml(selector, html) {
  var element = document.getElementById(selector);
  element.innerHTML = html;
};

function isConfirmed() {
  return confirm('Are you sure you want to delete?');
};

function onclickDeleteStudent(index) {
  isConfirmed();
  if (confirm) {
    students.splice(index, 1);
    renderStudent();
  }
};

function onclickCreateStudent() {
  if (editMode) {
    editStudentHandle();
  }
  else {
    var name = getElementValue('name');
    var age = getElementValue('age');
    var address = getElementValue('address');
    var phone = getElementValue('phone');
    var addStudent = {
      name,
      age,
      address,
      phone,
    }
    students.push(addStudent);
    renderStudent();
    resetForm();
  }
};

function getElementValue(selector) {
  var element = document.getElementById(selector);
  return element.value;
};

function resetForm() {
  setElementValue('name', '');
  setElementValue('age', '');
  setElementValue('address', '');
  setElementValue('phone', '');
};

function setElementValue(selector, value) {
  var element = document.getElementById(selector);
  return element.value = value;
};

function onclickEditMode(index) {
  var student = students[index];
  setElementValue('name', student.name);
  setElementValue('age', student.age);
  setElementValue('address', student.address);
  setElementValue('phone', student.phone);
  enableEditMode();
  setHtml('btn-create', 'Save');
}

var editMode = false;
function enableEditMode() {
  editMode = true;
};

function disableEditMode() {
  editMode = false;
};

function editStudentHandle() {
  var name = getElementValue('name');
  var age = getElementValue('age');
  var address = getElementValue('address');
  var phone = getElementValue('phone');
  var editStudent = {
    name,
    age,
    address,
    phone,
  }
  students.push(editStudent);
  renderStudent();
  resetForm();
  setHtml('btn-create', 'Create');
  disableEditMode();
};



















































