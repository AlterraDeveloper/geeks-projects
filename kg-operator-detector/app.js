const form = document.querySelector("#form");
const operatorImg = document.querySelector("#detection-result img");
form.onsubmit = (event) => {
  event.preventDefault();
  const submitData = new FormData(form);
  const operator = detectMobileOperator(submitData.get("PhoneNumber"));

  switch (operator) {
    case "Beeline":
      operatorImg.setAttribute("src", "images/beeline.jpg");
      break;
    case "Mega":
      operatorImg.setAttribute("src", "images/mega.png");
      break;
    case "O!":
      operatorImg.setAttribute("src", "images/oshka.png");
      break;
    default:
      operatorImg.setAttribute("src", "images/error.png");
  }
};

function detectMobileOperator(phoneNumber) {
  let operatorCode = null;

  if (isLocal(phoneNumber)) {
    operatorCode = phoneNumber.slice(1, 4);
  }

  if (isInternational(phoneNumber)) {
    operatorCode = phoneNumber.slice(4, 7);
  }

  return detectOperator(operatorCode);
}

function isLocal(phoneNumber) {
  return (
    phoneNumber &&
    typeof phoneNumber === "string" &&
    phoneNumber.length === 10 &&
    phoneNumber.startsWith("0")
  );
}

function isInternational(phoneNumber) {
  return (
    phoneNumber &&
    typeof phoneNumber === "string" &&
    phoneNumber.length === 13 &&
    phoneNumber.startsWith("+996")
  );
}

function detectOperator(code) {
  const beelineCodes = [771, 772, 773, 774, 775, 776, 777, 778, 779, 220, 227];
  const megaCodes = [550, 551, 552, 553, 554, 555, 556, 557, 559, 755, 999];
  const oshkaCodes = [
    500, 501, 502, 504, 505, 507, 508, 509, 700, 701, 702, 703, 704, 705, 706,
    707, 708, 709,
  ];

  code = Number(code);

  if (beelineCodes.includes(code)) return "Beeline";
  if (megaCodes.includes(code)) return "Mega";
  if (oshkaCodes.includes(code)) return "O!";

  return null;
}
