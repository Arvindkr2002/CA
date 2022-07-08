import {
    Resolver,
    Query,
    Mutation,
    Arg,
    FieldResolver,
    Root
  } from "type-graphql";
  import { sendEmail } from "sendmails";
    @Mutation(() => Null)
    async feedback(
      @Arg("Data") Data: string
    ): {
        await sendEmail(Data);
        return Null;
    }
  

