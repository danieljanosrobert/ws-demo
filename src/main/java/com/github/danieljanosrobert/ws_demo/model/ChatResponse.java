package com.github.danieljanosrobert.ws_demo.model;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;

/**
 * ChatResponse, mellyel egy üzenetet küldhetünk.
 */
@Data
@Builder
public class ChatResponse {

    private String message;
    private Instant time;
    private String name;
}
