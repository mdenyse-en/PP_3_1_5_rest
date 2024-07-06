package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class AdminController {

    private final UserService userService;

    private final RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
    }


    @GetMapping("/roles")
    public ResponseEntity<List<Role>> getAllRoles() {
        return new ResponseEntity<>(roleService.getRoles(), HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<HttpStatus> addUser(@RequestBody User user) {
        userService.addUser(user);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/add")
    public ResponseEntity<User> editUser(@RequestBody User user) {
        userService.updateUser(user);

        return ResponseEntity.ok().header("Content-Type", "application/json").body(user);
    }

    @GetMapping("/current")
    public ResponseEntity<User> returnCurrentUser(Principal principal) {
        return new ResponseEntity<>(userService.findUserByName(principal.getName()), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<User> returnUserById(@PathVariable long id) {
        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUserById(@PathVariable long id) {
        System.out.println("Try to delete user #" + id);
        userService.deleteUserById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
