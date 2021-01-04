const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "You always pass failure on the way to successr",
  "Positive thinking will let you do everything better than negative thinking will",
  "Once you replace negative thoughts with positive ones, you’ll start having positive results",
  "You’re braver than you believe, and stronger than you seem, and smarter than you think",
  "You’re off to great places, today is your day. Your mountain is waiting, so get on your way",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
