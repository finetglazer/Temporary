package com.project.userservice.controller;

import com.project.userservice.payload.request.client.*;
import com.project.userservice.service.AuthService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("users/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpServletRequest httpServletRequest) {
        // capture the IP address from the request
        String ipAddress = httpServletRequest.getRemoteAddr();

        return ResponseEntity.ok(authService.login(request, ipAddress));
    }
}
