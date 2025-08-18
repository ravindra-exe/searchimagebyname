let users = [
  {
    name: "Amisha Rathore",
    pic: "https://plus.unsplash.com/premium_photo-1679692887717-dc7f5d090271?q=80&w=774&auto=format",
    bio: "Silent chaos in a loud world | not for everyone"
  },
  {
    name: "Rhea Kapoor",
    pic: "https://images.unsplash.com/photo-1700955599409-1f5a1670054a?w=1000&auto=format&fit=crop&q=60",
    bio: "Not a look, it’s a vibe"
  },
  {
    name: "Isha Choudhary",
    pic: "https://images.unsplash.com/photo-1515161318750-781d6122e367?w=1000&auto=format&fit=crop&q=60",
    bio: "Still waters run deep"
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

function showusers(arr) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";

  arr.forEach(function(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredlayer = document.createElement("div");
    blurredlayer.style.backgroundImage = `url(${user.pic})`;
    blurredlayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const name = document.createElement("h3");
    name.textContent = user.name;

    const bio = document.createElement("p");
    bio.textContent = user.bio;

    content.appendChild(name);
    content.appendChild(bio);

    card.appendChild(img);
    card.appendChild(blurredlayer);
    card.appendChild(content);

    container.appendChild(card);
  });
}

showusers(users);

// 🔍 Search functionality
let inp = document.querySelector(".inp");
let noUsersMsg = document.getElementById("no-users");

inp.addEventListener("input", function () {
  let filtered = users.filter((user) =>
    user.name.toLowerCase().startsWith(inp.value.toLowerCase())
  );

  showusers(filtered);

  if (filtered.length === 0) {
    noUsersMsg.style.display = "block";
  } else {
    noUsersMsg.style.display = "none";
  }
});




