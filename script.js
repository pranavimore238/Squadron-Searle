const form = document.querySelector("#chat-form");
const input = document.querySelector("#message");
const chat = document.querySelector("#chat");

function addMessage(text, role, label) {
  const article = document.createElement("article");
  article.className = `msg ${role}`;
  const heading = document.createElement("small");
  heading.textContent = label;
  const paragraph = document.createElement("p");
  paragraph.textContent = text; // Render user text safely; never use innerHTML.
  article.append(heading, paragraph);
  chat.append(article);
  chat.scrollTop = chat.scrollHeight;
}

function getRuleReply(raw) {
  const text = raw.toLowerCase();
  if (text.includes("chinese room") || text.includes("searle")) {
    return {rule:"CHINESE_ROOM", reply:"The Chinese Room asks whether following rules to produce suitable answers is enough for genuine understanding."};
  }
  if (["meaning","understand","semantics"].some(word => text.includes(word))) {
    return {rule:"MEANING", reply:"A meaning-related keyword matched. This prepared sentence does not show that the simulator understands the concept."};
  }
  if (["feel","emotion","happy","sad"].some(word => text.includes(word))) {
    return {rule:"EMOTION", reply:"An emotion-related keyword matched. This rule-based demo has no evidence of feelings."};
  }
  if (text.includes("hello") || text === "hi" || text.startsWith("hi ")) {
    return {rule:"GREETING", reply:"Hello! I matched your greeting to a predefined response."};
  }
  if (["artificial intelligence","computer"," ai "].some(word => ` ${text} `.includes(word))) {
    return {rule:"AI", reply:"An AI-related keyword matched. Searle questions whether symbol processing alone is sufficient for understanding."};
  }
  return {rule:"FALLBACK", reply:"No specific rule matched. The room returns a fallback response. I received your message, but this demo only matches a small set of keywords."};
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) return;
  addMessage(message, "user", "YOU");
  const result = getRuleReply(message);
  addMessage(`[Rule matched: ${result.rule}] ${result.reply}`, "bot", "ROOM / RULEBOOK");
  input.value = "";
  input.focus();
});

const options = [...document.querySelectorAll(".option")];
const feedback = document.querySelector("#feedback");
document.querySelector("#reset").addEventListener("click", () => {
  options.forEach(option => { option.disabled = false; option.classList.remove("correct", "incorrect"); });
  feedback.textContent = "Choose an answer to see feedback.";
});
options.forEach(option => option.addEventListener("click", () => {
  options.forEach(item => { item.disabled = true; if (item.dataset.correct === "true") item.classList.add("correct"); });
  if (option.dataset.correct === "true") {
    feedback.textContent = "Correct. Searle argues that symbol manipulation alone does not establish that a system understands meaning.";
  } else {
    option.classList.add("incorrect");
    feedback.textContent = "Not quite. The central issue is whether rule-following is enough for understanding.";
  }
}));
