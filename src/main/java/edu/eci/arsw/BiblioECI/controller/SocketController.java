package edu.eci.arsw.BiblioECI.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class SocketController {
    
    @MessageMapping("/hello")
    @SendTo("/topic")
    public boolean userLoanBooks(String message) throws Exception {
        Thread.sleep(1000);
        return true;
    }
}
