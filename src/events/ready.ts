import { type Client, type ArgsOf, On, Discord } from "discordx";

@Discord()
export default class ReadyEvent {
  @On({ event: "ready" })
  async ready([]: ArgsOf<"ready">, client: Client) {}
}
