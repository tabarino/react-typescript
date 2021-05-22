class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = Math.floor((Math.random() * 1000000000) + 1).toString();
    this.text = todoText;
  }
}

export default Todo;
