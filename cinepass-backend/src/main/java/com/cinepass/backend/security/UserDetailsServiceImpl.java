package com.cinepass.backend.security;

import com.cinepass.backend.entity.User;
import com.cinepass.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseGet(() -> userRepository.findByPhoneNumber(email)
                        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email or phone: " + email)));

        return UserDetailsImpl.build(user);
    }
}
