import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AuthForm from '../components/auth/auth-form';
import classes from '../components/profile/user-profile.module.css';

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p className={classes.profile}>Loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;
