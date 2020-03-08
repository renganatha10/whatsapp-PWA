import { users } from "../../../data/user";
import { messages } from "../../../data/messages";

export default ({ query: { id } }, res) => {
  const myMessages = messages.filter(message => message.groupId === id);
  res.status(200).json(
    myMessages
      .map(myMessage => {
        const {
          id,
          createdTime,
          message,
          messageImageUrl,
          groupId,
          userId
        } = myMessage;

        const user = users.find(user => user.id === userId);
        return {
          id,
          createdTime,
          message,
          messageImageUrl,
          groupId,
          userName: user.name
        };
      })
      .sort((a, b) => {
        if (new Date(a.createdTime) > new Date(b.createdTime)) {
          return 1;
        } else {
          return -1;
        }
      })
  );
};
