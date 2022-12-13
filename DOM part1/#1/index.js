// Первый способ (innerHTML):


document.body.innerHTML = `
       <form class="create-user-form">

       <label>

           Имя
           <input type="text" name="userName" placeholder="Введите ваше имя" />

       </label>


       <label>

           Пароль
           <input type="password" name="password" placeholder="Придумайте пароль" />

       </label>


       <button type="submit">
           Подтвердить
       </button>
   </form>
`;

// Второй способ (document.CreateElement):


const createInputWithLabel = (label, inputType, inputName, placeholder) => {

  const labelContainer = document.createElement("label");

  labelContainer.innerText = label;

  const inputElement = document.createElement("input");
  
  inputElement.type = inputType;

  inputElement.name = inputName;

  inputElement.placeholder = placeholder;

  labelContainer.append(inputElement);

  return labelContainer;

};

const formContainer = document.createElement("form");

formContainer.className = "create-user-form";

const userNameLabel = createInputWithLabel(
  "Имя",
  "text",
  "userName",
  "Ввведите впше имя"
);

const passwordLabel = createInputWithLabel(
  "Пароль",
  "password",
  "password",
  "Придумайте пароль"
);

const confirmButton = document.createElement("button");

confirmButton.type = "submit";

confirmButton.innerText = "Подтвердить";

formContainer.append(userNameLabel, passwordLabel, confirmButton);

document.body.prepend(formContainer);