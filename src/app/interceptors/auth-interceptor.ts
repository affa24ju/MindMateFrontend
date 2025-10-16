import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

// Interceptor används för att lägga token i varje request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Injecerar auth(service) för att få tillgång till logout()
  const authService = inject(Auth);

  // Skickar inte token med för auth-endpoint
  if (req.url.includes('/api/auth/')) {
    console.log('Auth interceptor skippade att includera token till auth endpoint: ', req.url);
    return next(req);

  }
  // Annars hämtar token från localStorage och lägg till den i request headers om den finns
  const token = localStorage.getItem('token');

  try {
    if (token) {
      // Kollar om tokenet har gått ut
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Lägger till exp i sekunder, Date.now() i millisekunder
      const exp = payload.exp * 1000;
      if (Date.now() > exp) {
        console.warn('JWT token har gått ut. Loggar ut...');
        // Anropar logout() från autService som tar bort token &
        // nevigerar till /login
        authService.logout();
        return next(req);  
      }

      // Lägger till token i header
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
      }
    });
    console.log('Auth interceptor lägger till token i header: ', req);
    } else {
      console.log('Auth interceptor hittar inget token, fortsätter utan auth header');      
    }
  } catch (error) {
    console.error('Fel vid token inläggning: ', error);
    authService.logout(); 
  }
  return next(req);
};
