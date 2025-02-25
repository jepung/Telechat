import { atom } from "jotai";
import { Channel as ChannelType } from "stream-chat";

const channelAtom = atom<ChannelType | null>(null);

export { channelAtom };
