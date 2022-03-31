import { ChatterDto } from "./chatterDto";
import { MessageDto } from "./messageDto";

export interface ChatDto {
    id: string;
    to: ChatterDto;
    messages: MessageDto[];
}
