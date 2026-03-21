import { HubConnectionBuilder } from "@microsoft/signalr";
import { BASE_URL, SIGNALR_CHAT_URL } from "./endpoints";
import { getAuthToken } from "./client";

export let connection = new HubConnectionBuilder()
    .withUrl(BASE_URL + SIGNALR_CHAT_URL, { accessTokenFactory: () => getAuthToken() })
    .withAutomaticReconnect()
    .build();