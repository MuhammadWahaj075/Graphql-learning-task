import { quotes, users } from "./fakeData.js";
import { randomBytes } from "crypto";

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
    quotesId: (_, { by }) => quotes.filter((quoteId) => quoteId.by === by),
    quotes: () => quotes,
  },
  User: {
    quotes: (user) => quotes.filter((quote) => quote.by === user.id),
  },
  Mutation: {
    createDummyUser: (_, { newUser }) => {
      const randomId = randomBytes(5).toString("hex");
     
      users.push({
        randomId,
        ...newUser
      });
      return users.find((user) => user.id === randomId);
    },
  },
};
export default resolvers;
