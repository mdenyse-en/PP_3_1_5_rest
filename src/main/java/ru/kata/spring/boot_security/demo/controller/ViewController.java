package ru.kata.spring.boot_security.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/user")
    public String getUserInfo() {
        return "user";
    }

    @GetMapping("/admin")
    public String getAdminPanel() {
        return "usersList";
    }

    @GetMapping(value = "/")
    public String getUsers() {
       return "redirect: /login";
    }
}
