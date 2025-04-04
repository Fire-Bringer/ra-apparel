"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the auth context type
interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

// Define a simple user type
interface User {
  id: string
  name: string
  email: string
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  // Check for existing session on initial load
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth")
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth)
        setIsAuthenticated(true)
        setUser(authData.user)
      } catch (error) {
        console.error("Failed to parse auth data from localStorage:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save auth state to localStorage when it changes
  useEffect(() => {
    if (isInitialized) {
      if (isAuthenticated && user) {
        localStorage.setItem("auth", JSON.stringify({ user }))
      } else {
        localStorage.removeItem("auth")
      }
    }
  }, [isAuthenticated, user, isInitialized])

  // Update the login function to provide more specific error messages

  // Mock login function
  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    // For now, we'll just simulate a successful login after validating the input

    // Input validation
    if (!email.trim()) {
      throw new Error("Email is required")
    }

    // Simple password validation
    if (!password) {
      throw new Error("Password is required")
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters")
    }

    // In a real app, we would verify credentials against a database
    // For demo purposes, we'll accept any valid format

    const mockUser = {
      id: "user_123",
      name: email.split("@")[0], // Use part of the email as the name
      email: email,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
  }

  // Update the signup function to provide more specific error messages and improve validation

  // Mock signup function
  const signup = async (name: string, email: string, password: string) => {
    // In a real app, this would make an API call to create an account
    // For now, we'll just simulate a successful signup after validating the input

    // Input validation
    if (!name.trim()) {
      throw new Error("Name is required")
    }

    if (!email.trim() || !email.includes("@")) {
      throw new Error("Valid email address is required")
    }

    // Password validation
    if (!password) {
      throw new Error("Password is required")
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long")
    }

    // Simulate checking if email already exists
    // In a real app, this would be a server-side check
    const storedAuth = localStorage.getItem("auth")
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth)
        if (authData.user && authData.user.email === email) {
          throw new Error("An account with this email already exists")
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // Ignore parsing errors
      }
    }

    // Create the user
    const mockUser = {
      id: "user_" + Math.random().toString(36).substring(2, 9),
      name: name,
      email: email,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
  }

  // Logout function
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Create a custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
