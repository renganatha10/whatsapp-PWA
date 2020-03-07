//eslint-disable

// Create a user json file
// Create a Group Message with the exiting members
// Create messages with dummy
//eslint-disable-next-line
const fs = require("fs");
//eslint-disable-next-line
const faker = require("faker");
//eslint-disable-next-line
const uuid = require("uuid/v4");

const users = [];
const groups = [];
const messages = [];

const createUsers = () => {
  const numberOfUsers = 100;
  for (let index = 0; index < numberOfUsers; index++) {
    users.push({
      id: uuid(),
      name: faker.name.firstName(),
      profileImage: faker.image.avatar(),
      description: faker.lorem.words(),
      lastSeen: faker.date.recent()
    });
  }
};

const createGroups = () => {
  const numberOfGroups = 50;
  for (let index = 0; index < numberOfGroups; index++) {
    const members = [];
    if (index % 5 === 0) {
      members.push(users[Math.round(Math.random() * 99)].id);
      members.push(users[Math.round(Math.random() * 99)].id);
    } else {
      const numberOfMembers = Math.round(Math.random() * 99);
      for (let index = 0; index < numberOfMembers; index++) {
        members.push(users[index].id);
      }
    }

    groups.push({
      id: uuid(),
      name: faker.company.companyName(),
      members,
      description: faker.lorem.words(),
      imageUrl: faker.image.business()
    });
  }
};

const createMessage = () => {
  const numberOfMessages = 1000;

  for (let index = 0; index < numberOfMessages; index++) {
    let messageImageUrl = null;
    if (index % 25 === 0) {
      messageImageUrl = faker.image.people();
    }

    const groupIndex = Math.round(Math.random() * 49);

    const group = groups[groupIndex];

    const usersInGroup = group.members;
    messages.push({
      id: uuid(),
      message:
        Math.round(Math.random() * 10) % 2 === 0
          ? faker.lorem.words()
          : faker.lorem.sentences(),
      messageImageUrl,
      createdTime: faker.date.recent(),
      groupId: group.id,
      userId:
        usersInGroup[Math.round(Math.random() * (usersInGroup.length - 1))]
    });
  }
};

createUsers();
createGroups();
createMessage();

fs.writeFile("user.json", JSON.stringify(users), function(err) {
  if (err) throw err;
  console.log("Users is created successfully.");
});

fs.writeFile("groups.json", JSON.stringify(groups), function(err) {
  if (err) throw err;
  console.log("Groups is created successfully.");
});

fs.writeFile("messages.json", JSON.stringify(messages), function(err) {
  if (err) throw err;
  console.log("Messages is created successfully.");
});
