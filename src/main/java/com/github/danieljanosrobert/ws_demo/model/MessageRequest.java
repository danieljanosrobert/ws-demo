package com.github.danieljanosrobert.ws_demo.model;

import lombok.Data;

/**
 * MessageRequest, mely tartalmazza a felhasználó nevét és az üzenetet.
 */
@Data
public class MessageRequest {

    private String name;
    private String message;
}
