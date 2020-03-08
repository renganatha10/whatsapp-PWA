import { groups } from "../../../data/groups";
import { messages } from "../../../data/messages";

export default ({ query: { id } }, res) => {
  const myGroups = groups.filter(p => p.members.includes(id));

  const groupsResponses = [];

  myGroups.forEach(group => {
    const groupMessages = messages.filter(
      message => message.groupId === group.id
    );

    const [latestMessage] = groupMessages.sort((a, b) => {
      if (new Date(a.createdTime) > new Date(b.createdTime)) {
        return 1;
      } else {
        return -1;
      }
    });

    const { description, id, imageUrl, name } = group;
    const { message } = latestMessage;

    groupsResponses.push({
      id,
      imageUrl,
      name,
      description,
      latestMessage: message
    });
  });

  res.status(200).json(groupsResponses);
};
