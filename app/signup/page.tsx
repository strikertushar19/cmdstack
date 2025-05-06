"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider,
    AuthErrorCodes 
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../../firebase"


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
        setError("");
    };

    // Define interface for error code handling
    interface ErrorMessages {
        [key: string]: string;
    }

    const getReadableErrorMessage = (errorCode: string): string => {
        switch(errorCode) {
            case AuthErrorCodes.EMAIL_EXISTS:
                return "This email is already registered. Please sign in.";
            case AuthErrorCodes.INVALID_EMAIL:
                return "Please enter a valid email address.";
            case AuthErrorCodes.WEAK_PASSWORD:
                return "Password must be at least 6 characters.";
            case AuthErrorCodes.USER_DELETED:
                return "Account not found. Please sign up first.";
         
            default:
                return "An error occurred. Please try again.";
        }
    };

    const validateForm = () => {
        if (!email || !password) {
            setError("Please fill in all fields");
            return false;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address");
            return false;
        }
        
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return false;
        }
        
        return true;
    };

    // Define interfaces for error handling
    interface FirebaseAuthError {
        code: string;
        message?: string;
    }

    // Define event handler type
    const handleEmailAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        
        if (!validateForm()) return;
        
        try {
            setIsLoading(true);
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            if (isMounted) router.push("/");
        } catch (error) {
            console.error("Auth error:", error);
            const firebaseError = error as FirebaseAuthError;
            setError(getReadableErrorMessage(firebaseError.code));
        } finally {
            if (isMounted) setIsLoading(false);
        }
    };

    const handleGoogleAuth = async () => {
        try {
            setIsLoading(true);
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            // Redirect to home page after successful authentication
            if (isMounted) router.push("/");
        } catch (error) {
            console.error("Google auth error:", error);
            const firebaseError = error as { code: string };
            setError(getReadableErrorMessage(firebaseError.code));
       
        } finally {
            if (isMounted) setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                    {isSignUp ? "Create your account" : "Welcome back"}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    {isSignUp ? "Get started with your free account" : "Sign in to access your account"}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-lg rounded-xl sm:px-10 border border-gray-100">
                    {error && (
                        <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                            <div className="flex items-center">
                                <svg className="h-5 w-5 text-red-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleEmailAuth}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm"
                                    placeholder="••••••••"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                        className="text-gray-500 hover:text-gray-600 focus:outline-none"
                                    >
                                        {passwordVisible ? (
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            {!isSignUp && (
                                <div className="mt-2 flex justify-end">
                                    <Link href="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none">
                                        Forgot password?
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <span>{isSignUp ? "Create account" : "Sign in"}</span>
                                        <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                                            <svg className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3">
                            <button
                                onClick={handleGoogleAuth}
                                disabled={isLoading}
                                className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
                            >
                                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                                <span className="ml-3">Google</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            {isSignUp ? "Already have an account? " : "Don't have an account? "}
                            <button 
                                onClick={handleToggle}
                                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none transition-colors duration-150"
                            >
                                {isSignUp ? "Sign in" : "Sign up"}
                            </button>
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">
                    By continuing, you agree to our <Link href="/terms" className="underline hover:text-gray-600">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
                </div>
            </div>
        </div>
    );
};

export default SignUp;