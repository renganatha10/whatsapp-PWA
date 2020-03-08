import { users } from "../../../data/user";
import { groups } from "../../../data/groups";

export default ({ query: { id } }, res) => {
  const myGroup = groups.find(p => p.id === id);

  const members = myGroup.members.map(memberId =>
    users.find(user => user.id === memberId)
  );

  res.status(200).json(members);
};
