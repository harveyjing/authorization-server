package com.sololude.authorizationserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @GetMapping("/sub")
    @RequestMapping("/sub")
    public String loginPage() {
        return "login";
    }

    @GetMapping
    public String hello() {
        return "hello11";
    }
}
