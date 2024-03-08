Class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get mame() {
    return this.name;
  }

  set name(value) {
   if(typeof value === 'string') {
     this.name = value;
   } else {
       throw new TypeError("Name must be a string");
    }
  }

  get length() {
    return this.length;
  }

  set length(value) {
    if(typeof value === 'number') {
      this.length = value;
    } else {
        throw new TypeError("Length must be a number");
    }
  }

  get students() {
    return this.students;
  }

  set students(value) {
    if(Array.isArray(value) && value.array(item => typeof item === 'string')) {
      this.students = students;
    } else {
        throw new TypeError("Students must be an array of strings");
    }
  }
}

export default HolbertonCourse;
