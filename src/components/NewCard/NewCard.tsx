import { useState } from "react";
import { list_of_articles } from "../../models/article";

export function NewCard() {
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    isShow: true,
  });

  // Обработчик изменения значений полей формы
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (event: any) => {
    event.preventDefault();
    list_of_articles.push(formData);
    console.log(list_of_articles);
    // console.log(formData);
  };
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col 12">
            <input
              placeholder="Your ID"
              id="id"
              type="text"
              className="validate"
              onChange={handleChange}
              name="id"
            />
            <label htmlFor="id">Id</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <input
              placeholder="Your title"
              id="title"
              type="text"
              className="validate"
              onChange={handleChange}
              name="title"
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field col s4">
            <input
              id="description"
              type="text"
              value={formData.description}
              className="validate"
              onChange={handleChange}
              name="description"
            />

            <label htmlFor="description">Description</label>
          </div>
          <div className="input-field col s4">
            <input
              id="image"
              type="text"
              value={formData.image}
              onChange={handleChange}
              className="validate"
              name="image"
            />
            <label htmlFor="image">Image</label>
          </div>
        </div>
        <a
          className="btn-floating btn-large waves-effect waves-light red"
          onClick={handleSubmit}
        >
          <i className="material-icons">add</i>
        </a>
      </form>
    </div>
  );
}
