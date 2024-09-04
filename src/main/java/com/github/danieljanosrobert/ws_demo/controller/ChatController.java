package com.github.danieljanosrobert.ws_demo.controller;

import com.github.danieljanosrobert.ws_demo.model.ChatResponse;
import com.github.danieljanosrobert.ws_demo.model.MessageRequest;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.time.Instant;

/**
 * Chat controller, melyen az egyes {@link MessageRequest}-eket tudjuk befogadni ws-en keresztül.
 */
@Controller
public class ChatController {

    /**
     * A chat végpont listenerje, mely a /topic/new-message ws végpontra küld STOMP üzenetet.
     *
     * @param messageRequest a request, mely tartalmazza a kliens üzenetét
     *
     * @return a klienst STOMP üzenete
     */
    @MessageMapping("/send")
    @SendTo("/topic/new-message")
    public ChatResponse greeting(final MessageRequest messageRequest) {
        return ChatResponse.builder()
            .message(messageRequest.getMessage())
            .time(Instant.now())
            .name(messageRequest.getName())
            .build();
    }
}