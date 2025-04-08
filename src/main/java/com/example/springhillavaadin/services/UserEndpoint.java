package com.example.springhillavaadin.services;

import com.example.springhillavaadin.security.AuthenticatedUser;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;

@BrowserCallable
@AnonymousAllowed
@RequiredArgsConstructor
public class UserEndpoint {

  private AuthenticatedUser authenticatedUser;

  public Optional<OidcUser> getAuthenticatedUser() {
    return authenticatedUser.get();
  }
}
