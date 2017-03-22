class Bug{
  constructor(object){
    object = object || {};
    this.name = object.name;
    this.color = object.color;
    this.id = object.id;
  }
}

export { Bug };
